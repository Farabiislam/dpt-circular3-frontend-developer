import React from "react";

const QueryOptions = () => {
  return (
    <div className=" px-[10vw]">
      <div className="flex font-semibold justify-center py-[20px]  ">
        <button className="border border-black px-5 py-1">Round Trip</button>
        <button className="border border-black text-white bg-buttonColor px-5 py-1">
          One Way
        </button>
        <button className="border border-black px-5 py-1">Multi city</button>
      </div>
      <div className="h-[2px] bg-hrcolor "></div>
      <div className="flex gap-4 justify-center my-2 ">
        <input
          className="mybutton outline-none "
          type="text"
          placeholder="LHR"
        />
        <input
          className="mybutton outline-none "
          type="text"
          placeholder="CDG"
        />

        <input
          className="mybutton"
          type="date"
          id="myDate"
          value="2022-12-22"
        />
        <select className="mybutton" name="day" id="">
          <option value="">Day-</option>
        </select>
        <select className="mybutton" name="day" id="">
          <option value="">Day+</option>
        </select>
        <select className="mybutton" name="" id="">
          <option value="">Any time</option>
        </select>
        <span className="font-bold text-xl ">+</span>
        <select className="mybutton" name="" id="">
          <option value="">ADT</option>
        </select>
        <select className="mybutton" name="" id="">
          <option value="">1</option>
        </select>
        <span className="font-bold text-xl ">+</span>
      </div>
      <div className="h-[1px] bg-hrcolor "></div>
      <div className="flex justify-between my-2 ">
        <div className=" flex gap-2 items-center ">
          <input type="checkbox" />
          <span className="font-bold ">Extra Option</span>
        </div>
        <div className="flex items-center font-bold  gap-2 ">
          <span>Environment</span>
          <input type="radio" name="" id="" checked />
          <label>Dummy</label>
          <input type="radio" />
          <label htmlFor="">PDT</label>
        </div>
        <button className="font-bold py-1 px-5 bg-buttonColor rounded-md text-white ">
          SEARCH
        </button>
      </div>
      <div className="h-[2px] bg-hrcolor "></div>
    </div>
  );
};

export default QueryOptions;
