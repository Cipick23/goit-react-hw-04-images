import React, { useState } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalImg, setModalImg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);

  const handleInputChange = handleValue => {
    setInputValue(handleValue);
    setPage(1);
  };

  const handleModalToggle = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const showModalImg = url => {
    handleModalToggle();
    setModalImg(url);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar handleInputChange={handleInputChange} />
      <ImageGallery
        inputValue={inputValue}
        onClick={showModalImg}
        loadMore={loadMore}
        page={page}
      />
      {showModal && <Modal url={modalImg} onClose={handleModalToggle} />}
    </>
  );
};

export default App;
