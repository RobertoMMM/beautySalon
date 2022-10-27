import arrowImage from "assets/dropdown.png";
import { useNavigate } from "react-router-dom";
import CustomButton from "components/modules/button";
import { ClientInformation } from "ts/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInputs from "components/modules/forms/FormInputs";
import formModel from "static/register/clientInformation.json";
import useRegisterClient from "hooks/useClientInformation";

const ClientInfoPage = () => {
  const navigate = useNavigate();
  const { setClient } = useRegisterClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ClientInformation>();

  const onSubmit: SubmitHandler<ClientInformation> = (data) => {
    setClient(data);
    navigate("/order/3");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formModel.map((element) => (
          <FormInputs
            key={element.name}
            element={element}
            register={register}
            errors={errors}
            control={control}
          />
        ))}
        <CustomButton onClick={() => navigate("/order/1")}>
          <img
            style={{ transform: "rotate(90deg)" }}
            src={arrowImage}
            alt="image"
          />
          Back
        </CustomButton>
        <CustomButton type="submit">
          Next step
          <img
            style={{ transform: "rotate(-90deg)" }}
            src={arrowImage}
            alt="image"
          />
        </CustomButton>
      </form>
    </>
  );
};

export default ClientInfoPage;
