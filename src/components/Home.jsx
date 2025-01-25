const home = () => {
  return (
    <div className="flex justify-center items-center w-full h-[90vh]">
      <div className="w-1/2 h-full flex justify-center items-center">
        <h2 className="text-8xl pl-64 ">Hi! I am Developer</h2>
      </div>
      <div className="w-1/2 h-full flex justify-start items-center">
        <img className="w-[70%] h-[70%] object-cover pl-12"
          src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
          alt="image"
        />
      </div>
    </div>
  );
};

export default home;
