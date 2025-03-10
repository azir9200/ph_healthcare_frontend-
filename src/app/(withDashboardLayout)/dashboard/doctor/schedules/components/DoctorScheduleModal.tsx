import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import PHModal from "@/components/shared/PHModal/PHModal";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);
  const query: Record<string, any> = {};
  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }
  const { data } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;

  console.log("doc scheule", data);
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      sell here some components
      <MultipleSelectFieldChip
        schedules={schedules}
        selectedScheduleIds={selectedScheduleIds}
        setSelectedScheduleIds={setSelectedScheduleIds}
      />
    </PHModal>
  );
};

export default DoctorScheduleModal;
