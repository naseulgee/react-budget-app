import { FaPlus } from 'react-icons/fa6'

const ExpenseForm = () => {
  return (
    <form className='fixed inset-x-0 bottom-0 mx-auto rounded-t-xl bg-primary p-5 text-sm text-white shadow-t-2xl shadow-primary md:container md:static md:mt-5 md:rounded-xl md:shadow-2xl md:shadow-primary'>
      <h1 className='mb-5 text-center text-lg'>예산 계산기</h1>
      <div className='flex w-full flex-wrap gap-5 rounded-md md:flex-nowrap'>
        <label
          htmlFor='charge'
          className='basis-full md:basis-1/2'>
          <span>지출 항목</span>
          <input
            id='charge'
            name='charge'
            type='text'
            className='mt-2 block w-full rounded-md bg-transparent px-3.5 py-2 shadow ring-1 ring-inset ring-gray-300 transition placeholder:text-gray-300 focus:bg-white focus:bg-opacity-20 focus-visible:outline-none sm:text-lg'
            autoComplete='off'
            placeholder='월세'
          />
        </label>
        <label
          htmlFor='amount'
          className='basis-full md:basis-1/2'>
          <span>비용</span>
          <input
            id='amount'
            name='amount'
            type='number'
            className='mt-2 block w-full rounded-md bg-transparent px-3.5 py-2 shadow ring-1 ring-inset ring-gray-300 transition placeholder:text-gray-300 focus:bg-white focus:bg-opacity-20 focus-visible:outline-none sm:text-lg'
            autoComplete='off'
            placeholder='1000'
          />
        </label>
        <button
          type='submit'
          className='block basis-full rounded-md bg-secondary px-3.5 py-2 text-center shadow focus-within:outline-none hover:bg-active focus:bg-active md:mt-7 md:basis-0'>
          <FaPlus className='inline' />
          <span className='ms-2 inline md:hidden'>추가</span>
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm
