import jsonData from "./data.json";
import SummaryField from "./Components/SummaryField.jsx";

function App() {
  const totalScore = jsonData.reduce((acc, curr) => acc + curr.score, 0);

  const averageScore = Math.round(totalScore / jsonData.length);

  return (
    <>
      <section className="lg:rounded-3xl lg:shadow-xl lg:flex">
        <section className="lg:flex-1 lg:rounded-3xl rounded-b-3xl bg-gradient-to-t from-light-royale-blue to-light-slate-blue text-light-lavender">
          <div className="flex flex-col items-center justify-center gap-6 p-10 text-center">
            <h2 className="text-xl font-bold">Your Result</h2>
            <div className="p-10 rounded-full bg-gradient-to-t to-violet-blue from-persian-blue">
              <p className="text-center">
                <span className="block text-6xl font-bold text-white">
                  {averageScore}
                </span>{" "}
                of 100
              </p>
            </div>

            <h1 className="text-2xl font-bold text-white">Great</h1>
            <p className="font-bold lg:max-w-96">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-6 p-8 lg:flex-1 text-light-lavender">
          <p className="text-xl font-bold text-black">Summary</p>
          <ul className="flex flex-col gap-4">
            <SummaryField category={jsonData[0].category} score={jsonData[0].score} icon={jsonData[0].icon} textColor={"text-light-red"} bgColor={"bg-light-red-bg"} />
            <SummaryField category={jsonData[1].category} score={jsonData[1].score} icon={jsonData[1].icon} textColor={"text-orangey-yellow"} bgColor={"bg-orangey-yellow-bg"} />
            <SummaryField category={jsonData[2].category} score={jsonData[2].score} icon={jsonData[2].icon} textColor={"text-green-teal"} bgColor={"bg-green-teal-bg"} />
            <SummaryField category={jsonData[3].category} score={jsonData[3].score} icon={jsonData[3].icon} textColor={"text-cobalt-blue"} bgColor={"bg-cobalt-blue-bg"} />
          </ul>
          <button className="w-full p-4 font-bold text-white rounded-full bg-dark-gray-blue lg:hover:scale-105 lg:duration-200">
            Continue
          </button>
        </section>
      </section>
    </>
  );
}

export default App;
