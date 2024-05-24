import React from "react";
import { getNames } from "country-list";
import { TfiSave } from "react-icons/tfi";

const ProfileForm = () => {
  return (
    <div className="w-full">
      <form action="#" className="w-full flex flex-col gap-[2rem]">
        {/* Row First */}
        <div className="rowFirst grid grid-cols-3 gap-[2rem]">
          {/* First Name */}
          <div className="firstNameInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="firstName"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Middle Name */}
          <div className="middleNameInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="middleName"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Middle Name (Optional)
            </label>
            <input
              type="text"
              name="middleName"
              id="middleName"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Last Name */}
          <div className="lastNameInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="lastName"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>
        </div>

        {/* Row Second */}
        <div className="rowSecond grid grid-cols-3 gap-[2rem]">
          {/* Gender */}
          <div className="genderInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="gender"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Gender (Optional)
            </label>
            <select
              name="gender"
              id="gender"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="empty">Empty</option>
            </select>
          </div>

          {/* Date Of Birth */}
          <div className="dateOfBirthInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="dateOfBirth"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Date of Birth (Optional)
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Marital Status */}
          <div className="maritalStatusInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="marital"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Marital Status (Optional)
            </label>
            <select
              name="marital"
              id="marital"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
              <option value="empty">Empty</option>
            </select>
          </div>
        </div>

        {/* Row Third */}
        <div className="rowThird grid grid-cols-2 gap-[2rem]">
          {/* Profession */}
          <div className="professionInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="profession"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Profession
            </label>
            <input
              type="text"
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="eg. Snr.Accountant"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Address */}
          <div className="addressInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="address"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Street Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>
        </div>

        {/* Row Fourth */}
        <div className="rowFourth grid grid-cols-3 gap-[2rem]">
          {/* City */}
          <div className="cityInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="city"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Sate Or Province */}
          <div className="provinceInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="province"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              State/Province
            </label>
            <input
              type="text"
              name="province"
              id="province"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Nationality */}
          <div className="nationalityInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="nationality"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Nationality (Optional)
            </label>
            <select
              name="nationality"
              id="nationality"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            >
              <option value="">Select Country</option>
              {getNames().map((country, index) => (
                <option value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row Fifth */}
        <div className="rowFifth grid grid-cols-3 gap-[2rem]">
          {/* Passport Number */}
          <div className="passportInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="passport"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Passport Number
            </label>
            <input
              type="number"
              name="passport"
              id="passport"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Mobile Number */}
          <div className="mobileInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="mobile"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Mobile Number
            </label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>

          {/* Email */}
          <div className="emailInput flex flex-col gap-[0.8rem]">
            <label
              htmlFor="email"
              className="text-[1.5rem] leading-[1.5rem] text-theme-red"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="outline-none px-[1rem] py-[0.8rem] text-neutral-800 text-[1.4rem] leading-[1.4rem] border-neutral-300 border-[0.2rem] rounded-md focus:border-theme-red"
            />
          </div>
        </div>

        <div className="btnRow w-full flex justify-end">
          <button className="bg-theme-red text-white text-[1.5rem] px-[2rem] py-[1rem] flex items-center gap-[0.6rem] rounded-lg">
            <TfiSave />
            <span>Save</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;