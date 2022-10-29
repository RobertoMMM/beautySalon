import arrowImage from "assets/dropdown.png";
import { useNavigate } from "react-router-dom";
import CustomButton from "components/modules/button";
import { ClientInformation } from "ts/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInputs from "components/modules/forms/FormInputs";
import formModel from "static/register/clientInformation.json";
import { useAppDispatch } from "app/store";
import { setClientInfo } from "features/client/clientSlice";

const ClientInfoPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ClientInformation>();

  const onSubmit: SubmitHandler<ClientInformation> = (clientInfo) => {
    dispatch(setClientInfo(clientInfo));
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
