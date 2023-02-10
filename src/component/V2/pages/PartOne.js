const PartOne = () => {
  return (
    <div className="flex justify-center flex-col items-center m-2">
      <span className="text-4xl text-red-900">Happiness Is Our Culture</span>
      <p className="pt-2 mt-3 text-center text-sm leading-5 font-medium text-slate-700">
        The productivity and prosperity of an organisation is the reflection of
        the happiness and contentment of its employees. We believe that is what
        builds a family and the nation too. Happy employees are not just an
        asset to the organisation, but the love, contentment and enthusiasm they
        display build the whole world.So it is our prime responsibility to give
        a conducive, happy work culture for our employees, a climate which gives
        them opportunities for self growth and skill development.
      </p>
      <img
        alt="student"
        src={require("../../../assets/student.png")}
        className="mt-5"
      />
    </div>
  );
};

export default PartOne;
