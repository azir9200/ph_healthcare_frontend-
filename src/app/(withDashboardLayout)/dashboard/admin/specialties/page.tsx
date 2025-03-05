"use client";
import { Box, Stack, Button, TextField } from "@mui/material";
import SpecialtyModal from "./components/SpecialtyModal";
import { useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {data, loading} = useGetAllSpecialtiesQuery({})
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      <Box>
        <h1>Display Specialist</h1>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
