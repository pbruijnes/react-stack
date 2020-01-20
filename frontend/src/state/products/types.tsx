import * as productsConstants from './constants'

export interface Product {
    id: number
    sku: string
    price: string
    workflowActive: boolean
}

export interface ProductsError {
    error_description: string
    error: string
}

export interface ProductsState {
    all: ProductsAll | null
    isLoading: boolean
    error: ProductsError | null
}

export interface Pagination {
    pageItems: number
    pageNumber: number
    totalItems: number
    totalPages: number
}

export interface ProductsAll {
    products: Product[]
    pagination: Pagination
}

export type productsActions =
    | {
          type: typeof productsConstants.PRODUCTS_FETCH
      }
    | {
          type: typeof productsConstants.PRODUCTS_FETCH_SUCCESS
          payload: ProductsAll
      }
    | {
          type: typeof productsConstants.PRODUCTS_FETCH_FAILURE
          payload: ProductsError
      }
    | {
          type: typeof productsConstants.PRODUCTS_RESET
      }
