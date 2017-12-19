import Hadrian from '../../src/core/hadrian'
import axios from 'axios'

describe('Hadrian', () => {
    describe('constructor', () => {
        it('should setup site uuid parameter', () => {
            const hadrian = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
            expect(hadrian.siteUuid).toBe('63a67339-f3c9-47eb-8551-fc7c28bab06c')
        })

        it('should setup default baseURL for axios', () => {
            const hadrian = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
            expect(hadrian.axios.defaults.baseURL).toBe('https://api.hadrianpaywall.com')
        })

        it('should setup custom baseURL for axios', () => {
            const hadrian = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c', {baseURL: 'https://hadrian-api-staging.herokuapp.com/metrics'})
            expect(hadrian.axios.defaults.baseURL).toBe('https://hadrian-api-staging.herokuapp.com/metrics')
        })

        /* ToDo */
/*        it('should setup the sessionUuid', () => {
            const jsCookie = {}
            jsCookie.get = jest.fn()
            const hadrian = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
            expect(jsCookie.get).toHaveBeenCalledWith('hadrian-session-uuid')
        })*/

        /* ToDo */
        /*it('should setup the subscriberUuid', () => {
            const hadrian = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
            expect(hadrian.subscriberUuid).toBe() // PROBABLY NEED TO MOCK THE JSCOOKIE
        })*/
    })

    describe('on conditions', () => {
        it('should add triggers with callbacks', () => {
            const hadrian = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
            const callback = jest.fn()
            hadrian.on({quota: {views: 3, left: 2}}, callback)

            expect(hadrian.triggers).toContainEqual({condition: {quota: {views: 3, left: 2}}, callback: callback})
        })
    })

    describe('evaluation', () => {
        /* ToDo */
        it('should create post request to metrics', () => {
            const hadrian = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')

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
            const hadrian = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')

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
