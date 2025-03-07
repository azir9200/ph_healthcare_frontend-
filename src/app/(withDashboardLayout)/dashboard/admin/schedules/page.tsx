"use client";
import { useEffect, useState } from "react";
import ScheduleModal from "./components/ScheduleModal";
import { Box, Button } from "@mui/material";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
    </Box>
  );
};

export default SchedulesPage;
