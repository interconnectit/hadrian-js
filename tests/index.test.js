import factory from '../src/index'
import Hadrian from '../src/core/hadrian'

describe('factory', () => {
    it('returns new Hadrian instance', () => {
        expect(factory()).toBeInstanceOf(Hadrian)
    })
})
