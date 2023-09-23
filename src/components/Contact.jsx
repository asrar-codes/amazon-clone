import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xbjvleka");
  // console.log(handleSubmit);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <section className="w-11/12 mx-auto p-4 ">
        <p className="text-xl font-bold tracking-wide">
          Join our newsletter and get 20% OFF
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          inventore blanditiis neque minus earum nisi quis natus quas voluptatem
          nulla dolor aut facilis, alias
        </p>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="display flex flex-wrap gap-4">
            <input
              id="email"
              type="email"
              name="email"
              className=" p-1 text-lg  border border-slate-600 rounded-md"
              placeholder="Enter your email"
              autoComplete="current-email"
              required
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="p-1 text-lg bg-slate-600 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
