import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="overflow-hidden">
        <ul className="flex justify-around items-center">
          <li className="max-w-[10rem]">
            <img src="../src/assets/images/image1.png" alt="image1" />
          </li>
          <li className="max-w-[10rem]">
            <img src="../src/assets/images/image2.png" alt="image2" />
          </li>
          <li className="max-w-[10rem] pt-[1.2rem] ">
            <img src="../src/assets/images/image3.png" alt="image3" />
          </li>
        </ul>
      </div>
    </Layout>
  );
}
