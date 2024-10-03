import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { AddTeacher } from 'Components/Teacher/AddTeacher'
import { useTeachers } from 'Hooks/useTeachers'
import { useNavigate } from 'react-router-dom'

export const TeachersSection: FC = () => {
    const { teachers } = useTeachers()
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
                Teachers
            </Typography>
            <AddTeacher />
            {teachers.map((item) => {
                return (
                    <Card
                        sx={{ width: '100%', cursor: 'pointer' }}
                        key={item.id}
                        onClick={() => navigate(`/teacher/${item.id}`)}
                    >
                        <Typography>{item.name}</Typography>
                    </Card>
                )
            })}
        </Stack>
    )
}
