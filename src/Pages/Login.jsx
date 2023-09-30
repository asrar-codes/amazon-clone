import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useGlobalContext } from "../context/context";
import { auth } from "../firebase/firebase";
import { googleProvider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import LoginBtn from "../components/LoginBtn";
const Login = () => {
  const { logout, formRef, emailRef, passwordRef } = useGlobalContext();
  const navigate = useNavigate();
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
        emailRef.current.value = "";
        passwordRef.current.value = "";
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
        console.log("ehe");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      ref={formRef}
      className="form w-11/12 max-w-xl mx-auto mt-20 shadow-md shadow-gray-300"
    >
      <div className="form-header text-center"></div>
      <section className="form-container flex flex-col gap-4 border-2 border-gray-300 p-6 rounded-lg ">
        <p className="text-3xl font-semibold text-center">Log in</p>
        <label htmlFor="email" className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            id="email"
            className="p-1  border-2   outline-slate-400"
            ref={emailRef}
            autoComplete="current-email"
            required
          />
        </label>
        <label htmlFor="password" className="flex flex-col" aria-required>
          Password
          <input
            type="password"
            name="password"
            id="password"
            className="p-1 border-2 outline-slate-400"
            ref={passwordRef}
            autoComplete="current-password"
          />
        </label>

        <LoginBtn
          text=" Sign In"
          clickFunction={singIn}
          background="bg-violet-500"
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
    </form>
  );
};

export default Login;
