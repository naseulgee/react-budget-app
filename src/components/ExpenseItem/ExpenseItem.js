import React, { Component } from 'react'

export default class ExpenseItem extends Component {
  render() {
    return (
      <div className='flex w-full flex-wrap gap-5 rounded-md bg-gray-50 p-5 shadow-xl md:flex-nowrap'>
        <strong className='basis-full md:basis-1/2'>식비</strong>
        <span className='basis-full md:basis-1/2'>10000 원</span>
        <div className='flex gap-1 md:basis-1/6'>
          <button type='button' className='basis-1/2'>
            수정
          </button>
          <button type='button' className='basis-1/2'>
            삭제
          </button>
        </div>
      </div>
    )
  }
}
