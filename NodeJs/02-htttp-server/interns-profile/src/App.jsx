import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [internsData, setInternsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const getData = await fetch("http://localhost:6969/interns");

    const jsonData = await getData.json();
    console.log(jsonData);

    setInternsData(jsonData);
  };

  return (
    <>
      <Header />
      <main className="pt-10 px-6 flex flex-wrap bg-slate-200 gap-6 items-center justify-center">
        {internsData.map((data) => (
          <ProfileCard internsData={data} />
        ))}
      </main>
    </>
  );
}

export default App;
