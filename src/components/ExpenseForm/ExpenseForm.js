import React, { Component } from 'react'

export default class ExpenseForm extends Component {
  render() {
    return (
      <form className='shadow-t-2xl fixed inset-x-0 bottom-0 mx-auto rounded-t-xl bg-primary p-5 text-sm text-white shadow-primary md:container md:static md:mt-5 md:rounded-xl md:shadow-2xl md:shadow-primary'>
        <h1 className='mb-5 text-center text-lg'>예산 계산기</h1>
        <div className='flex w-full flex-wrap gap-5 rounded-md md:flex-nowrap'>
          <label htmlFor='expense' className='basis-full md:basis-1/2'>
            <span>지출 항목</span>
            <input
              id='expense'
              name='expense'
              type='text'
              className='mt-2 block w-full rounded-md bg-transparent px-3.5 py-2 shadow ring-1 ring-inset ring-gray-300 transition placeholder:text-gray-300 focus:bg-white focus:bg-opacity-20 focus-visible:outline-none sm:text-lg'
              autoComplete='off'
              placeholder='월세'
            />
          </label>
          <label htmlFor='expense' className='basis-full md:basis-1/2'>
            <span>비용</span>
            <input
              id='expense'
              name='expense'
              type='number'
              className='mt-2 block w-full rounded-md bg-transparent px-3.5 py-2 shadow ring-1 ring-inset ring-gray-300 transition placeholder:text-gray-300 focus:bg-white focus:bg-opacity-20 focus-visible:outline-none sm:text-lg'
              autoComplete='off'
              placeholder='1000'
            />
          </label>
          <button
            type='submit'
            className='hover:bg-active focus:bg-active block basis-full rounded-md bg-secondary px-3.5 py-2 text-center shadow focus-within:outline-none md:mt-7 md:basis-1/12'
          >
            추가
          </button>
        </div>
      </form>
    )
  }
}
