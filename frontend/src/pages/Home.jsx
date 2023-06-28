import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="">
        <ul className="flex items-center gap-4 ml-auto mr-auto">
          <li className="max-w-[9rem]">
            <img
              src="../src/assets/images/image1.png"
              alt="image1"
              className=""
            />
            <p className="text-xs">
              solidaire aux{" "}
              <span className="text-yellow text-xs">smartphones</span>
            </p>
          </li>
          <li className="max-w-[9rem]">
            <img
              src="../src/assets/images/image2.png"
              alt="image2"
              className=""
            />
            <p className="text-xs">
              Accède à la{" "}
              <span className="text-green text-xs">base de données</span>
            </p>
          </li>
          <li className="max-w-[9rem]">
            <img
              src="../src/assets/images/image3.png"
              alt="image3"
              className=""
            />
            <p className="text-xs">
              Apprend à te servir de
              <span className="text-pink text-xs"> l’application</span>
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
