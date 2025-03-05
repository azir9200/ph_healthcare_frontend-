"use client";
import { Box, Stack, Button, TextField } from "@mui/material";
import SpecialtyModal from "./components/SpecialtyModal";
import { useState } from "react";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      <h2>Here is all specialties page</h2>
    </Box>
  );
};

export default SpecialtiesPage;
