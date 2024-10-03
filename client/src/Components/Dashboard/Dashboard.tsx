import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { TeachersSection } from './TeachersSection'
import { PupilsSection } from './PupilsSection'
import { SubjectsSection } from './SubjectsSection'

export const Dashboard: FC = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            divider={<Divider orientation="vertical" flexItem />}
        >
            <TeachersSection />
            <PupilsSection />
            <SubjectsSection />
        </Stack>
    )
}
