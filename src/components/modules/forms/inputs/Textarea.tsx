import Textarea from "@mui/joy/Textarea";

const TextareaInput = ({ element, register }: any) => {
  const { name, placeholder } = element;

  const textareaStyles = {
    width: "579px",
    height: "138px",
  };

  return (
    <div>
      <Textarea
        name={name}
        minRows={2}
        placeholder={placeholder}
        sx={textareaStyles}
        {...register(name, { ...element.register })}
      />
    </div>
  );
};

export default TextareaInput;
