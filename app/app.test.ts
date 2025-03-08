import { setup, createPage } from '@nuxt/test-utils/e2e'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'


describe('app.vue', async () => {
    await setup({
        host: 'http://localhost:3000',
    })

    it('Sets the local correctly', async () => {
        const page = await createPage('/about')
        const content = await page.content()
        // console.log(content)
        expect(content).toContain('About')
    })
})