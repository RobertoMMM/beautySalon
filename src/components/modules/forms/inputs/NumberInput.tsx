import { TextField } from "@mui/material";

const NumberInput = ({ element, register }: any) => {
  const { label, name, placeholder } = element;

  return (
    <>
      <TextField
        type="number"
        name={name}
        placeholder={placeholder}
        id="demo-helper-text-aligned"
        label={label}
        {...register(name, { ...element.register })}
      />
    </>
  );
};

export default NumberInput;
