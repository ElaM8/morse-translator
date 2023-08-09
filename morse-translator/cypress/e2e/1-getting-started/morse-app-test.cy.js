/// <reference types="cypress" />

describe('morse-app-test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('displays input instructions', () => {
    cy.get('.translator__input--instruction').should('exist')
  })

  it('has an input field', () => {
    cy.get('.translator__input--input-field').should('exist')
  })

  it('can translate a string', () => {
    const newString = 'Hello World'
    const newMorseCommaSeparated = ". . . .,.,. _ . .,. _ . .,_ _ _,,. _ _,_ _ _,. _ .,. _ . .,_ . ."
    cy.get('.translator__input--input-field').type(`${newString}{enter}`)
    cy.get('.translator__display--output')
      .should('exist')
      .should('have.text', newMorseCommaSeparated)
  })
  })
