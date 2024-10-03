import { useQuery } from '@apollo/client'
import { User, Role } from 'Types/user'
import { GET_SUBJECT } from 'Api/queries'

export const useSubject = () => {
    const { loading, error, data } = useQuery(GET_SUBJECT)
    return {
        loading: false,
        error: false,
        subject: {},
    }
}
