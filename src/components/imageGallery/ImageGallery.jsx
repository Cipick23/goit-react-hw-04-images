import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import Loader from 'components/loader/Loader';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import Button from 'components/button/Button';
import articles from 'services/api';

const ImageGallery = ({ onClick, inputValue, page, loadMore }) => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('No network request is happening.');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setStatus('A network request has been initiated and is in progress...');
        const response = await articles(inputValue, page);
        setImages(prevImages => [...prevImages, ...response.hits]);
        setStatus('The network request has completed successfully');
      } catch (error) {
        setStatus('The network request has failed.');
      }
    };

    // Doar dacă există o valoare în inputValue, facem solicitarea la API
    if (inputValue) {
      fetchImages();
    }
  }, [inputValue, page]);

  if (!inputValue) {
    // Aici poți decide să afișezi un mesaj sau orice altceva în locul imaginilor
    return (
      <p className={styles.errorMessage}>
        Enter the search term to display images.
      </p>
    );
  }

  if (status === 'A network request has been initiated and is in progress...') {
    return <Loader />;
  }

  if (status === 'The network request has completed successfully') {
    return (
      <>
        <ul className={styles.ImageGallery}>
          {images.map(({ id, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              url={largeImageURL}
              tags={tags}
              onClick={onClick}
            />
          ))}
        </ul>
        {images.length !== 0 && <Button onClick={loadMore} />}
      </>
    );
  }

  return null;
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default ImageGallery;
