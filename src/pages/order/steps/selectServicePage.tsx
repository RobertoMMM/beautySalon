import arrowImage from "../../../assets/dropdown.png";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Service } from "../../../ts/interface";
import FormInputs from "../../../components/common/forms/FormInputs";
import formModel from "../../../static/register/service";
import { useAppDispatch } from "store";
import { setServicesInfo } from "store/slices/services";
import CustomButton from "components/common/button";

const SelectServicePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const LocalStorageServices = JSON.parse(
    localStorage.getItem("services") || "{}"
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Service>({
    defaultValues: LocalStorageServices,
  });

  const onSubmit: SubmitHandler<Service> = (servicesInfo) => {
    if (!servicesInfo) return;

    localStorage.setItem("services", JSON.stringify(servicesInfo));

    dispatch(setServicesInfo(servicesInfo));

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
            control={control}
            errors={errors}
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
