import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                email
                role
            }
        }
    }
`

export const CREATE_TEACHER_MUTATION = gql`
    mutation CreateTeacher($name: String!) {
        createTeacher(name: $name) {
            id
            name
        }
    }
`
