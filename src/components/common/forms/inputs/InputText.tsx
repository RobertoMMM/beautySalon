import styled from "@emotion/styled";
import { FormHelperText } from "@mui/joy";
import { TextField } from "@mui/material";

const StyledTextField = styled(TextField)(() => ({
  ".MuiOutlinedInput-root": {
    width: "100%",
    height: "100%",
    background: "#FAFAFA",
    borderRadius: "20px",
    outline: "none",
  },
  ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "label.Mui-focused": {
    color: "rgba(0, 0, 0, 0.96)",
  },
  p: {
    color: "red",
  },
}));

const InputText = ({ element, register, errors }: any) => {
  const { label, name, placeholder } = element;

  const params = {
    type: "text",
    name,
    placeholder,
    label,
    helperText: errors[name]?.message ?? "",
    ...register(name, { ...element.register }),
  };

  return (
    <>
      <StyledTextField {...params} />
    </>
  );
};

export default InputText;
