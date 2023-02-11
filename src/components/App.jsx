import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LargeImage from './LargeImage/LargeImage';

import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

import { imageFinder } from 'services/image-finder-api';

import styles from './app.module.scss';

class App extends Component {
  state = {
    search: '',
    results: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchResults();
    }
  }
  async fetchResults() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await imageFinder(search, page);
      this.setState(({ results }) => ({
        results: [...results, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchResults = ({ search }) => {
    this.setState({ search, results: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showImage = ({ largeImageURL }) => {
    this.setState({
      largeImage: {
        largeImageURL,
      },

      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImage: null,
    });
  };

  render() {
    const { results, loading, error, showModal, largeImage } = this.state;
    const { searchResults, loadMore, showImage, closeModal } = this;

    return (
      <>
        <Searchbar onSubmit={searchResults} />
        <ImageGallery>
          <ImageGalleryItem results={results} showImage={showImage} />
        </ImageGallery>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {loading && <Loader />}
        {Boolean(results.length) && (
          <Button
            onClick={() => {
              loadMore();
            }}
            text="Load More"
          >
            Load More
          </Button>
        )}
        {showModal && (
          <Modal close={closeModal}>
            <LargeImage {...largeImage} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
