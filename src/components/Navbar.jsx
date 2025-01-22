import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="p-3 border-b border-neutral-100">
        <div className=" mx-auto flex items-center justify-between flex-wrap ">
          <Link to={"/"} className="text-2xl font-black">
            {" "}
            React SPA.
          </Link>

          <div className="flex gap-3">
            <Link to={"/about"}>About us</Link>
            <Link to={"/contact"}>contact us</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
