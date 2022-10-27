import Textarea from "@mui/joy/Textarea";

const TextareaInput = ({ element, register }: any) => {
  const { name, placeholder } = element;

  return (
    <div>
      <Textarea
        name={name}
        minRows={2}
        placeholder={placeholder}
        {...register(name, { ...element.register })}
      />
    </div>
  );
};

export default TextareaInput;
