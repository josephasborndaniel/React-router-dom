
function Navbar()
{
    return(
        <>
          <div className="p-3 border-b border-neutral-100">
        <div className=" mx-auto flex items-center justify-between flex-wrap ">
          <a href="/" className="text-2xl font-black">
            React SPA.
          </a>

          <div className="flex gap-3">
            <a href="/about">About us</a>
            <a href="/contact">contact us</a>
          </div>
        </div>
       </div>
        </>
    )
}

export default Navbar;