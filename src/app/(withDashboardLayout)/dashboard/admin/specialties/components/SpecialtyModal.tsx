import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {};
  return (
    <PHModal open={open} setOpen={setOpen} title="Create a new Specialty">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialtyModal;
