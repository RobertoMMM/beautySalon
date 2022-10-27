import DateInput from "./inputs/DateInput";
import EmailInput from "./inputs/EmailInput";
import InputText from "./inputs/InputText";
import NumberInput from "./inputs/NumberInput";
import PasswordInput from "./inputs/PasswordInput";
import SelectInput from "./inputs/SelectInput";
import TextareaInput from "./inputs/Textarea";
import TimeInput from "./inputs/TimeInput";

const FormInputs = ({ element, register, errors, control }: any) => {
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
    case "date":
      InputElement = DateInput;
      break;
    case "time":
      InputElement = TimeInput;
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
