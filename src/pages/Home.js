import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import EmailAddress from '../components/EmailAddress'

const Home = () => {
  return (
    <div
      className='flex flex-col  h-screen justify between'
    >
      <Nav/>
      <div className='
        w-2/3
        mt-16
        px-16
        mb-auto
      '>
        <h1 className='text-6xl text-left font-bold dark:text-whit'>
          Get Smarter about your career
        </h1>
        <p className='text-lg text-left mt-3 mb-4'>Get the <span className='font-semibold'> 5-minute newsletter</span> keeping about smart career</p>
        <EmailAddress/>
        <p className='text-lg text-left mb-16'>
          We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default Home