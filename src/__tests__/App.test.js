import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { App } from '../containers'
import { Navbar } from '../containers'
import store from '../store'

describe('app renders correctly', () => {
  it('renders navbar', () => {
    const wrapped = shallow(<App />)

    expect(wrapped.find(Navbar).length).toEqual(1)
  })
})
