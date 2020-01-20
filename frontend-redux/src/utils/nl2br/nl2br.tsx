import React from 'react'

export const nl2br = (string: string) => {
    return string.split('\n').map((part, index) => {
        return (
            <React.Fragment key={part + '-' + index}>
                <span dangerouslySetInnerHTML={{ __html: part }} />
                <br />
            </React.Fragment>
        )
    })
}
