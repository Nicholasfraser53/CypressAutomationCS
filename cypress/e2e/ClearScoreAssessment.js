describe('ClearScore', () => {
  it('passes', () => {
    cy.visit('https://www.clearscore.com/za')
  })
})

describe('Our first suit', () => {

   
    it('Test 1', ( )=>  {
    
        cy.visit('/')

    //We use cookies is present

    cy.get('[class="cookieNotice--vQki5"]')

    // we use cookies can be dismissed

    cy.get('[class="cookieNotice--vQki5"]').contains('No problem').click()

    //we use cookies does not exist

    cy.get('[class="cookieNotice--vQki5"]').should('not.exist')

    //check that appropriate cookies are set

    cy.getCookies()
    
    })
    it('Test 3', ( )=>  {
    
      cy.visit('/')

      //check that email field exists and type email address

      cy.get('[name="prospectForm"]').find('[type="email"]')
        .click()
        .type('testemail111@gmail.com').wait(1000)

        //click submit email address and ensure you are taken to registration page
      
        cy.get('[name="prospectForm"]').find('[type="submit"]').click()
          .wait(5000)
          cy.get('[placeholder="Your legal first name"]')

    })
  })
    
