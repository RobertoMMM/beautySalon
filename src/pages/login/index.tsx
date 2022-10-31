import { useForm, SubmitHandler } from "react-hook-form";
import FormInputs from "components/common/forms/FormInputs";
import { loginForm } from "static/login/loginFormInputs";
import { Login } from "ts/interface";
import { onLogin } from "store/slices/auth";
import { useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import CustomButton from "components/common/button";

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
