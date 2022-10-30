import { useForm, SubmitHandler } from "react-hook-form";
import CustomButton from "components/modules/button";
import FormInputs from "components/modules/forms/FormInputs";
import { loginForm } from "static/loginFormInputs";
import { Login } from "ts/interfaces";
import { onLogin } from "features/auth/authSlice";
import { useAppDispatch } from "app/store";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = async ({
    email,
    password,
    username,
  }) => {
    await dispatch(onLogin({ email, password, username }));

    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginForm.map((element) => (
          <FormInputs
            key={element.name}
            element={element}
            register={register}
          />
        ))}
        <CustomButton type="submit">Let's Start</CustomButton>
      </form>
    </>
  );
};

export default LoginPage;
