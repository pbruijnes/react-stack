import { authenticationTypes } from '../state/authentication'
import { axiosInstance } from './api'

export const doAuthenticateBasic = (payload: authenticationTypes.Credentials) => {
    const url = `/oauth/v2/token`
    const { domain, subdomain, grantType, username, password } = payload

    // @todo transform camelCase
    const data = {
        sub_domain: subdomain,
        domain,
        grant_type: grantType,
        username,
        password,
    }
    return axiosInstance.post(url, data)
}
