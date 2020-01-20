import { axiosInstance } from './api'

export const getProducts = () => {
    const url = `/api/v1/web-shop/module/products/site/products`
    return axiosInstance.get(url)
}
