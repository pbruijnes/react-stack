import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { PageTemplate } from '@frontend/components/page-template'
import { AppState } from '@frontend/state/'

export const Home = () => {
    const { current } = useSelector((state: AppState) => ({
        current: state.users.current,
    }))
    return (
        <PageTemplate>
            <Row>
                <Col md={12}>
                    <h4>
                        Welcome {current && current.username}! {process.env.NODE_ENV}
                    </h4>
                </Col>
                <Col md={12}>
                    <img src="https://media.giphy.com/media/ZmdErsWqppgMo/giphy.gif" />
                </Col>
            </Row>
        </PageTemplate>
    )
}
