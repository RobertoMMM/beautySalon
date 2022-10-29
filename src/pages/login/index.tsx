import { useForm, SubmitHandler } from "react-hook-form";
import CustomButton from "components/modules/button";
import FormInputs from "components/modules/forms/FormInputs";
import formModel from "static/loginFormInputs.json";
import { Login } from "ts/interfaces";
import { onLogin } from "features/auth/authSlice";
import { useAppDispatch } from "app/store";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = ({ email, password }) => {
    const userName = email.slice(0, 2);

    dispatch(onLogin({ email, password, userName }));

    navigate("/");
  };
  return (
    <div>
      <div>Shopping form</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {formModel.map((element) => (
          <FormInputs
            key={element.name}
            element={element}
            register={register}
            errors={errors}
          />
        ))}
        <CustomButton type="submit">Let's Start</CustomButton>
      </form>
    </div>
  );
};

export default LoginPage;
