/** NOTE: 클래스형 컴포넌트 -> 함수형 컴포넌트 */
import { useState } from 'react'
import { ExpenseForm, ExpenseList } from 'components'
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
  const [expenses, setExpenses] = useState([
    { id: 1, charge: '렌트비', amount: 1600 },
    { id: 2, charge: '교통비', amount: 400 },
    { id: 3, charge: '식비', amount: 1200 }
  ])

  const handleDelete = id => {
    // 전달받은 id 만 제외하여 새로운 배열 생성
    const newExpenses = expenses.filter(expense => expense.id != id)
    // 상태 업데이트 -> 상태 업데이트와 함께 화면이 리렌더링 된다
    setExpenses(newExpenses)
  }
  const handleModify = id => {
    console.log(id)
  }

  // UI 작성 부분
  return (
    <main>
      {/* 지출 등록 */}
      <ExpenseForm />
      {
        /* 지출 목록 */
        // 데이터(변수, 함수)는 HTML 의 속성처럼 전달(상속)해줄 수 있다
      }
      <ExpenseList
        expenses={expenses}
        handleDelete={handleDelete}
        handleModify={handleModify}
      />
    </main>
  )
}

export default App
