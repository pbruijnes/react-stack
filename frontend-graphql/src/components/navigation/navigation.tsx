import React from 'react'
import { Nav, Navbar, NavItem, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled(Row)`
    margin-top: 20px;
`

export const Navigation = () => {
    return (
        <Wrapper>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">React GraphQL Example</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to={'/space-x'}>
                        <NavItem>{'Space X'}</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </Wrapper>
    )
}
