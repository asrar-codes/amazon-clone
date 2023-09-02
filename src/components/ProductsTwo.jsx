import { Link } from "react-router-dom";

const ProductsTwo = () => {
  return (
    <div className="container w-full  py-2 border -my-16   border-green-500  z-30  bg-white  flex flex-col gap-8">
      <section className="sign-in text-center">
        <p className=" text-2xl px-4 font-bold text-left">
          Sign in for best <span className="block">experience</span>
        </p>
        <Link to="signin">
          <button className="btn 2 mx-auto my-5 btn-outline-primary transition duration-300 ease-in-out focus:outline-none w-11/12 focus:shadow-outline border border-black bg-yellow-400 text-white-700 hover:text-white font-normal py-2 px-4 rounded">
            sign in securely
          </button>
        </Link>
      </section>
      <section className="about border-2 border-black">
        <img
          src="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY218_.jpg"
          alt="Atomic Habits"
          className="object-contain"
        />
        <div className="product-information">
          Atomic Habits: the life-changing million-copy #1 bestseller
        </div>
      </section>
    </div>
  );
};

export default ProductsTwo;
