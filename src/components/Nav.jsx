import { Link } from "react-router-dom";

const Nav = () => {
  const navClass = [
    "w-fit relative after:absolute after:w-full after:h-0.5 after:left-1/2 after:bottom-0 after:-translate-x-[50%] after:-translate-y-[50%] after:scale-x-0 hover:after:scale-x-100 after:transition-all  after:bg-red-500",
  ];
  return (
    <div className="w-full h-[10vh] flex justify-between px-14 py-5 bg-zinc-100">
      <Link to="/"><h1 className="text-xl font-semibold">Gurkirat Singh</h1></Link>
      <div className="flex justify-center items-center gap-10 text-lg relative ">
        <Link className={navClass} to="/About">
          About
        </Link>
        <Link className={navClass} to="/Projects">
          Projects
        </Link>
        <Link className={navClass} to="/Contact">
          Contact
        </Link>
        <Link className={navClass} to="/Resume">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Nav;
