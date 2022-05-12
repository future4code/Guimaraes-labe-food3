import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React, {useState} from "react";

const Search = (props) => {

  const [category, setFilter, setRestaurants] = props.filter
    
  const [input, setInput] = useState("")

  const onChangeInput = (ev)=>{
    setInput(ev.target.value)
  }

  const onClickSearch = () =>{
    const updatedList = category.filter((cat) =>{
      return cat.category.toLowerCase().includes(input.toLowerCase())
    });
 /*    updatedList.normalize("NFD").replace(/[\u300-\u036f]/g, " ")
    console.log("lista atualizada", updatedList) */
    setRestaurants(updatedList)
    };

    return(
        <TextField className="search"
            label={'Search'}
            variant={'outlined'}
            InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton onClick={()=> onClickSearch()}>
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                )
            }}
            value={input}
            onChange={onChangeInput}
        />
    )
}

export default Search;