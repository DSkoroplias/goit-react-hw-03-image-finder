import PropTypes from 'prop-types';

import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = ({ results, showImage }) => {
  const elements = results.map(({ id, webformatURL, largeImageURL }) => (
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
  ));
  return <>{elements}</>;
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  results: [],
};

ImageGalleryItem.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  showImage: PropTypes.func.isRequired,
};
