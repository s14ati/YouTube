import { useOutletContext } from "react-router-dom";
import Feed from "../Components/Feed";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";

function Home() {
  const { sidebar } = useOutletContext();
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div
        className={`${
          sidebar ? "pl-[17%]" : "pl-[100px]"
        } bg-[#f9f9f9] pr-[2%] pt-[20px] pb-[20px] max-[900px]:pl-[5%] 
          max-[900px]:pr-[5%]`}
      >
        <Feed category={category} />
      </div>
    </>
  );
}

export default Home;
