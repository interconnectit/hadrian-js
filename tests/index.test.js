import factory from '../src/index'
import Hadrian from '../src/core/hadrian'

describe('factory', () => {
    it('return new Hadrian instance', () => {
        expect(factory()).toBeInstanceOf(Hadrian)
    })
})
