import { TextField } from "@mui/material";

const InputText = ({ element, register, errors }: any) => {
  const { label, name, placeholder } = element;

  const params = {
    type: "text",
    name,
    placeholder,
    id: "demo-helper-text-aligned",
    label,
    ...register(name, { ...element.register }),
  };

  return (
    <>
      {errors[name] ? (
        <TextField error sx={{ width: 600 }} {...params} />
      ) : (
        <TextField {...params} sx={{ width: 600 }} />
      )}
    </>
  );
};

export default InputText;
