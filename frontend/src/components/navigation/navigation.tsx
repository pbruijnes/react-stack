import React from 'react'
import { Nav, Navbar, NavItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { AppState } from '@frontend/state/'
import { authenticateLogout } from '@frontend/state/authentication/actions'

const Wrapper = styled(Row)`
    margin-top: 20px;
`

export const Navigation = () => {
    const { isAuthenticated } = useSelector((state: AppState) => ({
        isAuthenticated: state.authentication.isAuthenticated,
    }))

    const dispatch = useDispatch()
    const logout = () => dispatch(authenticateLogout())

    return (
        <Wrapper>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">React Stack Example</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    {isAuthenticated && (
                        <LinkContainer to={'/products'}>
                            <NavItem eventKey={1}>{'Products'}</NavItem>
                        </LinkContainer>
                    )}
                </Nav>
                <Nav pullRight>
                    {isAuthenticated ? (
                        <NavItem onClick={logout} href="#">
                            {'Logout'}
                        </NavItem>
                    ) : (
                        <LinkContainer to={'/login'}>
                            <NavItem>{'Login'}</NavItem>
                        </LinkContainer>
                    )}
                </Nav>
            </Navbar>
        </Wrapper>
    )
}
