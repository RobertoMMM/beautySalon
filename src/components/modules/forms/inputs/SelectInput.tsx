import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const SelectInput = ({ element, register, errors, control }: any) => {
  const { label, name, options } = element;

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Autocomplete
            name={name}
            {...register(name, { ...element.register })}
            id="combo-box-demo"
            options={options}
            onChange={(_, data: any) => {
              return onChange(data?.value);
            }}
            sx={{ width: 600 }}
            isOptionEqualToValue={(option: any, value: any) =>
              option.id === value.id
            }
            renderInput={(params) => <TextField {...params} label={label} />}
          />
        )}
      />
      {errors[element.name] && <p>{errors[element.name]?.message}</p>}
    </>
  );
};

export default SelectInput;
