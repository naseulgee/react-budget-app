/** NOTE: 클래스형 컴포넌트 -> 함수형 컴포넌트 */
import { useState } from 'react'
import { Alert, ExpenseForm, ExpenseList } from 'components'
import './App.css'

/** NOTE: 컴포넌트
 * - 컴포넌트 선언
 *    - 상속 데이터인 props 와 context 를 매개변수로 받는다
 *    - 매개변수들은 구조분해할당이 가능하다
 *    - 클래스형: class App extends Component { ... }
 *    - 함수형  : const App = (props, context) => { ... }
 */
const App = () => {
  /** NOTE: 상태
   * - 선언
   *    - 생성자 대신 Hook 을 이용한 선언
   *    - 클래스형: constructor(props) { ... this.state = { ... } }
   *    - 함수형  : const [변수명, set변수명] = useState(초기값)
   * - 접근
   *    - 클래스형: this.state.상태명
   *    - 함수형  : 상태명
   * - 업데이트
   *    - 클래스형: this.setState({ 상태명: 값 })
   *    - 함수형  : set변수명(값)
   */

  // 지출 목록
  const [expenses, setExpenses] = useState([])
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState('')
  const handleSubmit = e => {
    // 폼 제출과 동시에 페이지 새로고침 등 방지
    e.preventDefault()

    if (charge == '' || amount == 0) {
      if (alert.isShow) return
      // 알림창 호출 및 제거 타이머
      setAlert({ isShow: true, text: '내용을 입력해 주세요', isSuccess: false })
      hideAlert()
      return
    }

    // 지출 목록 세팅
    let newExpenses
    let type
    if (!edit) {
      newExpenses = [...expenses, { id: crypto.randomUUID(), charge, amount }] // 기존 목록 + 신규 내용
      type = '입력'
    } else {
      newExpenses = expenses.map(item => (item.id == editId ? { ...item, charge, amount } : item))
      type = '수정'
    }
    setExpenses(newExpenses)
    // 알림창 호출 및 제거 타이머
    setAlert({ isShow: true, text: '성공적으로 ' + type + '되었습니다', isSuccess: true })
    hideAlert()
    // 입력 값 리셋
    setCharge('')
    setAmount(0)
    setEdit(false)
    setEditId('')
  }
  const clearItems = () => {
    setExpenses([])
  }
  const handleDelete = id => {
    // 전달받은 id 만 제외하여 새로운 배열 생성
    const newExpenses = expenses.filter(item => item.id != id)
    // 상태 업데이트 -> 상태 업데이트와 함께 화면이 리렌더링 된다
    setExpenses(newExpenses)
    // 알림창 호출 및 제거 타이머
    setAlert({ isShow: true, text: '지출 목록이 제거되었습니다', isSuccess: true })
    hideAlert()
  }
  const handleModify = id => {
    // 수정 값 가져오기
    const expense = expenses.find(item => item.id == id)
    const { charge, amount } = expense
    // 입력창에 값 세팅하기
    setCharge(charge)
    setAmount(amount)
    setEditId(id)
    setEdit(true)
  }

  // 지출 항목
  const [charge, setCharge] = useState('')
  const handleCharge = e => {
    setCharge(e.target.value)
  }

  // 비용
  const [amount, setAmount] = useState(0)
  const handleAmount = e => {
    setAmount(e.target.valueAsNumber)
  }

  // 알림창
  const [alert, setAlert] = useState({ isShow: false, text: '', isSuccess: true })
  const hideAlert = () => {
    setTimeout(() => {
      setAlert({ isShow: false })
    }, 1500)
  }

  // UI 작성 부분
  return (
    <>
      <header>
        {
          /** 삼항 연산자를 이용한 조건부 렌더링 */
          alert.isShow && (
            <Alert
              text={alert.text}
              isSuccess={alert.isSuccess}
            />
          )
        }
      </header>
      <main>
        {/* 지출 등록 */}
        <ExpenseForm
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        {
          /* 지출 목록 */
          // 데이터(변수, 함수)는 HTML 의 속성처럼 전달(상속)해줄 수 있다
        }
        <ExpenseList
          expenses={expenses}
          clearItems={clearItems}
          handleDelete={handleDelete}
          handleModify={handleModify}
          editId={editId}
        />
      </main>
    </>
  )
}

export default App
