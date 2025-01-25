import { useNavigate } from "react-router-dom";

const ContactDetails = ({ users }) => {
  const navigate = useNavigate();
  const backToContact = () => {
    navigate(-1);
  };
  return (
    <div className="flex justify-center items-center">
      {users.map((item, index) => {
        return (
          <div
            key={index}
            className="details w-64 bg-zinc-200 rounded-md min-h-64 flex flex-col pt-10 justify-center items-center"
          >
            <div className="font-semibold text-xl">Your Contact Info</div>
            <div className="card w-full min-h-64 p-4 flex flex-col justify-center items-center">
              <h1 className="text-xl font-semibold">
                {item.firstName +" "+item.lastName}
              </h1>
              <h2 className="text-sm mt-2 opacity-70 font-semibold">
                {item.email}
              </h2>
              <p className="text-xs mt-6 leading-none font-semibold opacity-70">
                {item.message}
              </p>
            </div>
          </div>
        );
      })}
      <button
        onClick={backToContact}
        className="px-3 py-1 bg-red-500 text-white rounded-md m-2"
      >
        Back
      </button>
    </div>
  );
};

export default ContactDetails;
