import { TextField } from "@mui/material";

const InputText = ({ element, register, errors }: any) => {
  const { label, name, placeholder } = element;

  return (
    <div>
      {errors[name] ? (
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          helperText={errors[name]?.message}
        />
      ) : (
        <TextField
          name={name}
          placeholder={placeholder}
          id="demo-helper-text-aligned"
          label={label}
          {...register(name, { ...element.register })}
        />
      )}
    </div>
  );
};

export default InputText;
