/// <reference types="cypress" />
import React from 'react'
import {mount} from 'cypress-react-unit-test'
import Dog from './Dog'

describe('Dog', () => {
  it('barks', () => {
    mount(<Dog />)
    cy.get('img[alt=dog]').should('be.visible')
  })
})
