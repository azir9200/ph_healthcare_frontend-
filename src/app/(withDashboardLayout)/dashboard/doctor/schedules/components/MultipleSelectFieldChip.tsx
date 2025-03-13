import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Box, Chip, InputLabel, MenuItem, OutlinedInput } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function getTimeIn12HourFormat(dateTimeString: string): string {
  const date: Date = new Date(dateTimeString);
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const ampm: string = hours >= 12 ? "PM" : "AM";
  const formattedHours: number = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes: string =
    minutes < 10 ? "0" + minutes : minutes.toString();
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

interface Schedule {
  id: string;
  startDate: string;
  endDate: string;
}

interface MultipleSelectFieldChipProps {
  schedules: Schedule[];
  selectedScheduleIds: string[];
  setSelectedScheduleIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const getStyles = (
  name: string,
  personName: readonly string[],
  theme: Theme
) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const MultipleSelectFieldChip: React.FC<MultipleSelectFieldChipProps> = ({
  schedules,
  selectedScheduleIds,
  setSelectedScheduleIds,
}: MultipleSelectFieldChipProps) => {
  const theme = useTheme();

  const handleChange = (
    event: SelectChangeEvent<typeof selectedScheduleIds>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedScheduleIds(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedScheduleIds}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected?.map((value: string) => {
                const selectedSchedule = schedules.find(
                  (schedule) => schedule.id === value
                );

                if (!selectedSchedule) return null;

                const formattedTimeSlot = `${getTimeIn12HourFormat(
                  selectedSchedule.startDate
                )} - ${getTimeIn12HourFormat(selectedSchedule.endDate)}`;

                return <Chip key={value} label={formattedTimeSlot} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {/* map here */}
          {schedules?.map((schedule) => (
            <MenuItem
              key={schedule.id}
              value={schedule.id}
              style={getStyles(schedule.id, selectedScheduleIds, theme)}
            >
              {`${getTimeIn12HourFormat(
                schedule.startDate
              )} - ${getTimeIn12HourFormat(schedule.endDate)}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectFieldChip;
