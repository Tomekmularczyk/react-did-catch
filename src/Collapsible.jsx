import React from 'react';
import Types from 'prop-types';

const expandedStyles = {
  overflow: 'hidden',
  transition: 'max-height .3s ease',
  maxHeight: '250px',
};

const collapsedStyles = {
  transition: 'max-height .3s ease',
  overflow: 'hidden',
  maxHeight: '0',
};

const Collapsible = ({ children, isExpanded }) => (
  <div style={isExpanded ? expandedStyles : collapsedStyles}>
    {children}
  </div>
);

Collapsible.propTypes = {
  children: Types.node,
  isExpanded: Types.bool.isRequired,
};

export default Collapsible;