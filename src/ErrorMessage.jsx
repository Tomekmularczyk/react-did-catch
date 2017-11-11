import React from 'react';
import Types from 'prop-types';
import browserInfo from './browserInfo';

const containerStyles = {
  color: 'black',
  fontSize: '1rem',
  textAlign: 'left',
  whiteSpace: 'pre-line',
};

const errorStyles = {
  cursor: 'pointer',
  margin: '0',
};

const componentStackStyles = {
  fontSize: '.8rem',
  margin: '0',
  overflow: 'scroll',
  transition: 'max-height .3s ease',
};

const browserInfoStyles = {
  fontWeight: 'normal',
};

const arrowStyles = {
  borderStyle: 'solid',
  borderWidth: '0 5px 5px 5px',
  borderColor: 'transparent transparent black transparent',
  display: 'inline-block',
  height: '0',
  margin: 'auto auto auto 5px',
  transition: 'transform .3s ease',
  width: '0',
  verticalAlign: 'middle',
};

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.toggleIsExpanded = this.toggleIsExpanded.bind(this);
  }

  toggleIsExpanded() {
    this.setState(prev => ({ isExpanded: !prev.isExpanded }));
  }

  render() {
    const { error, info } = this.props;
    return (
      <div style={containerStyles}>
        <h5 style={errorStyles} onClick={this.toggleIsExpanded}>
          {error.toString()}
          <span style={browserInfoStyles}>({`${browserInfo.name} ${browserInfo.version}`})</span>
          <div style={{
            ...arrowStyles,
            transform: this.state.isExpanded ? 'rotate(180deg)' : '',
          }} />
        </h5>
        <div style={{
          ...componentStackStyles,
          maxHeight: this.state.isExpanded ? '250px' : '0',
        }}>
          {info.componentStack.trim()}
        </div>
      </div>
    );
  }
}

ErrorMessage.propTypes = {
  error: Types.object.isRequired,
  info: Types.shape({
    componentStack: Types.string.isRequired,
  }).isRequired,
};

export default ErrorMessage;