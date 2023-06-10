import React from "react";
import Email from "./svg-component/Email";

const EmailAddress = () => {
  return (
    <div
      className="
        mt-6
        mb-8
        flex
      "
    >
      <form className="w-full">
        <label
          for="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your E-mail address
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3  px-10 pointer-events-none">
            <Email className="text-black"/>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-6 pl-16  text-md shadow  rounded-lg outline-none placeholder-gray-500 sm:text-sm"
            placeholder="Your E-mail address"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-red-700    font-medium rounded-md text-md lg:px-16 lg:py-3 dark:bg-red-500  sm:py-2 sm:px-8 "
          >
            Join Free
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailAddress;
