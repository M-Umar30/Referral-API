import {useState, React} from 'react'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import { Button } from '@mui/material';
import Swal from 'sweetalert2'


function EditReferralButtons({onEditClick}) {
    const [isEditable, setisEditable] = useState(false);
    const handleEditClick = () => {
        setisEditable(!isEditable);
        onEditClick();
    }

    const handleDeleteClick = () =>{
        Swal.fire({
            title: 'Are you sure you want to delete?',
            showConfirmButton: false,
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: 'Delete',
            
          }).then((result) => {
            // TODO: delete referral functionality
            Swal.fire('Referral Succesfully Deleted');
          })
    }
    return (
        <div className='button-group'>
            <div className='button-group'>
            <Button variant={isEditable ? "contained" : "outlined"} color={isEditable ? "success" : "warning"} sx={{width: '20px'}} onClick={handleEditClick}>
                {isEditable ? <DoneOutlineOutlinedIcon fontSize='large'></DoneOutlineOutlinedIcon>: <ModeEditOutlineOutlinedIcon fontSize='large'></ModeEditOutlineOutlinedIcon>}
            </Button>
            <Button variant={"outlined"} color="error" sx={{width: '20px'}} onClick={handleDeleteClick}>
                <DeleteOutlineOutlinedIcon fontSize='large'></DeleteOutlineOutlinedIcon>
            </Button>
        </div>
        </div>
    )
}

export default EditReferralButtons
