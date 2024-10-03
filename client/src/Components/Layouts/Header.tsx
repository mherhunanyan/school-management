import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useUser } from 'Hooks/useUser'

export const Header: FC = () => {
    const { user } = useUser()

    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">School Management</Typography>
                </Box>
                {user && user.email && (
                    <Typography variant="h6">{user.email}</Typography>
                )}
            </Toolbar>
        </AppBar>
    )
}
