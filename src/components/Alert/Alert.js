import React from 'react'
import PropTypes from 'prop-types'
import { PiWarningOctagonFill } from 'react-icons/pi'
import { FaCircleCheck } from 'react-icons/fa6'

const Alert = ({ type, text }) => {
  return (
    <section className={`container mx-auto mt-5 rounded-xl bg-${type} p-5 text-sm shadow-2xl shadow-${type}`}>
      {type == 'success' ? (
        <FaCircleCheck className='me-1 inline text-2xl text-green-900' />
      ) : (
        <PiWarningOctagonFill className='me-1 inline text-2xl text-yellow-900' />
      )}
      {text}
    </section>
  )
}

Alert.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}

export default Alert
