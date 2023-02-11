import PropTypes from 'prop-types';

import styles from './image-gallery.module.scss';

const ImageGallery = ({ children }) => {
  return <ul className={styles.gallery}>{children}</ul>;
};

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.element.isRequired,
};
