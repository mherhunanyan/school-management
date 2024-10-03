import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { usePupils } from 'Hooks/usePupils'
import { useNavigate } from 'react-router-dom'

export const PupilsSection: FC = () => {
    const { pupils } = usePupils()
    const navigate = useNavigate()

    return (
        <Stack
            spacing={1}
            alignItems="center"
            direction="column"
            sx={{ width: '100%' }}
        >
            <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 'bold', color: 'primary.main' }}
            >
                Pupils
            </Typography>
            {pupils.map((item) => {
                return (
                    <Card
                        sx={{ width: '100%', cursor: 'pointer' }}
                        key={item.id}
                        onClick={() => navigate(`/pupil/${item.id}`)}
                    >
                        <Typography>{item.name}</Typography>
                    </Card>
                )
            })}
        </Stack>
    )
}
