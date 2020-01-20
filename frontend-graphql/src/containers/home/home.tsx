import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { PageTemplate } from '@frontend-graphql/components/page-template'

export const Home = () => {
    return (
        <PageTemplate>
            <Row>
                <Col md={12}>
                    <h4>Welcome to GraphQL Example</h4>
                </Col>
                <Col md={12}>
                    <img src="https://media.giphy.com/media/ZmdErsWqppgMo/giphy.gif" />
                </Col>
            </Row>
        </PageTemplate>
    )
}
