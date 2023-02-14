import PropTypes from 'prop-types';

import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, showImage }) => {
  return (
    <li
      onClick={() => showImage({ largeImageURL })}
      key={id}
      className={styles.gallery_item}
    >
      <img
        className={styles.galleryItem_image}
        src={webformatURL}
        alt=""
        width="260"
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  results: [],
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showImage: PropTypes.func.isRequired,
};
