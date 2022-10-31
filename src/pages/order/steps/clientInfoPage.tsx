import arrowImage from "assets/dropdown.png";
import { useNavigate } from "react-router-dom";
import { ClientInformation } from "ts/interface";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInputs from "components/common/forms/FormInputs";
import { clientForm } from "static/register/clientInformation";
import { useAppDispatch, useAppSelector } from "store";
import { setClientInfo } from "store/slices/client";
import { getUserEmail, getUserName } from "store/slices/auth";
import { Box } from "@mui/system";
import CustomButton from "components/common/button";

const ClientInfoPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const email = useAppSelector(getUserEmail);
  const name = useAppSelector(getUserName);

  const LocalStorageClientData = JSON.parse(
    localStorage.getItem("client") || "{}"
  );

  const { register, handleSubmit, control } = useForm<ClientInformation>({
    defaultValues: {
      email: LocalStorageClientData?.email || email,
      name: LocalStorageClientData?.name || name,
      phone: LocalStorageClientData?.phone,
    },
  });

  const onSubmit: SubmitHandler<ClientInformation> = (clientInfo) => {
    if (!clientInfo) return;

    localStorage.setItem("client", JSON.stringify(clientInfo));

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
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
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
        </Box>
      </form>
    </>
  );
};

export default ClientInfoPage;
