import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_TEACHER_MUTATION } from 'Api/mutations'
import { GET_TEACHERS } from 'Api/queries'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export const AddTeacher = () => {
    const [open, setOpen] = useState(false)
    const [teacherName, setTeacherName] = useState('')
    const [createTeacher] = useMutation(CREATE_TEACHER_MUTATION, {
        refetchQueries: [{ query: GET_TEACHERS }],
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = async () => {
        try {
            await createTeacher({
                variables: {
                    name: teacherName,
                },
            })
            setTeacherName('')
            handleClose()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
            >
                Add Teacher
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Teacher</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="text"
                        fullWidth
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        color="primary"
                        disabled={!teacherName}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
