import { useQuery } from '@apollo/client'
import { PupilItem } from 'Types/pupil'
import { GET_PUPILS } from 'Api/queries'

export const usePupils = () => {
    const { loading, error, data } = useQuery(GET_PUPILS)
    const pupils = data?.getPupils ?? []

    return {
        loading,
        error,
        pupils: pupils as PupilItem[],
    }
}
