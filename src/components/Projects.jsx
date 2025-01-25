const Projects = () => {
  const data = [
    {
      name: "Weather APP",
      image:
        "https://images.unsplash.com/photo-1705077031869-51b60754302a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlciUyMEFQUHxlbnwwfHwwfHx8MA%3D%3D",
      skills: "Html,CSS,JS,API,POSTMAN,Routing",
      description:
        "It provides real-time weather of your location and the one you search on the app with 5 day forecast and 24h forecast feature including air pollution and wind direction like details.",
    },
    {
      name: "Freight Broker",
      image:
        "https://plus.unsplash.com/premium_photo-1661883424371-0475867e85fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fEZyZWlnaHQlMjBCcm9rZXIlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
      skills: "Html,CSS,JS,GSAP,LENIS,Formspree",
      description:
        "A portfolio of a business man who provide freight services to the transportation industries, with trust and realiability.",
    },
    {
      name: "Obys Clone",
      image:
        "https://images.unsplash.com/photo-1645301300961-e2bc264b51fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc2luZ2VyfGVufDB8fDB8fHww",
      skills: "Html,CSS,JS,GSAP,Locomotive",
      description:
        "For the proven skills that i own, i made a clone of obys website who are a famous designer and developers make beautiful website with unique animation",
    },
  ];
  return (
    <div className="w-full h-screen p-10 flex  justify-center items-center gap-10">
      {data.map((item,index) => {
       return <div key={index} className="w-60 h-fit bg-zinc-200 rounded-lg p-2">
        <div className="w-full h-1/2 rounded-md overflow-hidden">
        <img src={item.image} className="w-full h-full object-cover" alt="image" /></div>
        <div className="w-full h-fit flex flex-col">
          <h1 className="text-xl mt-2 font-semibold">{item.name}</h1>
          <h2 className="opacity-70 text-sm font-semibold">{item.skills}</h2>
          <p className="opacity-50 text-sm font-semibold mt-2">{item.description}</p>
        </div>
      </div>
      })}
    </div>
  );
};

export default Projects;
