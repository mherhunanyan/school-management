import { FC, ReactElement, useEffect } from 'react'
import { useUser } from 'Hooks/useUser'
import { Role } from 'Types/user'
import { useNavigate } from 'react-router-dom'

interface AdminGuardProps {
    render: () => ReactElement
}

export const AdminGuard: FC<AdminGuardProps> = (props) => {
    const { render } = props
    const {user, loading} = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user && !loading) {
            navigate('/login')
        }
    }, [user, loading])

    if (user && user.role === Role.admin) {
        return render()
    }

    return null
}
