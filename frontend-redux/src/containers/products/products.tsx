import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { AppState } from '@frontend-redux/state/'
import { productsFetch, productsReset } from '@frontend-redux/state/products/actions'
import { Product } from '@frontend-redux/state/products/types'
import { PageTemplate } from '@frontend-redux/components/page-template'

const Hr = styled.hr`
    margin: 20px 0;
`

const ResetButton = styled(Button)`
    margin: 0 0 0 10px;
`

export const Products = () => {
    const dispatch = useDispatch()

    const { all, error, isLoading } = useSelector((state: AppState) => ({
        all: state.products.all,
        error: state.products.error,
        isLoading: state.products.isLoading,
    }))

    const fetchProducts = () => dispatch(productsFetch())
    const resetProducts = () => dispatch(productsReset())

    const hasProducts = all && all.products && all.products.length

    return (
        <PageTemplate>
            <Row>
                <Col md={12}>
                    <h1>Product page</h1>
                    <Button bsStyle="primary" onClick={() => fetchProducts()} disabled={isLoading}>
                        Fetch Products
                    </Button>

                    {hasProducts && (
                        <ResetButton
                            bsStyle="warning"
                            onClick={() => resetProducts()}
                            disabled={isLoading}>
                            Remove Products
                        </ResetButton>
                    )}
                    <Hr />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    {hasProducts ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>SKU</th>
                                    <th>Price</th>
                                    <th>Workflow</th>
                                </tr>
                            </thead>
                            <tbody>
                                {all.products.map(({ id, sku, price, workflowActive }: Product) => (
                                    <tr key={`product-${id}`}>
                                        <td>{id}</td>
                                        <td>{sku}</td>
                                        <td>{price}</td>
                                        <td>{workflowActive ? 'yes' : 'no'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <b>Click button to fetch products!</b>
                    )}
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    {error && error.error_description && <pre>{error.error_description}</pre>}
                </Col>
            </Row>
        </PageTemplate>
    )
}
