import React from 'react';

const Segment = ( { newClass, temperature } ) => (
  <li className={`${newClass} celcius-${temperature}`}>
    {temperature}
  </li>
)

export default Segment;