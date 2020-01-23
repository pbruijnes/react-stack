import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { PageTemplate } from '@frontend-graphql/components/page-template'

export const Home = () => {
    return (
        <PageTemplate>
            <Row>
                <Col md={12}>
                    <h4>GraphQL Example</h4>
                </Col>
                <Col md={12}>
                    <img src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F552580%2Fstarlink-1-launch-is-spacex.jpg&w=700&op=resize" />
                </Col>
            </Row>
        </PageTemplate>
    )
}
