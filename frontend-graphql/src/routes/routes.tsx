import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, NotFound, SpaceXContainer } from '@frontend-graphql/containers'

// const PrivateRoute = ({ component: Component, auth, ...rest }) => (
//     <Route
//         {...rest}
//         render={props => (auth === true ? <Component {...props} /> : <Redirect to="/login" />)}
//     />
// )

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/space-x" exact component={SpaceXContainer} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
