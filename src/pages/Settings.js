import { Box, Button, Typography } from "@mui/material";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";

const Settings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Typography variant="h2" fontWeight="bold">
        Quiz App
      </Typography>
      <Typography variant="h6">Settings</Typography>
      <form onSubmit={handleSubmit}>
        <SelectField label="Category" />
        <SelectField label="Dificulty" />
        <SelectField label="Type" />
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get started
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Settings;
