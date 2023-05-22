import { Autocomplete, debounce, Input, MenuItem, Select, TextField } from "@mui/material";
import React, { useState, useEffect, useCallback, useRef } from "react";
import "./AutocompleteSelectBox.css";

function AutocompleteSelectBox(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
  const inputRef = useRef(null);

  const debouncedFetch = useCallback(
    debounce((searchTerm) => {
      if (searchTerm !== "") {
        fetch(`https://localhost:7004/job/name/${searchTerm}`)
          .then((response) => response.json())
          .then((data) => setOptions(data))
          .catch((error) => console.log(error));
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedFetch(searchTerm)
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectionChange = (event, value) => {
    if (props.onSelectionChange) {
      props.onSelectionChange(value);
    }
  }

  return (
    <Autocomplete
      freeSolo
      options={options}
      onChange={(event, value) => handleSelectionChange(event, value)}
      onClose={() => setOptions([])}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Métier"
          placeholder="Recherchez un métier..."
          InputProps={{
            ...params.InputProps,
            type: 'search',
            inputProps: {
              ...params.inputProps,
              style: { textAlign: 'center' }
            }
          }}
          onChange={handleChange}
          autoFocus
        />
      )}
    />
  );
}

export default AutocompleteSelectBox;