import CustomOrderButton from "../../../components/modules/buttons/order";
import arrowImage from "../../../assets/dropdown.png";
import { useNavigate } from "react-router-dom";
import useRegisterService from "../../../hooks/useService";
import { SubmitHandler, useForm } from "react-hook-form";
import { Service } from "../../../ts/interfaces";
import FormInputs from "../../../components/modules/forms/FormInputs";
import formModel from "../../../static/register/service";

const SelectServicePage = () => {
  const navigate = useNavigate();
  const { setService } = useRegisterService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Service>();

  const onSubmit: SubmitHandler<Service> = (data) => {
    setService(data);
    navigate("/order/2");
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
          />
        ))}
        <CustomOrderButton type="submit">
          Next step
          <img
            style={{ transform: "rotate(-90deg)" }}
            src={arrowImage}
            alt="image"
          />
        </CustomOrderButton>
      </form>
    </>
  );
};

export default SelectServicePage;
