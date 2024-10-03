import { FC } from 'react'
import { HeaderLayout } from 'Components/Layouts/HeaderLayout'
import { Dashboard } from 'Components/Dashboard/Dashboard'

export const DashboardPage: FC = (props) => {
    return (
        <HeaderLayout>
            <Dashboard />
        </HeaderLayout>
    )
}
