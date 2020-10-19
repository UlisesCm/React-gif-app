import React from 'react'
import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Pruebas en <GifExperApp/>', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow (<GifExpertApp/>)
    expect(wrapper).toMatchSnapshot();
  })
  
})
