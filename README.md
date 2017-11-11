# React Did Catch

A simple component for React v.16 that catches javascript errors during rendering.
Based on [React Error Boundaries.](https://reactjs.org/docs/error-boundaries.html)

#### Usage:
````javascript
import React from 'react';
import CatchError from 'react-did-catch';

class FailingComponent extends React.Component {
  state = {
    text: ['99', 'little', 'bugs', 'in', 'the', 'code'],
  };

  handleClick = () => {
    this.setState({ text: 5 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>cause error</button>
        <p>{this.state.text.join(' ')}</p>
      </div>
    );
  }
}

const SafeComponent = () => (
  <CatchError>
    <FailingComponent />
  </CatchError>
); 


````
Now if you click the button, *CatchError* will catch the error and by default render the error
and stack-trace message.

#### Custom component with `render` prop:

````javascript
const SafeComponent = () => (
  <CatchError 
    render={
      (error, info, browser) => <MyCustomComponent error={error} info={info} browser={browser} />
    }
  >
    <FailingComponent />
  </CatchError>
);
````

`browser` parameter is passed from [detect-browser.](https://www.npmjs.com/package/detect-browser)

#### `ErrorMessage` component
You can extract component responsible for printing error and stack-trace. It requires, two props
(error and info) props from [componentDidCatch](https://reactjs.org/docs/error-boundaries.html#componentdidcatch-parameters) hook.

````javascript
import CatchError, { ErrorMessage } from 'react-did-catch';
const SafeComponent = () => (
  <CatchError
    render={(error, info, browser) => {
      reportTheError(error, info, browser);
      return (
        <div>
          <p>Houston! We have problem.</p>
          <ErrorMessage error={error} info={info} />
        <div>
      );
    }}
  >
    <FailingComponent />
  </CatchError>
);
````