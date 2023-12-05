import { expect } from "@playwright/test"

export class Dashboard {
    constructor(page) {
        this.page = page
        this.searchBox = page.locator('#searchInput')
        this.searchIcon = page.locator('Search')
        this.firstHeading = page.locator('#firstHeading')
    }

    enterSearchTextInSearchBox = async () => {
        await this.searchBox.waitFor()
        await this.searchBox.click()
        await this.searchBox.type('Playwright software')
        await this.page.keyboard.press('Enter')
    }

    getHeadingOfNextPage = async () => {
        await this.firstHeading.waitFor()
    }
}