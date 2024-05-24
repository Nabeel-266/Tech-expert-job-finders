import React from "react";
import DashHomeSlider from "../../components/Dashboard/DashHomeSlider";
import DashQuestion from "../../components/Dashboard/DashQuestion";
import CreateButton from "../../components/Dashboard/CreateButton";
import ResumeCard from "../../components/Dashboard/ResumeSavedCard";
import ResumeSavedCard from "../../components/Dashboard/ResumeSavedCard";

const DashCoverLetter = () => {
  return (
    <div className="min-w-[80%] pt-[7rem] flex-1 bg-coral-light m-10">
      <div className="flex  px-8 items-center">
        <div className="bg-theme-red w-2/6 h-56  p-8 rounded-lg">
          <p className="text-3xl text-white">
            {" "}
            <span className="text-3xl font-bold">Pro Tip: </span> It's important
            to create a custom resume tailored to each job application to
            increase your chances of success!
          </p>
        </div>

        <CreateButton btnText='Create Cover Letter'/>
      </div>
      <ResumeSavedCard cardName='Name'/>
    </div>
  );
};

export default DashCoverLetter;
