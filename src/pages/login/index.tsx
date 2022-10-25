import { useForm, SubmitHandler } from "react-hook-form";
import FormInputs from "../../components/modules/forms/FormInputs";
import useAuth from "../../hooks/useAuth";
import formModel from "../../static/loginFormInputs.json";
import { Login } from "../../ts/interfaces";
import "./style.css";

const LoginPage = () => {
  const { onLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = ({ email, password }) => {
    onLogin({ email, password });
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
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
