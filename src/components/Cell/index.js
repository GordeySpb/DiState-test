import React from 'react';

const Cell = ({
 value, className, style, onClick 
}) => (
  <div onClick={onClick} className={className} style={style}>
    {value}
  </div>
);

export default Cell;
