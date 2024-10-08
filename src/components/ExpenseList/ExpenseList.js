import { ExpenseItem } from 'components'
import { FaTrashCan } from 'react-icons/fa6'
import PropTypes from 'prop-types'

const ExpenseList = ({ expenses, handleDelete, handleModify }) => {
  return (
    <section className='container mx-auto mb-80 px-5 py-10 md:mb-5 md:px-0'>
      <h1 className='text-2xl'>
        <strong>총 지출 : </strong>
        <span>
          {
            /** NOTE: reduce 함수
             * - 배열을 순회하며 값을 계산하여 반환하는 함수
             * 배열.reduce((누산값, 현재값, 현재 인덱스, 원본 배열 => 계산), 초기값)
             */
            expenses.reduce((acc, curr) => acc + curr.amount, 0)
          }
          원
        </span>
      </h1>
      <button
        type='button'
        className='mb-10 mt-3 text-sm text-gray-500'>
        <FaTrashCan className='me-1 inline align-text-top' />
        목록 비우기
      </button>
      <ul className='flex flex-col gap-5'>
        {
          // 상속받은 데이터는 this.props 를 통해 접근이 가능하다
          expenses.map(expense => (
            // 배열 반복 시 key 라는 키워드를 이용하여 고유값을 선언해줘야 한다
            <li key={expense.id}>
              <ExpenseItem
                expense={expense}
                handleDelete={handleDelete}
                handleModify={handleModify}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

// 상속 데이터 타입 정의
ExpenseList.propTypes = {
  expenses: PropTypes.array,
  handleDelete: PropTypes.func,
  handleModify: PropTypes.func
}

export default ExpenseList
