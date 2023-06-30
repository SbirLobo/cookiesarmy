import { Link } from "react-router-dom";

function Page404() {
  return (
    <div>
      <div className="flex justify-between mt-5">
        <img
          src="../src/assets/logo.png"
          alt="logo emaus"
          className="h-[4rem] ml-4"
        />
        <Link to="/" className="flex items-center">
          <img
            src="../src/assets/images/maison.png"
            alt="logo home"
            className="w-4 h-4 mr-4"
          />
        </Link>
      </div>
      <div className="right-0 bottom-0 top-0 mt-24 px-8 bg-[white] flex justify-center">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h2 className="text-primary text-3xl">DÉSOLÉ !</h2>
          <h3 className="text-primary whitespace-nowrap text-base md:text-xl">
            LA PAGE QUE VOUS RECHERCHEZ N’EXISTE PAS.
          </h3>
          <img
            src="../src/assets/images/404.jpg"
            className=" w-[25rem] object-cover object-center"
            alt="404"
          />
        </div>
      </div>
    </div>
  );
}

export default Page404;
