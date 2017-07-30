import React from 'react';
import Slider from 'material-ui/Slider';

const styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
};

/**
 * The orientation of the slider can be reversed and rotated using the `axis` prop.
 */
const Filters = () => (
  <div style={styles.root}>
    <p>Max</p>
    <Slider style={{width: 350}} axis="x-reverse" />
    <p>Min</p>
  </div>
);

export default Filters;
