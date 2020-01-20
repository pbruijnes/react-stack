import * as productsConstants from './constants'
import { productsActions, ProductsState } from './types'

export const initialState = {
    all: null,
    isLoading: false,
    products: null,
    error: null,
}

export const productsReducer = (state: ProductsState = initialState, action: productsActions) => {
    switch (action.type) {
        case productsConstants.PRODUCTS_FETCH:
            return {
                ...state,
                all: null,
                isLoading: true,
            }
        case productsConstants.PRODUCTS_FETCH_SUCCESS:
            return {
                ...state,
                all: action.payload,
                isLoading: false,
            }
        case productsConstants.PRODUCTS_FETCH_FAILURE:
            return {
                ...state,
                all: null,
                error: action.payload,
                isLoading: false,
            }
        case productsConstants.PRODUCTS_RESET:
            return {
                ...initialState,
            }
        default:
            return state
    }
}
