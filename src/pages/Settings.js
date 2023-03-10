import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("question");
  };

  return (
    <div>
      <Typography variant="h2" fontWeight="bold">
        Quiz App
      </Typography>
      <Typography variant="h6">Settings</Typography>
      <form onSubmit={handleSubmit}>
        <SelectField label="Category" options={response.trivia_categories} />
        <SelectField label="Difficulty" options={difficultyOptions} />
        <SelectField label="Type" options={typeOptions} />
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
