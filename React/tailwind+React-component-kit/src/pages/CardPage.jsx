import Alert from "../components/Alert";
import Card from "../components/Card";

const CardPage = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-200">Card Variants</h2>
      <p className="text-slate-400">
        Note: use tailwind grid to parent element
      </p>
      <div className="bg-[#323234] px-4 py-8 rounded mt-5 grid grid-cols-3 gap-4 ">
        {/* card 1 */}
        <Card
          cardImg={"/download.svg"}
          cardTitle={"Card title goes Here"}
          cardDesc={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
          cardBtn="go somewhere"
        />
        {/* card 2 */}
        <Card
          cardTitle={"Card title goes Here"}
          cardDesc={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
          cardBtn="go somewhere"
        />

        <Card
          cardImg={"/download.svg"}
          cardDesc={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
      </div>
    </section>
  );
};

export default CardPage;
