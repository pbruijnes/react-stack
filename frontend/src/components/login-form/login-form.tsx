import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import { Field, Form } from 'react-final-form'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { AppState } from '@frontend/state'
import { Credentials, GrantType } from '@frontend/state/authentication/types'
import { substractDomain } from '@frontend/utils'

const FormWrapper = styled.div`
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
`

const Input = styled(Field)`
    margin-bottom: 10px;
`

const ErrorMessage = styled.p`
    color: red;
    font-size: 15px;
`

interface Props {
    authenticateBasic: (credentials: Credentials) => void
}

interface FormValues {
    username?: string
    password?: string
}
export const LoginForm: React.FunctionComponent<Props> = ({ authenticateBasic }: Props) => {
    const { error } = useSelector((state: AppState) => ({
        error: state.authentication.error,
    }))

    const onSubmit = ({ username, password }) => {
        const { domain, subdomain } = substractDomain(window.location.hostname)
        const credentials = {
            username,
            password,
            domain,
            subdomain,
            grantType: GrantType.Password,
        }
        authenticateBasic(credentials)
    }

    const validate = (values: FormValues) => {
        const errors: FormValues = {}
        if (!values.username) {
            errors.username = 'Username is required'
        }
        if (!values.password) {
            errors.password = 'Password is required'
        }
        return errors
    }

    return (
        <Grid>
            <Row>
                <Col md={4} mdOffset={4}>
                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit, submitting, pristine, values }) => (
                            <FormWrapper>
                                {error && (
                                    <ErrorMessage>{error && error.error_description}</ErrorMessage>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <h2 className="form-signin-heading">Login</h2>
                                    <label className="sr-only">Email address</label>
                                    <Field name="username">
                                        {({ input, meta }) => (
                                            <div>
                                                <label>Username</label>
                                                <input
                                                    {...input}
                                                    type="text"
                                                    placeholder="Username"
                                                    className="form-control"
                                                />
                                                {meta.error && meta.touched && (
                                                    <ErrorMessage>{meta.error}</ErrorMessage>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                    <br />
                                    <label className="sr-only">Wachtwoord</label>
                                    <Field name="password">
                                        {({ input, meta }) => (
                                            <div>
                                                <label>Password</label>
                                                <input
                                                    {...input}
                                                    type="password"
                                                    placeholder="Password"
                                                    className="form-control"
                                                />
                                                {meta.error && meta.touched && (
                                                    <ErrorMessage>{meta.error}</ErrorMessage>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                    <br />
                                    <button
                                        className="btn btn-lg btn-primary btn-block"
                                        type="submit"
                                        disabled={pristine || submitting}>
                                        Sign in
                                    </button>
                                </form>
                            </FormWrapper>
                        )}
                    />
                </Col>
            </Row>
        </Grid>
    )
}
