import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FormItem = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form>
        <TextField
          sx={{ margin: "5px" }}
          label="Name"
          size="small"
          type="text"
          placeholder="Please Enter Name"
        />
        <TextField
          sx={{ margin: "5px" }}
          label="Age"
          size="small"
          type="number"
          placeholder="Please Enter Age"
        />
        <TextField
          sx={{ margin: "5px" }}
          label="Company"
          size="small"
          type="text"
          placeholder="Enter Your Company"
        />
        <Button sx={{ margin: "5px" }} variant="contained">
          Add
        </Button>
      </form>
    </Box>
  );
};

export default FormItem;
