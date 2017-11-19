import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ErrorBoundary from '../src/ErrorBoundary'

describe('<ErrorBoundary />', () => {
  let component
  beforeEach(() => {
    component = shallow(
      <ErrorBoundary isExpanded={false}>children</ErrorBoundary>
    )
  })

  it('matches snapshots', () => {
    expect(toJson(component)).toMatchSnapshot()

    component.setState({ hasError: true, error: new Error(''), info: { componentStack: '' } })
    expect(toJson(component)).toMatchSnapshot()
  })
})
