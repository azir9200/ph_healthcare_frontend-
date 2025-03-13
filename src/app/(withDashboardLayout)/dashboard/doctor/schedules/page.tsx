"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { ISchedule } from "@/types/schedule";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const DoctorSchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allSchedules, setAllSchedules] = useState<any[]>([]);

  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});
  const schedules = data?.doctorSchedules;
  console.log(schedules);

  useEffect(() => {
    if (schedules?.length) {
      const formattedSchedules = schedules?.map(
        (schedule: ISchedule, index: number) => ({
          sl: index + 1,
          id: schedule?.doctorId || `temp-${index}`, // Ensure unique ID
          startDate: dateFormatter(schedule?.schedule?.startDate),
          startTime: dayjs(schedule?.schedule?.startDate).format("hh:mm A"),
          endTime: dayjs(schedule?.schedule?.endDate).format("hh:mm A"),
        })
      );
      setAllSchedules(formattedSchedules);
    }
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL", width: 80 },
    { field: "startDate", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <IconButton aria-label="delete">
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      ),
    },
  ];

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Doctor Schedules
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
        sx={{ mb: 2 }}
      >
        Create Doctor Schedule
      </Button>

      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      <Box sx={{ height: "calc(100vh - 200px)", width: "100%" }}>
        {isLoading ? (
          <Typography variant="h6" textAlign="center">
            Loading...
          </Typography>
        ) : (
          <DataGrid
            rows={allSchedules}
            columns={columns}
            disableRowSelectionOnClick
          />
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulesPage;
