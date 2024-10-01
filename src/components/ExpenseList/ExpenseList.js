import React, { Component } from 'react'
import { ExpenseItem } from 'components'
import { FaTrashCan } from 'react-icons/fa6'

export default class ExpenseList extends Component {
  render() {
    return (
      <section className='container mx-auto mb-80 px-5 py-10 md:mb-5 md:px-0'>
        <h1 className='text-2xl'>
          <strong>총 지출 : </strong>
          <span>0 원</span>
        </h1>
        <button type='button' className='mb-10 mt-3 text-sm text-gray-500'>
          <FaTrashCan className='me-1 inline align-text-top' />
          목록 비우기
        </button>
        <ul className='flex flex-col gap-5'>
          <li>
            <ExpenseItem />
          </li>
          <li>
            <ExpenseItem />
          </li>
          <li>
            <ExpenseItem />
          </li>
        </ul>
      </section>
    )
  }
}
