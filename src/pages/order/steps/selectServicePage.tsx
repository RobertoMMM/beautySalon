import arrowImage from "../../../assets/dropdown.png";
import { useNavigate } from "react-router-dom";
import useRegisterService from "../../../hooks/useService";
import { SubmitHandler, useForm } from "react-hook-form";
import { Service } from "../../../ts/interfaces";
import FormInputs from "../../../components/modules/forms/FormInputs";
import formModel from "../../../static/register/service";
import CustomButton from "../../../components/modules/button";

const SelectServicePage = () => {
  const navigate = useNavigate();
  const { setService } = useRegisterService();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Service>();

  const onSubmit: SubmitHandler<Service> = (data) => {
    console.log(data);

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
            control={control}
          />
        ))}
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

export default SelectServicePage;
