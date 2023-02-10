import React from "react";

const PartThree = () => {
  const dataArray = [
    "Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.",
    "Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents.",
    "Share part of the profit to ensure the welfare of the employees, society & the environment.",
  ];

  return (
    <div className="grid grid-cols-12 gap-1 mt-[100px]">
      <div className="col-span-7 grid grid-rows-12 gap-2">
        <div className="row-span-8 bg-sample-one bg-no-repeat text-slate-100 h-[300px] flex items-center pl-10">
          <div className="w-[500px] ">
            <h2 className="text-lg font-semibold">Our Vision</h2>
            <p className="mt-3 font-light">
              Our vision is to provide prime value to customers by delivering
              supreme quality undergarments in the global market with the intent
              to touch the lives of our employees, immediate society and the
              world community with the understanding -‘we exist because they
              exist’.
            </p>
          </div>
        </div>
        <div className="row-span-4 bg-sample-three bg-no-repeat h-[150px]">
          brown
        </div>
      </div>
      <div className="col-span-5 bg-sample-two bg-no-repeat text-slate-50">
        <div className="ml-6 mt-12">
          <h2 className="text-lg font-semibold">Our Mission</h2>
          <p className="mt-1">
            Our mission is to put in effort wholeheartedly to:
          </p>
        </div>
        <div className="ml-4 mt-8">
          <ul className="list-outside">
            {dataArray.map((buscat) => {
              return (
                <li className="flex flex-row items-center m-4 w-[350px]">
                  <span className="ml-2 font-light text-sm leading-7">
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

export default PartThree;
