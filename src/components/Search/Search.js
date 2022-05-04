import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";

const Search = () => {
    return(
        <TextField className="search"
            label={'Search'}
            variant={'outlined'}
            InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                )
            }}
        />
    )
}

export default Search;