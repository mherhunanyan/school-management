import { useQuery } from '@apollo/client'
import { User, Role } from 'Types/user'
import { GET_PUPIL } from 'Api/queries'

export const usePupil = () => {
    const { loading, error, data } = useQuery(GET_PUPIL)
    return {
        loading: false,
        error: false,
        pupil: {},
    }
}
