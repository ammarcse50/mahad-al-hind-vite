import React from 'react'
import PropTypes from 'prop-types'

const Footer = () => {
  return (
    <div>

<footer className="w-full p-8 bg-white">
  <div
    className="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
    <img src="https://i.ibb.co/WshBJnK/mahad-al-hind-logo.png" alt="logo-ct" className="w-10" />
    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
      <li>
        <a href="#"
          className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
          About Us
        </a>
      </li>
      <li>
        <a href="#"
          className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
          License
        </a>
      </li>
      <li>
        <a href="#"
          className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
          Contribute
        </a>
      </li>
      <li>
        <a href="#"
          className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-blue-gray-900 hover:text-blue-500 focus:text-blue-500">
          Contact Us
        </a>
      </li>
    </ul>
  </div>
  <span className="block my-8 border-t border-blue-gray-50" />
  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-center text-blue-gray-900">
    © 2023 Material Tailwind
  </p>
</footer>
      
    </div>
  )
}

Footer.propTypes = {

}

export default Footer
