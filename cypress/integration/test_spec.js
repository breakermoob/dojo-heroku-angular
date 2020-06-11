describe('Mercadolibre Home Search', () => {
   it('Gets Iphones', () => {
      //Join
      cy.visit('/'); //Arrange
      //Search and click
      cy.get('[type="text"]').clear()
      cy.get('[type="text"]').type('iPhone {enter}') ;
      cy.contains('iPhone');
      cy.get('div .image:first').click();
      // cy.contains('precio');

      // //check include url
      // cy.url().should('include', '/commands/actions');//assert
      // //get item using the css selector
      // cy.get('.action-email')
      //    .type('leon.arango@udea.edu.co')
      //    .should('have.value', 'leon.arango@udea.edu.co');
   });
});