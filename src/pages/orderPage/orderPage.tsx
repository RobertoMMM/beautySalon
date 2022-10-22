import { useForm } from "react-hook-form";
import FormInputs from "../../components/forms/FormInputs";
import formModel from "../../static/orderFormInputs.json";

const OrderPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    alert("YOUR ORDER IS SUCCESSFUL");
    reset();
  };
  return (
    <div>
      <div>OrderPage</div>

      <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
        {formModel.map((element) => (
          <FormInputs
            key={element.name}
            element={element}
            register={register}
            errors={errors}
          />
        ))}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default OrderPage;
