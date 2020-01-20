import { all, call, put, takeLatest } from 'redux-saga/effects'

import { getProducts } from '@frontend-redux/api'
import { productsConstants } from '../products'
import { productsFetchFailure, productsFetchSuccess } from './actions'

export function* productsFetchAll() {
    try {
        const {
            data: {
                data: { products, pagination },
            },
        } = yield call(getProducts)

        yield put(
            productsFetchSuccess({
                products,
                pagination,
            }),
        )
    } catch (error) {
        yield put(productsFetchFailure(error.response.data))
    }
}

export default function* watchProductsActions() {
    yield all([takeLatest(productsConstants.PRODUCTS_FETCH, productsFetchAll)])
}
