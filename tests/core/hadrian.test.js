import Hadrian from '../../src/core/hadrian'
import axios from 'axios'
import jsCookie from 'js-cookie'

describe('Hadrian', () => {
    describe('constructor', () => {
        it('should setup site uuid parameter', () => {
            const instance = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
            expect(instance.siteUuid).toBe('63a67339-f3c9-47eb-8551-fc7c28bab06c')
        })

/*        it('should setup axios instance with default parameters', () => {
            const instance = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c', {})
            console.log(instance.axios.interceptors.InterceptorManager.handlers)
            console.log(axios.create())
            expect(instance.axios).toEqual(axios.create({baseURL: 'https://api.hadrianpaywall.com', timeout: 2000}))
        })*/

        it('should setup custom baseURL for axios', () => {
            const instance = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c', {baseURL: 'https://hadrian-api-staging.herokuapp.com/metrics'})
            expect(instance.axios.defaults.baseURL).toBe('https://hadrian-api-staging.herokuapp.com/metrics')
        })

        /* ToDo */
        /*it('should setup the sessionUuid', () => {
            const instance = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
            expect(instance.sessionUuid).toBe() // PROBABLY NEED TO MOCK THE JSCOOKIE
        })*/

        /* ToDo */
        /*it('should setup the subscriberUuid', () => {
            const instance = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
            expect(instance.subscriberUuid).toBe() // PROBABLY NEED TO MOCK THE JSCOOKIE
        })*/
    })

    describe('on conditions', () => {
        it('should add triggers', () => {
            const instance = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c')
            const callback = jest.fn()
            instance.on({quota: {views: 3, left: 2}}, callback)
            expect(instance.triggers).toContainEqual({ condition: {quota: {views: 3, left: 2}}, callback: callback })
        })
    })

    describe('evaluation', () => {
        /* ToDo */
/*        it('should evaluate correctly', () => {
            const instance = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c', {baseURL: 'https://hadrian-api-staging.herokuapp.com/metrics'})
            const payload = '{"post_id":7342,"post_parent_id":0,"post_author_id":33,"post_type":"post","post_slug":"gender-champions-case-study","post_status":"publish","post_created_date":"2017-04-10T13:23:49+00:00","post_updated_date":"2017-05-10T10:18:47+00:00","post_terms":[{"term_id":4,"term_parent_id":0,"term_taxonomy":"category","term_slug":"portfolio"}]}'
            const callback = jest.fn()
            instance.on({quota: {views: 3, left: 2}}, callback)
            instance.evaluate(payload)
            expect(callback).toHaveBeenCalled() // MAYBE I NEED TO CHECK A PROMISE?
        })*/
    })

/*    describe('evaluateMetricsResponse', () => {
        const instance = new Hadrian('63a67339-f3c9-47eb-8551-fc7c28bab06c', {baseURL: 'https://hadrian-api-staging.herokuapp.com/metrics'})
        const trigger = {quota: {views: 3, left: 0}}
        const data = {data: {trigger: trigger}}
        const callback = function (data) { return data }
        instance.on(trigger, callback)
        it('should compare correctly', () => {
            expect(evaluateMetricsResponse.call(instance)).toBe()
        })
    })*/
})
