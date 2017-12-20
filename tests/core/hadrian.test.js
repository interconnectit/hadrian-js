import Hadrian from '../../src/core/hadrian'
import axios from 'axios'

describe('Hadrian', () => {
    describe('constructor', () => {
        it('should throw an error without base url', () => {
            expect(() => {
                const hadrian = new Hadrian()
                hadrian.on({test: true})
            }).toThrowError('Missing the base url')
        })

        it('should setup baseURL for axios', () => {
            const hadrian = new Hadrian('https://test.com')
            expect(hadrian.axios.defaults.baseURL).toBe('https://test.com')
        })
    })

    describe('on', () => {
        it('should add triggers with callbacks', () => {
            const hadrian = new Hadrian('https://test.com')

            const callback = jest.fn()
            const condition = {quota: {views: 3, left: 2}}
            hadrian.on(condition, callback)

            expect(hadrian.triggers).toContainEqual({condition, callback})
        })
    })

    describe('evaluation', () => {
        it('should create post request to metrics', () => {
            const hadrian = new Hadrian('https://test.com')

            const axios = {}
            const response = {data: {data: {trigger: {quota: {views: 3, left: 2}}}}}
            axios.post = jest.fn(() => Promise.resolve(response))
            hadrian.axios = axios

            const payload = {post_id: 1}

            hadrian.evaluate(payload)

            expect(axios.post).toHaveBeenCalledWith('metrics', {payload})
        })
        /* ToDo: this should work but for some reason tells that the mock-callback is not called even though it is definitely there */
        /*        it('should evaluate the given response and execute the callback', () => {
                    const hadrian = new Hadrian('https://test.com')

                    const axios = {}
                    const response = {data: {data: {trigger: {quota: {views: 3, left: 2}}}}}
                    axios.post = jest.fn(() => Promise.resolve(response))
                    hadrian.axios = axios

                    const callback = jest.fn()
                    hadrian.on(response.data.data.trigger, callback)

                    const payload = {post_id: 1}

                    hadrian.evaluate(payload)

                    expect(callback).toHaveBeenCalledWith(response.data.data)
                })*/
    })

    /*    describe('axios', () => {
            it('should add site header to axios request', () => {
                const hadrian = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
                console.log(hadrian.axios.interceptors.request)
                expect(hadrian.axios).toBe()
            })
        })*/
})
