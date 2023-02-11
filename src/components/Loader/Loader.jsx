import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import styles from './loader.module.scss';

const override: React.CSSProperties = {
  //   display: 'block',
  //   margin: '0 auto',
  //   borderColor: 'red',
};

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sweet_loading}>
          <BeatLoader
            cssOverride={override}
            size={20}
            color={'#3f51b5'}
            loading={this.state.loading}
            speedMultiplier={1.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }
}

export default Loader;
