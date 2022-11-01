import { styled } from "@mui/joy";
import Textarea from "@mui/joy/Textarea";

const StyledTextarea = styled(Textarea)(() => ({
  width: "100%",
  height: "138px",
  background: "#FAFAFA",
  borderRadius: "20px",
  border: "none",
}));

const TextareaInput = ({ element, register }: any) => {
  const { name, placeholder } = element;

  return (
    <StyledTextarea
      name={name}
      minRows={2}
      placeholder={placeholder}
      id={Math.random()}
      {...register(name, { ...element.register })}
    />
  );
};

export default TextareaInput;
