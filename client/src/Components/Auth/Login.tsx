import { useState, FC } from 'react'
import { useMutation } from '@apollo/client'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { LOGIN_MUTATION } from 'Api/mutations'

export const Login: FC = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { loading }] = useMutation(LOGIN_MUTATION)

    const handleLogin = async (e: any) => {
        e.preventDefault()
        try {
            const response = await login({ variables: { email, password } })
            const {
                data: {
                    login: { token, user },
                },
            } = response
            localStorage.setItem('token', token)
            navigate('/')
        } catch (err) {
            console.error('Login failed:', err)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        startIcon={
                            loading ? <CircularProgress size={24} /> : null
                        }
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
