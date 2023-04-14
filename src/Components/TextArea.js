import React from 'react'
import { TextField } from "@mui/material";


export default function TextArea(props) {
  return (
    <div>
      <TextField
        fullWidth
        label="Enter Your Location"
        value={props.search}
        onChange={(e) => props.setsearch(e.target.value)}
      />
    </div>
  );
}
