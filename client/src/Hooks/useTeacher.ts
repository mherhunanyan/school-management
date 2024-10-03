import { useQuery } from '@apollo/client'
import { User, Role } from 'Types/user'
import { GET_TEACHER } from 'Api/queries'

export const useTeacher = () => {
    const { loading, error, data } = useQuery(GET_TEACHER)
    return {
        loading: false,
        error: false,
        teacher: {},
    }
}
