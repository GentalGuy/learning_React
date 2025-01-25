import { useForm } from "react-hook-form";
const Contact = ({ handleFormSubmitData }) => {
  const { register, handleSubmit } = useForm();

  const formData = (data) => {
    handleFormSubmitData(data);
    
  };

  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl font-semibold">Contact Me</h1>
        <form
          onSubmit={handleSubmit(formData)}
          action=""
          id="formid"
          className="flex flex-col justify-center items-center gap-10"
        >
          <input
            {...register("firstName")}
            className="bg-zinc-200 rounded-md px-2 py-1"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <input
            {...register("lastName")}
            className="bg-zinc-200 rounded-md px-2 py-1"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <input
            {...register("email")}
            className="bg-zinc-200 rounded-md px-2 py-1"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            {...register("message")}
            className="bg-zinc-200 rounded-md px-2 py-1"
            name="message"
            placeholder="Your Message here..."
            rows="5"
            cols="50"
            id="formid"
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className="bg-zinc-600 text-white px-3 py-1 rounded-md "
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
