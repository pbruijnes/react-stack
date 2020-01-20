import React from 'react'

import { PageTemplate } from '@frontend-graphql/components'
import { LaunchListQuery } from '@frontend-graphql/generated/graphql'

interface Props {
    data: LaunchListQuery
}

const className = 'LaunchList'

export const SpaceXPage: React.FC<Props> = ({ data }) => (
    // @todo rewrite to styled component / bootstrap
    <PageTemplate>
        <div className={className}>
            <h3>Launches</h3>
            <hr />
            <ol className={`${className}__list`}>
                {!!data.launches &&
                    data.launches.map(
                        (launch, i) =>
                            !!launch && (
                                <li key={i} className={`${className}__item`}>
                                    {launch.mission_name} ({launch.launch_year})
                                </li>
                            ),
                    )}
            </ol>
        </div>
    </PageTemplate>
)
