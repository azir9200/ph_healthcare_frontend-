"use client";
import { Box, Button, IconButton } from "@mui/material";
import ScheduleModal from "./components/ScheduleModal";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  useDeleteScheduleMutation,
  useGetAllSchedulesQuery,
} from "@/redux/api/scheduleApi";
import dayjs from "dayjs";
import { ISchedule } from "@/types/schedule";
import { dateFormatter } from "@/utils/dateFormatter";
import { toast } from "sonner";

// Define the shape of the schedule data for state
interface ScheduleData {
  sl: number;
  id: string | undefined;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<ScheduleData[]>([]);
  const { data, isLoading } = useGetAllSchedulesQuery({});
  const [deleteSchedule] = useDeleteScheduleMutation();
  const schedules = data?.schedules?.data;

  const meta = data?.meta;
  useEffect(() => {
    const updateData = schedules?.map((schedule: ISchedule, index: number) => {
      return {
        sl: index + 1,
        id: schedule?.id,
        startDate: dateFormatter(schedule.startDate),
        endDate: dateFormatter(schedule.endDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    if (updateData) {
      setAllSchedule(updateData);
    }
  }, [schedules]);

  //delete function
  const handleDelete = async (id: string) => {
    console.log("shdl", id);
    try {
      const res = await deleteSchedule(id).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success(
          "Schedule you are want to delete that is deleted successfully!!!"
        );
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />

      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allSchedule ?? []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default SchedulesPage;
