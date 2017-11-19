import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Collapsible from '../src/Collapsible'

describe('<Collapsible />', () => {
  let component
  beforeEach(() => {
    component = shallow(<Collapsible isExpanded={false}>children</Collapsible>)
  })

  it('matches snapshots', () => {
    expect(toJson(component)).toMatchSnapshot()

    component.setProps({ isExpanded: true })
    expect(toJson(component)).toMatchSnapshot()
  })
})
