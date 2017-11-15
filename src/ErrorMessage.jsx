import React from 'react'
import Types from 'prop-types'
import browserInfo from './browserInfo'
import defaultStyles, { mergeStyles } from './styles'
import Collapsible from './Collapsible'

class ErrorMessage extends React.Component {
  state = {
    isExpanded: false
  }

  toggleIsExpanded = () => this.setState(prev => ({ isExpanded: !prev.isExpanded }))

  render () {
    const { isExpanded } = this.state
    const { error, info } = this.props

    const styles = mergeStyles(defaultStyles, this.props.customStyles)
    return (
      <div style={styles.container}>
        <h5 style={styles.errorMessage} onClick={this.toggleIsExpanded}>
          {error.toString()}
          <span style={styles.browserInfo}>({`${browserInfo.name} ${browserInfo.version}`})</span>
          <div style={isExpanded ? { ...styles.arrow, transform: 'rotate(180deg)' } : styles.arrow} />
        </h5>
        <Collapsible isExpanded={isExpanded}>
          <div style={styles.componentStack}>
            {info.componentStack.trim()}
          </div>
        </Collapsible>
      </div>
    )
  }
}

ErrorMessage.propTypes = {
  error: Types.object.isRequired,
  info: Types.shape({
    componentStack: Types.string.isRequired
  }).isRequired,
  customStyles: Types.shape({
    container: Types.object,
    errorMessage: Types.object,
    componentStack: Types.object,
    browserInfo: Types.object,
    arrow: Types.object
  })
}

export default ErrorMessage
