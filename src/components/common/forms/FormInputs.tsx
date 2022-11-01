import EmailInput from "./inputs/EmailInput";
import InputText from "./inputs/InputText";
import NumberInput from "./inputs/NumberInput";
import PasswordInput from "./inputs/PasswordInput";
import SelectInput from "./inputs/SelectInput";
import TextareaInput from "./inputs/Textarea";

const FormInputs = ({ element, register, control, errors }: any) => {
  let InputElement;
  switch (element.type) {
    case "text":
      InputElement = InputText;
      break;
    case "password":
      InputElement = PasswordInput;
      break;
    case "email":
      InputElement = EmailInput;
      break;
    case "select":
      InputElement = SelectInput;
      break;
    case "number":
      InputElement = NumberInput;
      break;
    case "textarea":
      InputElement = TextareaInput;
      break;
    default:
      InputElement = InputText;
  }

  return (
    <InputElement
      element={element}
      register={register}
      errors={errors}
      control={control}
    />
  );
};

export default FormInputs;
