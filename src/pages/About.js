import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const About = () => {
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
        <h1 className='text-5xl text-left font-bold dark:text-whit'>
          About Us
        </h1>
        <p className='text-lg text-left mt-3 mb-4'>Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM.
        </p>
        <p className='text-lg text-left mt-3 mb-4'>We focus on Career trend, news, smart job etc. </p>
        <p className='text-lg text-left mt-3 mb-4'>If you want to contact us: you can send an email to <a href='contact.deshcareer@gmail.com'><span className='text-blue-600 hover:text-blue-800 hover:underline'>contact.deshcareer@gmail.com</span></a></p>
        <p className='text-lg text-left mt-3 mb-4'>If you want to meet with us, you can come to our office based on an appointment. </p>
        <p className='text-lg text-left mt-3 mb-4'>Our Office address:</p>
        <p className='text-lg text-left mt-3 mb-4'>House: 13/3,</p>
        <p className='text-lg text-left mt-3 mb-4'>
          Road: 2,
        </p>
        <p className='text-lg text-left mt-3 mb-4'>
          Shyamoly, Dhaka-1207
        </p>
        <p className='text-lg text-left mb-16'>
          +8801880811047
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default About