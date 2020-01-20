import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Home, Login, NotFound, Products } from '@frontend/containers'
import { AppState } from '@frontend/state/'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => (auth === true ? <Component {...props} /> : <Redirect to="/login" />)}
    />
)

export const Routes = () => {
    const { isAuthenticated } = useSelector((state: AppState) => ({
        isAuthenticated: state.authentication.isAuthenticated,
    }))

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" auth={isAuthenticated} exact component={Home} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/products" auth={isAuthenticated} exact component={Products} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
