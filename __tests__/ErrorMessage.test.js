import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ErrorMessage from '../src/ErrorMessage'

jest.mock('../src/browserInfo', () => ({ name: 'Chrome', version: '60.0.0.1' }))

describe('<ErrorMessage />', () => {
  let component
  beforeEach(() => {
    component = shallow(
      <ErrorMessage
        error={new Error('Error happened')}
        info={{ componentStack: 'Error in\nTestComponent ...' }}
      />
    )
  })

  it('matches snapshots', () => {
    expect(toJson(component)).toMatchSnapshot()
  })
})
