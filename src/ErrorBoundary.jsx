import React from 'react';
import Types from 'prop-types';
import ErrorMessage from './ErrorMessage';
import browserInfo from './browserInfo';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null,
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ info, error, hasError: true });
  }

  render() {
    const { error, info, hasError } = this.state;
    const { render } = this.props;
    if (hasError) {
      if (typeof (render) === 'function') {
        return render(error, info, browserInfo);
      } else {
        return (
          <ErrorMessage
            error={error}
            info={info}
          />
        );
      }
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  render: Types.func,
};

export default ErrorBoundary;