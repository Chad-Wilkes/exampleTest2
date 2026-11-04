import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import Products from '../pageobjects/products.page.js'  

describe('My Login application', () => {
    for (let i = 0; i < LoginPage.credentials.users.length; i++) {
        it('should login with valid credentials', async () => {
            await LoginPage.open()
            await browser.pause(1000)
            await LoginPage.login(LoginPage.credentials.users[i], LoginPage.credentials.password)
            // await LoginPage.login(LoginPage.acceptedUsers[i], LoginPage.standard_pass)    
            // await LoginPage.login(LoginPage.standard_user, LoginPage.standard_pass)
            await browser.pause(1000)
            await expect(InventoryPage.appLogo).toBeExisting()
            await expect(InventoryPage.appLogo).toHaveText(
                expect.stringContaining('Swag Labs'))
            await browser.pause(1000)
        })
    }

        it('should add an item to the cart', async () => {
            await Products.addItemToCart('Sauce Labs Backpack');
            await browser.pause(2000)
            await expect($('#remove-sauce-labs-backpack')).toBeExisting()
            // await expect($('#shopping_cart_link')).toHaveText(
            //     expect('#shopping_cart_link'))
            await browser.pause(2000)
        })
})

