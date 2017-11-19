const container = {
  color: 'black',
  fontSize: '1rem',
  textAlign: 'left',
  whiteSpace: 'pre-line',
  margin: 'auto'
}

const errorMessage = {
  cursor: 'pointer',
  margin: '0'
}

const componentStack = {
  fontSize: '.8rem',
  margin: '0',
  overflow: 'scroll'
}

const browserInfo = {
  fontWeight: 'normal'
}

const arrow = {
  borderStyle: 'solid',
  borderWidth: '0 5px 5px 5px',
  borderColor: 'transparent transparent black transparent',
  display: 'inline-block',
  height: '0',
  margin: 'auto auto auto 5px',
  transition: 'transform .3s ease',
  width: '0',
  verticalAlign: 'middle'
}

const defaultStyles = {
  container,
  errorMessage,
  componentStack,
  browserInfo,
  arrow
}

export default defaultStyles

export function mergeStyles (currentStyles, newStyles) {
  if (!newStyles) {
    return currentStyles
  }

  return {
    container: { ...currentStyles.container, ...newStyles.container },
    errorMessage: { ...currentStyles.errorMessage, ...newStyles.errorMessage },
    componentStack: { ...currentStyles.componentStack, ...newStyles.componentStack },
    browserInfo: { ...currentStyles.browserInfo, ...newStyles.browserInfo },
    arrow: { ...currentStyles.arrow, ...newStyles.arrow }
  }
}
