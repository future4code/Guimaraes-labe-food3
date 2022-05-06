import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { Edit } from './Style';

export const EditIco = ({ onClick }) => {
    return(<Edit onClick={onClick}>
        <EditIcon />
    </Edit>
        )
}
