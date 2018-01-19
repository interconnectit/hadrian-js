import Hadrian from '../../src/core/hadrian'

describe('Hadrian', () => {
    describe('constructor', () => {
        it('should setup custom baseURL for axios', () => {
            const baseURL = 'https://hadrian.test/metrics'
            const hadrian = new Hadrian({baseURL})
            expect(hadrian.axios.defaults.baseURL).toBe(baseURL)
        })
    })

    describe('on conditions', () => {
        it('should set triggers with callbacks', () => {
            const hadrian = new Hadrian()
            const condition = {quota: {views: 3, left: 2}}
            const callback = jest.fn()
            hadrian.on(condition, callback)

            expect(hadrian.triggers).toContainEqual({condition, callback})
        })
    })

    describe('evaluation', () => {
        it('should make a post request', () => {
            const hadrian = new Hadrian()
            const axios = {}
            const response = {data: {data: {trigger: {quota: {views: 3, left: 2}}}}}
            axios.post = jest.fn(() => Promise.resolve(response))
            hadrian.axios = axios

            const payload = {post_id: 1}

            hadrian.evaluate(payload)

            expect(axios.post).toHaveBeenCalledWith('views', {payload})
        })
    })
})
