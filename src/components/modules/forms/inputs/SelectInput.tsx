import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const SelectInput = ({ element, register, control, errors }: any) => {
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
            renderInput={(params) => (
              <>
                {errors[name] ? (
                  <TextField error {...params} label={label} />
                ) : (
                  <TextField {...params} label={label} />
                )}
              </>
            )}
          />
        )}
      />
    </>
  );
};

export default SelectInput;
