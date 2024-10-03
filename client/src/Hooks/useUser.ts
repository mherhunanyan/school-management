import { useQuery } from '@apollo/client'
import { User } from 'Types/user'
import { GET_ME } from 'Api/queries'

export const useUser = () => {
    const { loading, error, data } = useQuery(GET_ME)
    const user = data?.me
    return {
        loading,
        error,
        user: user as User | null,
    }
}
