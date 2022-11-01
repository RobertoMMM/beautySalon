import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import FormInputs from "components/common/forms/FormInputs";
import { loginForm } from "static/login/loginFormInputs";
import { Login } from "ts/interface";
import { onLogin } from "store/slices/auth";
import { useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import CustomButton from "components/common/button";
import { Snackbar } from "@mui/material";
import { createNewAccount, login } from "store/slices/auth/helpers";
import { forwardRef } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const LoginPage = () => {
	const [isOpenedSnackbar, setIsOpenedSnackbar] = useState(false);
	const [isPending, setIsPending] = useState(false);
	const [isUserLogin, setIsUserLogin] = useState(true);
	const [authState, setAuthState] = useState<{
		message: string;
		state: boolean;
	}>({ message: "", state: false });

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Login>();

	const awaitToNavigateHome = () => {
		setTimeout(() => {
			navigate("/");
		}, 2000);
	};

	const signIn = async ({ email, password, username }: Login) => {
		setIsPending(true);

		try {
			const { token } = await login({ email, password, username });

			setAuthState({
				message: "Login succesfull.",
				state: true,
			});

			dispatch(onLogin({ email, password, username, token }));

			awaitToNavigateHome();
		} catch (e: any) {
			setAuthState({
				message: "LOGIN FAILED.",
				state: false,
			});
		}

		setIsPending(false);
		setIsOpenedSnackbar(true);
	};

	const signUp = async ({ email, password, username }: Login) => {
		setIsPending(true);

		try {
			const { token } = await createNewAccount({ email, password, username });

			setAuthState({
				message: "User succesfull created.",
				state: true,
			});

			dispatch(onLogin({ email, password, username, token }));

			awaitToNavigateHome();
		} catch (e: any) {
			setAuthState({
				message: "LOGOUT FAILED.",
				state: false,
			});
		}

		setIsPending(false);
		setIsOpenedSnackbar(true);
	};

	const onSubmit: SubmitHandler<Login> = async ({
		email,
		password,
		username,
	}) => {
		if (isUserLogin) {
			await signIn({ email, password, username });
		} else {
			await signUp({ email, password, username });
		}
	};

	const setToLogout = () => {
		setIsUserLogin(false);
	};

	const setToLogin = () => {
		setIsUserLogin(true);
	};

	const handleSnackbar = () => {
		setIsOpenedSnackbar(!isOpenedSnackbar);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginForm.map((element) => (
					<FormInputs
						key={element.name}
						element={element}
						register={register}
						errors={errors}
					/>
				))}
				<CustomButton type='submit'>{isUserLogin ? "LOGIN" : "LOGOUT"}</CustomButton>
				{isUserLogin ? (
					<p onClick={setToLogout}>Don't have an account? Register now</p>
				) : (
					<p onClick={setToLogin}>Go back to LOGIN</p>
				)}
			</form>
			<Snackbar
				open={isOpenedSnackbar}
				autoHideDuration={1000}
				onClose={handleSnackbar}>
				<Alert
					onClose={handleSnackbar}
					severity={authState?.state ? "success" : "error"}
					sx={{ width: "100%" }}>
					{authState?.message}
				</Alert>
			</Snackbar>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
				open={isPending}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</>
	);
};

export default LoginPage;
