import { substractDomain } from '../substract-domain'

describe('substractDomain', () => {
    it('returns default values on localhost', () => {
        const localhostUrl = 'localhost'
        expect(substractDomain(localhostUrl)).toStrictEqual({ domain: 'orderpicker', subdomain: 'dominos' })
    })
    it('gives domain foo and subdomain bar with url https://foo.bar.me ', () => {
        const localhostUrl = 'https://foo.bar.me'
        expect(substractDomain(localhostUrl)).toStrictEqual({ domain: 'bar', subdomain: 'foo', tld: 'me' })
    })
})
