import React from "react";
import { Box, FormControl, TextField } from "@mui/material";

const TextFieldComp = () => {
  const handleChange = () => {};

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth>
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Number of questions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
