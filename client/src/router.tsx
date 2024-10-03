import { createBrowserRouter } from 'react-router-dom'

import { DashboardPage } from 'Pages/DashboardPage'
import { LoginPage } from 'Pages/LoginPage'
import { TeacherPage } from 'Pages/TeacherPage'
import { PupilPage } from 'Pages/PupilPage'
import { SubjectPage } from 'Pages/SubjectPage'

import { AdminGuard } from 'Guards/AdminGuard'
import { NoAuthGuard } from 'Guards/NoAuthGuard'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminGuard render={() => <DashboardPage />} />,
    },
    {
        path: '/login',
        element: <NoAuthGuard render={() => <LoginPage />} />,
    },
    {
        path: '/teacher/:id',
        element: <AdminGuard render={() => <TeacherPage />} />,
    },
    {
        path: '/pupil/:id',
        element: <AdminGuard render={() => <PupilPage />} />,
    },
    {
        path: '/subject/:id',
        element: <AdminGuard render={() => <SubjectPage />} />,
    },
])
