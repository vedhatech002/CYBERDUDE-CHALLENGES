import Button from "../components/Button";

const ButtonPage = () => {
  const btnVaraints = [
    {
      btn: "primary",
      btnName: "primary",
    },
    {
      btn: "success",
      btnName: "Success",
    },
    {
      btn: "error",
      btnName: "error",
    },
    {
      btn: "warning",
      btnName: "warning",
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-200">Button variants</h2>
      <p className="text-slate-400">
        check out the different Button components.
      </p>
      <div className="bg-[#323234] px-4 py-8 rounded mt-5 space-x-6 ">
        {btnVaraints.map((btn) => (
          <Button btnVariant={btn?.btn} btnName={btn?.btnName} />
        ))}
        <Button />
      </div>
    </section>
  );
};

export default ButtonPage;
