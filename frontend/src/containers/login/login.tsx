import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { LoginForm } from '@frontend/components/login-form'
import { PageTemplate } from '@frontend/components/page-template'
import { AppState } from '@frontend/state/'
import { authenticateBasic } from '@frontend/state/authentication/actions'
import { Credentials } from '@frontend/state/authentication/types'

export const Login: React.FunctionComponent = () => {
    const dispatch = useDispatch()

    const doAuthenticate = (credentials: Credentials) => {
        dispatch(authenticateBasic(credentials))
    }

    const { isAuthenticated } = useSelector((state: AppState) => ({
        isAuthenticated: state.authentication.isAuthenticated,
    }))

    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <PageTemplate showFooter={false}>
            <LoginForm authenticateBasic={doAuthenticate} />
        </PageTemplate>
    )
}
