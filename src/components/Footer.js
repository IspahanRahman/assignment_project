import React from 'react'
import Facebook from './svg-component/Facebook'
import Linkedin from './svg-component/Linkedin'
import Youtube from './svg-component/Youtube'

const Footer = () => {
  return (
<footer className="bg-white dark:bg-indigo-950">
  <div className="mx-auto w-full max-w-screen-xl p-16 py-6 lg:py-16">
    <div className="flex items-center justify-center mt-6 mb-12 space-x-2 sm:justify-center sm:mt-0">
      <a href="#" className="text-gray-200 hover:text-gray-400 dark:hover:text-gray-400">
        <button className="border border-gray-100 rounded px-2">
          <Facebook />
        </button>
      </a>
      <a href="#" className="text-gray-200 hover:text-gray-400 dark:hover:text-gray-400">
        <button className="border border-gray-100 rounded px-2">
          <Youtube />
        </button>
      </a>
      <a href="#" className="text-gray-200 hover:text-gray-400 dark:hover:text-gray-400">
        <button className="border border-gray-100 rounded px-2">
          <Linkedin />
        </button>
      </a>
    </div>

    <div className="md:flex md:justify-between">
      <div class="mb-6 md:mb-0 md:w-1/2">
        <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://deshcareer.com/logo/short-logo.png" className="h-20" alt="Desh Career" />
        </a>
        <p class="mb-3 box-border lg:w-96 md:w-64 sm:48 text-left text-gray-500 dark:text-gray-400">
          Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM. 
        </p>
      </div>
      <div className="md:w-1/2">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white capitalize">
          Privacy And Terms
        </h2>
        <ul className="text-gray-600 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="https://flowbite.com/" className="hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li className="mb-4">
            <a href="https://tailwindcss.com/" className="hover:text-white">
              Terms Condition
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" className="hover:text-white">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      <div className="md:w-1/2 ">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white capitalize">
          Support
        </h2>
        <ul className="text-gray-600  dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="https://github.com/themesberg/flowbite" className="hover:text-white">
              Affiliate Link
            </a>
          </li>
          <li className="mb-4">
            <a href="https://discord.gg/4eeurUVvTy" className="hover:text-white">
              Contact Us
            </a>
          </li>
          <li className="mb-4">
            <a href="https://discord.gg/4eeurUVvTy" className="hover:text-white">
              Advertise with us
            </a>
          </li>
        </ul>
      </div>
    </div>

    <hr className="my-2 border-gray-200 sm:mx-auto dark:border-slate-400 lg:my-2" />

    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-white">
        © 2023 Newsletter E-mail Service: All Copy right reserved
      </span>
      <div className="flex mt-4  md:w-1/2 space-x-6 sm:justify-center sm:mt-0">
        <a href="#" className="text-gray-200">
          Terms
        </a>
        <a href="#" className="text-gray-200">
          Cookie Policy
        </a>
        <a href="#" className="text-gray-200">
          Terms
        </a>
        <a href="#" className="text-gray-200">
          Privacy
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer