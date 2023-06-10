import React from 'react'
import Facebook from './svg-component/Facebook'
import Linkedin from './svg-component/Linkedin'
import Youtube from './svg-component/Youtube'

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-indigo-950">
        <div class="mx-auto w-full max-w-screen-xl p-16 py-6 lg:py-16">
          <div className='items-center justify-center mt-6 mb-12 flex space-x-2 sm:justify-center sm:mt-0'>
            <a href="#" class="text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 ">
              <button className='border border-gray-100 rounded px-2'>
                <Facebook />
              </button>
            </a>
            <a href="#" class="text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 ">
              <button className='border border-gray-100 rounded px-2'>
                <Youtube />
              </button>
            </a>
            <a href="#" class="text-gray-200 hover:text-gray-400 dark:hover:text-gray-400 ">
              <button className='border border-gray-100 rounded px-2'>
                <Linkedin />
              </button>
            </a>
          </div>
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                  <a href="https://flowbite.com/" class="flex items-center">
                      <img src="https://deshcareer.com/logo/short-logo.png" className="h-20" alt="Desh Career" />
                  </a>
                    <p class="mb-3 box-border w-96 text-left text-gray-500 dark:text-gray-400">
                      Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM. 
                    </p>
              </div>
              {/* <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> */}
                  <div>
                      <h2 class="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white capitalize">Privacy And Terms</h2>
                      <ul class="text-gray-600 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <a href="https://flowbite.com/" class="hover:text-white">Privacy Policy</a>
                          </li>
                          <li className='mb-4'>
                              <a href="https://tailwindcss.com/" class="hover:text-white">Terms Condition</a>
                          </li>
                          <li>
                              <a href="https://tailwindcss.com/" class="hover:text-white">FAQ</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white capitalize">Support</h2>
                      <ul class="text-gray-600 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <a href="https://github.com/themesberg/flowbite" class="hover:text-white ">Affiliate Link</a>
                          </li>
                          <li className='mb-4'>
                              <a href="https://discord.gg/4eeurUVvTy" class="hover:text-white">Contact Us</a>
                          </li>
                          <li className='mb-4'>
                              <a href="https://discord.gg/4eeurUVvTy" class="hover:text-white">Advertise with us</a>
                          </li>
                      </ul>
                  </div>
              {/* </div> */}
          </div>
          <hr class="my-2 border-gray-200 sm:mx-auto dark:border-slate-400 lg:my-2" />
          <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-white">© 2023 Newsletter E-mail Service: All Copy right reserved
              </span>
              <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="#" class="text-gray-200 ">
                  Terms
              </a>
              <a href="#" class="text-gray-200 ">
                  Cookie Policy
              </a>
              <a href="#" class="text-gray-200 ">
                  Terms
              </a>
              <a href="#" class="text-gray-200  ">
                  Privacy
              </a>
              </div>
          </div>
        </div>
    </footer>

  )
}

export default Footer