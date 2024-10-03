import { FC } from 'react'
import { Login } from 'Components/Auth/Login'
import { HeaderLayout } from 'Components/Layouts/HeaderLayout'

export const LoginPage: FC = () => {
    return (
        <HeaderLayout>
            <Login />
        </HeaderLayout>
    )
}
