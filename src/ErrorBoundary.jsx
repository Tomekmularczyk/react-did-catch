import React from 'react'
import Types from 'prop-types'
import ErrorMessage from './ErrorMessage'
import browserInfo from './browserInfo'

class ErrorBoundary extends React.Component {
  state = {
    error: null,
    info: null,
    hasError: false
  }

  componentDidCatch (error, info) {
    this.setState({ info, error, hasError: true })
  }

  render () {
    const { error, info, hasError } = this.state
    const { render, customStyles } = this.props
    if (hasError) {
      if (typeof (render) === 'function') {
        return render(error, info, browserInfo)
      } else {
        return (
          <ErrorMessage
            error={error}
            info={info}
            customStyles={customStyles}
          />
        )
      }
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  render: Types.func,
  customStyles: Types.shape({
    container: Types.object,
    errorMessage: Types.object,
    componentStack: Types.object,
    browserInfo: Types.object,
    arrow: Types.object
  })
}

export default ErrorBoundary
