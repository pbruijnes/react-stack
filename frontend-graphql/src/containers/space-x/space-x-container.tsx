import React from 'react'

import { useLaunchListQuery } from '@frontend-graphql/generated/graphql'
import { SpaceXPage } from './space-x-page'

export const SpaceXContainer = () => {
    const { data, error, loading } = useLaunchListQuery()

    if (loading) {
        return <div>Loading...</div>
    }

    if (error || !data) {
        return <div>ERROR</div>
    }

    return <SpaceXPage data={data} />
}
