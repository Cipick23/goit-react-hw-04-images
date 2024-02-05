import { useEffect } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import styles from './Modal.module.css';

const Modal = ({ url, onClose }) => {
  useEffect(() => {
    const instance = basicLightbox.create(`
      <div className="${styles.Modal}">
        <img 
          src='${url}'
          width="900"
          height="800"
          alt="Large Image"
        >
      </div>
    `);

    instance.show();

    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        instance.close();
        onClose();
      }
    };

    const handleClickOutside = e => {
      if (e.target === e.currentTarget) {
        instance.close();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    instance.element().addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      instance.element().removeEventListener('click', handleClickOutside);
    };
  }, [url, onClose]);

  return null;
};

export default Modal;
