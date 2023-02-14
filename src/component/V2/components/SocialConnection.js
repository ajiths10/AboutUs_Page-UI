import React from "react";

const SocialConnection = ({ icons }) => {
  return (
    <div className="flex flex-row justify-end mt-2 ">
      {icons?.map((buscat, index) => {
        return (
          <div class="flex justify-center items-center h-[25px] w-[25px] rounded-full bg-slate-500 opacity-60 hover:opacity-100">
            <span class="flex justify-center items-center h-[22px] w-[22px] rounded-full bg-black opacity-60 hover:opacity-100">
              <img
                alt={`logo${index}`}
                src={require(`../../../assets/${buscat}.png`)}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SocialConnection;
