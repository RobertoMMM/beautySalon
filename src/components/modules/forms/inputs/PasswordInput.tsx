import { TextField } from "@mui/material";

const PasswordInput = ({ element, register, errors }: any) => {
  const { label, name, placeholder } = element;

  const params = {
    type: "password",
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

export default PasswordInput;
