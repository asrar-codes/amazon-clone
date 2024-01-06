import { Form, Link, redirect } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useGlobalContext } from "../context/context";
import { auth } from "../firebase/firebase";
import { googleProvider } from "../firebase/firebase";
import { useNavigate, useNavigation } from "react-router-dom";
import LoginBtn from "../components/LoginBtn";
import { LoginInput } from "../components";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  // console.log(formData);
  const data = Object.fromEntries(formData);
  // console.log(data);
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    // console.log(response);
    // user = response.user;
    // console.log(response.user);
    toast.success("logged in successfully");
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error.code);
    return redirect("/login");
  }
};

const Login = () => {
  const { logout, formRef, emailRef, isDarkMode, passwordRef } =
    useGlobalContext();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";
  const singIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const { email, password } = Object.fromEntries(formData);
    console.log(auth?.currentUser?.email);
    try {
      if (email && password) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log(auth.currentUser);
        navigate("/");
        // emailRef.current.value = "";
        // passwordRef.current.value = "";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const signInWithGoogle = async () => {
    try {
      navigate("/");
      (await signInWithRedirect(auth, googleProvider)) &&
        // console.log(auth.currentUser);
        toast.success("logged in succesfully");
      console.log("ehe");
    } catch (error) {
      console.log(error);
      toast.error(error.code);
    }
  };

  return (
    <Form
      method="POST"
      ref={formRef}
      className="form w-11/12 max-w-xl mx-auto mt-20 shadow-md shadow-gray-300"
    >
      <div className="form-header text-center"></div>
      <section className="form-container flex flex-col gap-4 border-2 border-gray-300 p-6 rounded-lg ">
        <p className="text-3xl font-semibold text-center">Log in</p>
        <LoginInput label={"email"} inputRefref={emailRef} />
        <LoginInput label={"password"} inputRefref={passwordRef} />

        <LoginBtn
          text=" Sign In"
          background="bg-violet-500"
          disabled={isLoading}
        />
        <LoginBtn
          text="continue with google"
          clickFunction={signInWithGoogle}
          background="bg-purple-500"
        />
        <div className="already-user">
          <p>Not a memeber yet?</p>
          <Link className="capitalize text-purple-700" to="/signup">
            create account
          </Link>
        </div>
      </section>

      {/* <button onClick={logout} className="btn">
        logout
      </button> */}
    </Form>
  );
};

export default Login;
