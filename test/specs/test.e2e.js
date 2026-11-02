import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(LoginPage.standard_user, LoginPage.standard_pass)
        await browser.pause(3000)
        await expect(InventoryPage.appLogo).toBeExisting()
        await expect(InventoryPage.appLogo).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
})

