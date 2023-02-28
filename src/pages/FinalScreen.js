import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScoreChange, handleNumberChange } from "../redux/actions";

const FinalScreen = () => {
  const { score } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleNumberChange(10));
    navigate("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSettings}>Back to Settings</Button>
    </Box>
  );
};

export default FinalScreen;
