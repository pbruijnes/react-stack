import parseDomain from 'parse-domain'

const LOCAL_DOMAINS = ["localhost", "127.0.0.1"]

const isLocal = (url: string) => LOCAL_DOMAINS.includes(url)

export const substractDomain = (url: string) => isLocal(url) ? { domain: 'orderpicker', subdomain: 'dominos' } : parseDomain(url)

