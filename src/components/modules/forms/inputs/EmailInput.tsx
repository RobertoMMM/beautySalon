import { TextField } from "@mui/material";

const EmailInput = ({ element, register, errors }: any) => {
  const { label, name, placeholder } = element;

  const params = {
    type: "email",
    name,
    placeholder,
    id: "demo-helper-text-aligned",
    label,
    ...register(name, { ...element.register }),
  };

  return (
    <div>
      {errors[name] ? (
        <TextField {...params} error sx={{ width: 600 }} />
      ) : (
        <TextField {...params} sx={{ width: 600 }} />
      )}
    </div>
  );
};

export default EmailInput;
