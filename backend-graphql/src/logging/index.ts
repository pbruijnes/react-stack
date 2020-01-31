import { IDebug } from 'debug'

const backend = require('debug')('backend')
const graphql = require('debug')('backend:graphql')
const sap = require('debug')('backend:sap')
const frontend = require('debug')('frontend')

const multiLog = (logger: IDebug, ...args: any[]) => {
    args.forEach(message => {
        if (typeof message === 'string') {
            logger(message)
        } else {
            // tslint:disable-next-line:no-unused-expression
            process.env.NODE_ENV !== 'test' && console.info(message)
        }
    })
}

interface Debug {
    backend: (...args: any[]) => void
    graphql: (...args: any[]) => void
    sap: (...args: any[]) => void
    frontend: (...args: any[]) => void
}

export const debug: Debug = {
    backend: (...args) => multiLog(backend, ...args),
    graphql: (...args) => multiLog(graphql, ...args),
    sap: (...args) => multiLog(sap, ...args),
    frontend: (...args) => multiLog(frontend, ...args),
}