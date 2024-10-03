import { FC, ReactNode } from 'react'
import { Header } from './Header'

interface HeaderLayoutProps {
    children: ReactNode
}

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
    const { children } = props
    return (
        <>
            <Header />
            {children}
        </>
    )
}
