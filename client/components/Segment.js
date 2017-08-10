import React from 'react';

const Segment = ( { newClass, temperature } ) => (
  <li className={newClass}>
    {temperature}
  </li>
)

export default Segment;