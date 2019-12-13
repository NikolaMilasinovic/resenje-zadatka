import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Loading =  () => (
  <div className="loading">
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </div>
);


export default Loading;
