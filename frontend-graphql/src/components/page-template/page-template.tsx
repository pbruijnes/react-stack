import React, { ReactNode } from 'react'
import { Grid } from 'react-bootstrap'

import { Navigation } from '@frontend-graphql/components'

interface Props {
    showHeader?: boolean
    showFooter?: boolean
    children: ReactNode
}

export const PageTemplate: React.FunctionComponent<Props> = ({
    showHeader = true,
    showFooter = true,
    children,
}) => {
    return (
        <>
            {showHeader && (
                <Grid>
                    <Navigation />
                </Grid>
            )}
            <Grid>{children}</Grid>

            {showFooter && (
                <Grid>
                    <hr />
                    <h3>Footer</h3>
                </Grid>
            )}
        </>
    )
}
