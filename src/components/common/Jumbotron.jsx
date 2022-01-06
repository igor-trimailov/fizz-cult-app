import React from 'react'

function Jumbotron({ heading, text, image, children }) {
  return (
    <>
      <div className="relative flex flex-col items-center bg-gradient-to-b from-gray-300 via-purple-gray-200 to-gray-100">
        <div className="flex flex-col w-full px-3 mt-5 mb-5 lg:w-3/5 md:w-4/5 md:flex-row">
          <div>
            <h1 className="mb-3 text-4xl font-semibold leading-10">
              {heading}
            </h1>
            <p className="text-base leading-6">{text}</p>
          </div>
          <div className="flex items-center justify-center min-w-xs">
            <img
              alt="Hero logo"
              className="max-w-full"
              src={process.env.PUBLIC_URL + '/images/' + image}
            />
          </div>
        </div>
        <div className="py-4">{children}</div>
      </div>
    </>
  )
}

export default Jumbotron
