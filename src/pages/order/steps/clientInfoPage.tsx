import arrowImage from "assets/dropdown.png";
import { useNavigate } from "react-router-dom";
import CustomButton from "components/modules/button";
import { ClientInformation } from "ts/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInputs from "components/modules/forms/FormInputs";
import { clientForm } from "static/register/clientInformation";
import { useAppDispatch, useAppSelector } from "app/store";
import { setClientInfo } from "features/client/clientSlice";
import { getUserEmail, getUserName } from "features/auth/authSlice";

const ClientInfoPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const email = useAppSelector(getUserEmail);
  const name = useAppSelector(getUserName);

  const { register, handleSubmit, control } = useForm<ClientInformation>({
    defaultValues: {
      email,
      name,
    },
  });

  const onSubmit: SubmitHandler<ClientInformation> = (clientInfo) => {
    dispatch(setClientInfo(clientInfo));

    navigate("/order/3");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {clientForm.map((element) => (
          <FormInputs
            key={element.name}
            element={element}
            register={register}
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
