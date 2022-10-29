import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const TimeInput = ({ element, register, errors }: any) => {
  const { name, label } = element;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          {...register(name, { ...element.register })}
          onChange={() => {}}
          label={label}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      {errors[element.name] && <p>{errors[element.name]?.message}</p>}
    </>
  );
};

export default TimeInput;
