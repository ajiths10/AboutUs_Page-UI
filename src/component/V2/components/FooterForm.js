import React from "react";

const FooterForm = () => {
  return (
    <div className="pt-3">
      <input
        type="text"
        placeholder="Enter your Email"
        className="rounded-sm h-8 w-64 px-5"
      />
      <button className="ml-2 bg-slate-700 h-8 px-2 rounded-sm hover:cursor-pointer hover:bg-slate-800 hover:text-slate-300">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default FooterForm;
