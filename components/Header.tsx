import { FC } from 'react'
import Image from 'next/image'
import headerPic from '/images/header-person.png'
import { motion } from 'framer-motion'

const Header: FC = () => {
  return (
    <div>
      <div>
        <div className=" mx-auto flex w-full flex-row items-center justify-between bg-orange-50  px-6 pt-24 md:px-12 ">
          {/* circles */}
          <div className="absolute top-16 -left-32  h-72 w-72 rounded-full bg-gray-200 opacity-50"></div>
          <div className="absolute inset-x-2/4 inset-y-2/4  z-10 -mt-16 h-48 w-48 rounded-full bg-white"></div>
          <div className="absolute right-0 bottom-0  z-20 -mb-4 mr-2 h-32 w-32 rounded-full bg-black opacity-90"></div>

          {/* header text */}
          <motion.div
            animate={{ x: 200 }}
            transition={{ duration: 2 }}
            className=" z-30 -ml-10 -mt-40 flex flex-col items-start lg:w-3/5 xl:w-2/5"
          >
            {' '}
            <span
              className="uppercase text-black
          "
            >
              JANE DOE - Personal Stylist
            </span>
            <h1 className="mt-4 text-7xl leading-tight text-black sm:text-7xl md:text-8xl">
              Elevate
              <br />
              Your Style{' '}
            </h1>
            <a
              href="/contact"
              className="mt-10 block  border-b-4 border-black bg-white py-3 px-4 text-lg font-bold uppercase text-gray-800 hover:bg-gray-100

            "
            >
              Get in touch
            </a>
          </motion.div>

          {/* header image */}
          <motion.div
            animate={{ x: -200 }}
            transition={{ duration: 2 }}
            className="bottom-0 z-20 ml-96 -mt-24"
          >
            <Image
              src={headerPic}
              alt="Picture of the author"
              height="800"
              width="800"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Header
