import { Component } from 'react';

import PropTypes from 'prop-types';

import { ReactComponent as AddIcon } from '../../icons/search.svg';

import styles from './searchbar.module.scss';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button type="submit" className={styles.button}>
            <AddIcon width="20" height="20" />
            <span className={styles.button_label}>Search</span>
          </button>

          <input
            value={search}
            onChange={handleChange}
            name="search"
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
