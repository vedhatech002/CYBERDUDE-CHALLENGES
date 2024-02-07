import "../App.css";

function Body() {
  return (
    <section className="flex flex-col items-center justify-center mt-32 gap-8">
      <div className="flex  ">
        <img
          className="logo w-[220px] !h-[160px]"
          src="/tailwind.png"
          alt="tailwind logo"
        />

        <img
          src="/react.png"
          className="w-[190px] !h-[170px] logo "
          alt="React logo"
        />
      </div>
      <h1 className="text-slate-300 text-xl font-semibold">Tailwind + React</h1>

      <p className="text-slate-400">UI component for react an tailwind css</p>
    </section>
  );
}

export default Body;
