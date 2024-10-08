import React from 'react'
import PropTypes from 'prop-types'
import { PiWarningOctagonFill } from 'react-icons/pi'
import { FaCircleCheck } from 'react-icons/fa6'

const Alert = ({ isSuccess, text }) => {
  return (
    <section
      className={`container mx-auto mt-5 rounded-xl p-5 text-sm shadow-2xl ${isSuccess ? 'bg-success shadow-success' : 'bg-warning shadow-warning'}`}>
      {isSuccess ? (
        <FaCircleCheck className='me-1 inline text-2xl text-green-900' />
      ) : (
        <PiWarningOctagonFill className='me-1 inline text-2xl text-yellow-900' />
      )}
      {text}
    </section>
  )
}

Alert.propTypes = {
  isSuccess: PropTypes.bool,
  text: PropTypes.string
}

export default Alert
