import { useQuery } from '@apollo/client'
import { TeacherItem } from 'Types/teacher'
import { GET_TEACHERS } from 'Api/queries'

export const useTeachers = () => {
    const { loading, error, data } = useQuery(GET_TEACHERS)
    const teachers = data?.getTeachers ?? []
    return {
        loading,
        error,
        teachers: teachers as TeacherItem[],
    }
}
