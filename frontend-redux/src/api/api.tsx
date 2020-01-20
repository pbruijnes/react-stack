import axios from 'axios'
import storage from 'redux-persist/lib/storage'

import { settings } from '@frontend-redux/config'

interface AxiosConfig {
    timeout: number
    baseURL: string
    headers: {
        Accept: string
        'Content-Type': string
        Authorization?: string
        'Access-Control-Allow-Origin': string
    }
}

const config: AxiosConfig = {
    timeout: 10000,
    baseURL: settings.BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
}

const axiosInstance = axios.create(config)

axiosInstance.interceptors.request.use(
    async (c: AxiosConfig) => {
        return storage.getItem('access_token').then((access_token: string) => {
            c.headers.Authorization = `Bearer ${access_token}`
            console.log('access_token', access_token, storage)
            return c
        })
    },
    (error: any) => {
        return Promise.reject(error)
    },
)

export { axiosInstance }
