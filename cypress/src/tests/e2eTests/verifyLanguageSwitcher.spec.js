describe('Language Switcher', () => {
  beforeEach(() => {
    // Visit the homepage
    cy.visit('/');
  });

  it('should display language switcher in header', () => {
    // Check if language switcher is visible
    cy.get('.language-switcher-wrapper').should('be.visible');
    cy.get('.nav-language-button').should('be.visible');
    
    // Check if current language is displayed
    cy.get('.language-flag').should('be.visible');
    cy.get('.language-code').should('be.visible');
  });

  it('should open language dropdown when clicked', () => {
    // Click on language button
    cy.get('.nav-language-button').click();
    
    // Check if dropdown is visible
    cy.get('.nav-language-panel').should('have.class', 'nav-panel--show');
    cy.get('.language-list').should('be.visible');
    
    // Check if both language options are present
    cy.get('.language-option').should('have.length', 2);
    cy.get('.language-option[data-lang="en"]').should('be.visible');
    cy.get('.language-option[data-lang="de"]').should('be.visible');
  });

  it('should switch to German when German option is selected', () => {
    // Click on language button
    cy.get('.nav-language-button').click();
    
    // Click on German option
    cy.get('.language-option[data-lang="de"]').click();
    
    // Check if URL contains German language code
    cy.url().should('include', '/us/de');
  });

  it('should switch to English when English option is selected', () => {
    // First switch to German
    cy.get('.nav-language-button').click();
    cy.get('.language-option[data-lang="de"]').click();
    cy.url().should('include', '/us/de');
    
    // Then switch back to English
    cy.get('.nav-language-button').click();
    cy.get('.language-option[data-lang="en"]').click();
    
    // Check if URL contains English language code
    cy.url().should('include', '/us/en');
  });

  it('should close dropdown when clicking outside', () => {
    // Open dropdown
    cy.get('.nav-language-button').click();
    cy.get('.nav-language-panel').should('have.class', 'nav-panel--show');
    
    // Click outside the dropdown
    cy.get('body').click(0, 0);
    
    // Check if dropdown is closed
    cy.get('.nav-language-panel').should('not.have.class', 'nav-panel--show');
  });

  it('should display correct flag and language code for current language', () => {
    // Check initial state (should be English)
    cy.get('.language-flag').should('contain', '🇺🇸');
    cy.get('.language-code').should('contain', 'EN');
    
    // Switch to German
    cy.get('.nav-language-button').click();
    cy.get('.language-option[data-lang="de"]').click();
    
    // Check if display updates to German
    cy.get('.language-flag').should('contain', '🇩🇪');
    cy.get('.language-code').should('contain', 'DE');
  });

  it('should be responsive on mobile devices', () => {
    // Set viewport to mobile size
    cy.viewport(375, 667);
    
    // Check if language switcher is still visible
    cy.get('.language-switcher-wrapper').should('be.visible');
    cy.get('.nav-language-button').should('be.visible');
    
    // On mobile, language code and arrow should be hidden
    cy.get('.language-code').should('not.be.visible');
    cy.get('.language-arrow').should('not.be.visible');
    
    // Only flag should be visible
    cy.get('.language-flag').should('be.visible');
  });
}); 