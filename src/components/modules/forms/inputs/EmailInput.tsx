import styled from "@emotion/styled";
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
}));

const EmailInput = ({ element, register }: any) => {
  const { label, name, placeholder } = element;

  const params = {
    type: "email",
    name,
    placeholder,
    id: "demo-helper-text-aligned",
    label,
    ...register(name, { ...element.register }),
  };

  return <StyledTextField {...params} />;
};

export default EmailInput;
