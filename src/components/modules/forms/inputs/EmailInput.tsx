import { TextField } from "@mui/material";

const EmailInput = ({ element, register }: any) => {
  const { label, name, placeholder } = element;

  return (
    <div>
      <TextField
        type="email"
        name={name}
        placeholder={placeholder}
        id="demo-helper-text-aligned"
        label={label}
        sx={{ width: 600 }}
        {...register(name, { ...element.register })}
      />
    </div>
  );
};

export default EmailInput;
