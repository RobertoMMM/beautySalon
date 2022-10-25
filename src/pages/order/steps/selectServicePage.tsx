import CustomOrderButton from "../../../components/buttons/order";
import arrowImage from "../../../assets/dropdown.png";
import { useNavigate } from "react-router-dom";
import useRegisterService from "../../../hooks/useService";
import { SubmitHandler, useForm } from "react-hook-form";
import { Service } from "../../../ts/interfaces";
import formModel from "../../../static/register/service.json";
import FormInputs from "../../../components/forms/FormInputs";

const SelectServicePage = () => {
  const navigate = useNavigate();
  const { setService } = useRegisterService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Service>();

  const onSubmit: SubmitHandler<any> = (data) => {
    navigate("/order/2");
    // console.log(data);
    // reset();
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
