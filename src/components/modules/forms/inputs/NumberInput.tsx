import { TextField } from "@mui/material";

const NumberInput = ({ element, register, errors }: any) => {
  const { label, name, placeholder } = element;

  const params = {
    type: "number",
    name,
    placeholder,
    id: "demo-helper-text-aligned",
    label,
    ...register(name, { ...element.register }),
  };

  return (
    <>
      {errors[name] ? (
        <TextField error {...params} sx={{ width: 600 }} />
      ) : (
        <TextField {...params} sx={{ width: 600 }} />
      )}
    </>
  );
};

export default NumberInput;
