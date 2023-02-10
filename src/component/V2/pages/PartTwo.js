const PartTwo = () => {
  const dataArray = [
    "Listen to them. We give opportunities for them to express their views- personal and official.",
    "Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.",
    "Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.,",
    "The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.",
    "Timely Financial assistance is rendered as a part of employee welfare scheme as and when required.",
  ];

  return (
    <div className="grid grid-cols-2 mt-[100px] ">
      <div className="col-span-1">
        <img alt="group" src={require("../../../assets/group.png")} />
      </div>
      <div className="col-span-1 ml-2">
        <div className=" text-3xl leading-10">
          What Do We Do To Make Our Employees Stay Happy And Satisfied ?
        </div>
        <div className="ml-4 mt-12">
          <ul className="list-outside">
            {dataArray.map((buscat) => {
              return (
                <li className="flex flex-row items-center m-5">
                  <img
                    className="w-4 h-4"
                    alt="verify"
                    src={require("../../../assets/stick_simpal.png")}
                  />
                  &nbsp;
                  <span className="ml-2 font-medium text-slate-600 text-sm">
                    {buscat}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartTwo;
