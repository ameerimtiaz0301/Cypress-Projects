import { LoginPage } from "../../Pages/Loginpage.cy"
 const loginPage = new LoginPage()
 it('Log in', function () {
     loginPage.navigate('https://deliverydev.quickeats.co.uk/login')
     loginPage.enteremail()
     loginPage.enterpassword()
     loginPage.checkbox()
     loginPage.clicksubmitbutton()
 })
 it('Rider Page', function () {
    cy.get('.main_side > :nth-child(9) > .nav-link').click()
    })
