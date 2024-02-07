import Alert from "../components/Alert";

const AlertPage = () => {
  const variants = [
    {
      variant: "success",
      desc: "This is a success alert with an . Give it a click if you like.",
    },
    {
      variant: "warning",
      desc: "This is a warning alert with an . Give it a click if you like.",
    },
    {
      variant: "error",
      desc: "This is a error alert with an . Give it a click if you like.",
    },
  ];
  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-200">Alert variants</h2>
      <p className="text-slate-400">
        check out the different Alert components.
      </p>
      <div className="bg-[#323234] px-4 py-8 rounded mt-5 space-y-6 ">
        {variants.map((variantObj, index) => {
          return (
            <Alert
              alert={variantObj.variant}
              description={variantObj.desc}
              key={index}
            />
          );
        })}

        <Alert alert="error">
          <h2 className="text-semibold">Alert Child title</h2>
          <small>child alert msg</small>
        </Alert>
      </div>
    </section>
  );
};

export default AlertPage;
