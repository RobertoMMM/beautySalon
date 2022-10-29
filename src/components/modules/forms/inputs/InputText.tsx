import { TextField } from "@mui/material";

const InputText = ({ element, register }: any) => {
  const { label, name, placeholder } = element;

  return (
    <>
      <TextField
        name={name}
        placeholder={placeholder}
        id="demo-helper-text-aligned"
        label={label}
        sx={{ width: 600 }}
        {...register(name, { ...element.register })}
      />
    </>
  );
};

export default InputText;
