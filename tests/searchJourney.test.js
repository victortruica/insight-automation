import { test, expect } from "@playwright/test"
import { Dashboard } from "../page-objects/Dashboard"
const { devices } = require('playwright');

test ("Search Wikipedia", async ({ page }) => {
    
    await page.goto('https://www.wikipedia.org/')
    const dashboard = new Dashboard(page)
    await dashboard.enterSearchTextInSearchBox()
    await dashboard.getHeadingOfNextPage()
    await expect(dashboard.firstHeading).toHaveText('Search results')
    
})