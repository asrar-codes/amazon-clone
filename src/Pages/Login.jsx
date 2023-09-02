import { GoTriangleRight } from "react-icons/go";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useGlobalContext } from "../context/context";
import { auth } from "../firebase/firebase";
import { googleProvider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
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
    <form ref={formRef} className="form w-1/4 mx-auto border-red-300">
      <div className="form-header text-center">
        <img
          src="https://blog.logomyway.com/wp-content/uploads/2017/02/2017-amazon-logo.jpg"
          alt="amazon.com"
          className="w-36 mx-auto"
        />
      </div>
      <section className="form-container flex flex-col gap-1 border-2 border-gray-300 p-6 rounded">
        <p className="text-3xl font-semibold ">Sign in</p>
        <label htmlFor="email" className="flex flex-col">
          Email or mobile phone number
          <input
            type="email"
            name="email"
            id="email"
            className="p-1 my-3 border-2  shadow-orange-500 outline-orange-400"
            ref={emailRef}
            required
          />
        </label>
        <label htmlFor="password" className="flex flex-col" aria-required>
          Password
          <input
            type="password"
            name="password"
            id="password"
            className="p-1 my-3 border-2  shadow-orange-500 outline-orange-400"
            ref={passwordRef}
          />
        </label>

        <button
          onClick={singIn}
          className=" w-full bg-yellow-300"
          type="submit"
        >
          Continue
        </button>
        <button
          onClick={() => signInWithGoogle()}
          className=" w-full bg-blue-300"
          type="button"
        >
          Continue with Google
        </button>
        <p className="text-sm">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <p className="need-help flex items-center my-5">
          <span>
            <GoTriangleRight className="cursor-pointer" />
          </span>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Need help?
          </a>
        </p>
      </section>
      <div className="new-to-amazon my-6 text-center">
        <div className="flex justify-center gap-2 items-center">
          <span className="border-t border-gray-300 w-20 "></span>
          <h6 className="inline">New to Amazon</h6>
          <span className="border-t border-gray-300 w-20 "></span>
        </div>
        <button className="bg-gray-400 p-2 rounded-sm my-2">
          Create your Amazon account
        </button>
        <hr className="my-6" />
      </div>
      <footer className="login-footer">
        <div className="flex gap-4 text-sm">
          <a href="#" className="text-blue-500">
            Conditions of Use
          </a>
          <a href="#" className="text-blue-500">
            Privacy Notice
          </a>
          <a href="#" className="text-blue-500">
            Help
          </a>
        </div>
        <p className="text-sm text-gray-600">
          &copy; 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its
          affiliates
        </p>
      </footer>
      <button onClick={logout} className="btn">
        logout
      </button>
    </form>
  );
};

export default Login;
