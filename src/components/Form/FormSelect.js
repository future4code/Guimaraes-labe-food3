import React from 'react'
import {
    FormControl,
    MenuItem,
    Select,
  } from '@material-ui/core/'

const FormSelect = (props) => {

  return (

  <>
   <FormControl fullWidth>
           <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={props.item}
             onChange={props.onChangeItem}
           >
             <MenuItem value={0} disabled>
               0
             </MenuItem>
             <MenuItem value={1}>1</MenuItem>
             <MenuItem value={2}>2</MenuItem>
             <MenuItem value={3}>3</MenuItem>
             <MenuItem value={4}>4</MenuItem>
             <MenuItem value={5}>5</MenuItem>
             <MenuItem value={6}>6</MenuItem>
             <MenuItem value={7}>7</MenuItem>
             <MenuItem value={8}>8</MenuItem>
             <MenuItem value={9}>9</MenuItem>
             <MenuItem value={10}>10</MenuItem>
           </Select>
         </FormControl>
  </>
  )
}

export default FormSelect