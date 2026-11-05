import { expect } from '@wdio/globals'
import PosCredentialsPage from '../pageobjects/poscredentials.page.js'
import NegCredentialsPage from '../pageobjects/negcredentials.page.js'


describe('My Login application', () => {
    for (let i = 0; i < PosCredentialsPage.credentials.users.length; i++) {
        it('positive test credentials', async () => {
            await PosCredentialsPage.open()
            await browser.pause(1000)
            await PosCredentialsPage.login(PosCredentialsPage.credentials.users[i], PosCredentialsPage.credentials.password)
            await browser.pause(1000)
           
            if (PosCredentialsPage.credentials.users[i] === "locked_out_user") {
                await expect($('[role="alert"]')).toBeExisting()
                await expect($('[role="alert"]')).toHaveText(
                    expect.stringContaining('locked out'))
            } else {
                await expect($('.app_logo')).toBeExisting()
                await expect($('.app_logo')).toHaveText(
                    expect.stringContaining('Swag Labs'))
            }
        })
    }

       for (let i = 0; i < NegCredentialsPage.credentials.users.length; i++) {
        it('negative test credentials', async () => {
            await NegCredentialsPage.open()
            await browser.pause(1000)
            await NegCredentialsPage.login(NegCredentialsPage.credentials.users[i], NegCredentialsPage.credentials.password)
            await browser.pause(1000)
            await expect($('[role="alert"]')).toBeExisting()
            await expect($('[role="alert"]')).toHaveText(
                expect.stringContaining('Username and password do not match'))
        })
    }
})

