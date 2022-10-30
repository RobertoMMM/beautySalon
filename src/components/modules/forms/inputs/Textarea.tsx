import Textarea from "@mui/joy/Textarea";

const TextareaInput = ({ element, register }: any) => {
  const { name, placeholder } = element;

  const textareaStyles = {
    width: "100%",
    height: "138px",
  };

  return (
    <Textarea
      name={name}
      minRows={2}
      placeholder={placeholder}
      sx={textareaStyles}
      {...register(name, { ...element.register })}
    />
  );
};

export default TextareaInput;
