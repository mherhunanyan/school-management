import { useQuery } from '@apollo/client'
import { SubjectItem } from 'Types/subject'
import { GET_SUBJECTS } from 'Api/queries'

export const useSubjects = () => {
    const { loading, error, data } = useQuery(GET_SUBJECTS)
    const subjects = data?.getSubjects ?? []

    return {
        loading,
        error,
        subjects: subjects as SubjectItem[],
    }
}
