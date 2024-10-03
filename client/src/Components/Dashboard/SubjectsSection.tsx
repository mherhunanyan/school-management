import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { useSubjects } from 'Hooks/useSubjects'
import { useNavigate } from 'react-router-dom'

export const SubjectsSection: FC = () => {
    const { subjects } = useSubjects()
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
                Subjects
            </Typography>
            {subjects.map((item) => {
                return (
                    <Card
                        sx={{ width: '100%', cursor: 'pointer' }}
                        key={item.id}
                        onClick={() => navigate(`/subject/${item.id}`)}
                    >
                        <Typography>{item.name}</Typography>
                    </Card>
                )
            })}
        </Stack>
    )
}
