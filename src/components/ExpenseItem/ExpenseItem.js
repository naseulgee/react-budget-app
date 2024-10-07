import { FaPen, FaTrashCan } from 'react-icons/fa6'
import PropTypes from 'prop-types'

const ExpenseItem = ({ expense, handleDelete, handleModify }) => {
  return (
    <div className='flex w-full flex-wrap gap-5 rounded-md bg-gray-50 p-5 shadow-xl md:flex-nowrap'>
      <strong className='basis-full md:basis-1/2'>{expense.charge}</strong>
      <span className='basis-full text-gray-500 md:basis-1/2'>{expense.amount} 원</span>
      <div className='flex basis-full justify-end gap-2 md:basis-1/12'>
        <button
          type='button'
          className='text-success md:basis-1/2'
          onClick={() => handleModify(expense.id)}>
          <FaPen className='inline align-text-top' />
          <span className='ms-2 inline md:hidden'>수정</span>
        </button>
        <button
          type='button'
          className='text-danger md:basis-1/2'
          onClick={() => handleDelete(expense.id)}>
          <FaTrashCan className='inline align-text-top' />
          <span className='ms-2 inline md:hidden'>삭제</span>
        </button>
      </div>
    </div>
  )
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  handleDelete: PropTypes.func,
  handleModify: PropTypes.func
}

export default ExpenseItem
