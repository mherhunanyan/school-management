import { gql } from '@apollo/client'

export const GET_ME = gql`
    query GetMe {
        me {
            id
            email
            role
        }
    }
`

export const GET_TEACHERS = gql`
    query GetTeachers {
        getTeachers {
            id
            name
        }
    }
`

export const GET_TEACHER = gql`
    query GetTeacher($id: ID!) {
        getTeacher(id: $id) {
            id
            name
        }
    }
`

export const GET_PUPILS = gql`
    query getPupils {
        getPupils {
            id
            name
        }
    }
`

export const GET_PUPIL = gql`
    query GetPupil($id: ID!) {
      getPupil(id: $id) {
          id
          name
      }
  }
`

export const GET_SUBJECTS = gql`
    query GetSubjects {
        getSubjects {
            id
            name
        }
    }
`

export const GET_SUBJECT = gql`
    query GetSubject($id: ID!) {
      getSubject(id: $id) {
          id
          name
      }
  }
`
