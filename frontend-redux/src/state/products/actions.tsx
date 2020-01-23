import * as productsConstants from './constants'
import { productsActions, ProductsAll, ProductsError } from './types'

export const productsFetch = (): productsActions => ({
    type: productsConstants.PRODUCTS_FETCH,
})

export const productsFetchSuccess = (payload: ProductsAll): productsActions => ({
    type: productsConstants.PRODUCTS_FETCH_SUCCESS,
    payload,
})

export const productsFetchFailure = (payload: ProductsError): productsActions => ({
    type: productsConstants.PRODUCTS_FETCH_FAILURE,
    payload,
})

export const productsReset = (): productsActions => ({
    type: productsConstants.PRODUCTS_RESET,
})
