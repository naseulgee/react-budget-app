/** NOTE: 클래스형 컴포넌트
 * extends 키워드를 통해 리액트의 Component 속성을 상속한다
 */
import { Component } from 'react'
import { ExpenseFormCC, ExpenseListCC } from 'components'
import './App.css'

class App extends Component {
  // 클래스 객체의 생성자(객체 생성 시 초기화되는 부분) 선언
  constructor(props) {
    /** NOTE:
     * 생성자에서 super 키워드 하나만 사용되거나, ★this 키워드가 사용되기 전 호출되어야 한다
     * super 키워드를 먼저 사용해야 이후 this 키워드로 부모 클래스의 변수 및 메소드에 정상 접근 가능하다
     * super(props)
     *  - 부모 클래스(React.Component) 생성자 호출
     *  - React.Component 객체가 생성될 때 props 속성을 초기화하기 위해 super 의 인자로 props를 전달
     *  - 이후 생성자 내부에서도 this.props 를 정상 사용할 수 있다
     * super.메소드명(...)
     *  - 부모 클래스 메서드 호출
     */

    // 부모 클래스 생성자 호출 및 props 전달
    super(props)
    // 컴포넌트 내 동적으로 관리할 상태(반응성 데이터) 선언
    this.state = {
      expenses: [
        { id: 1, charge: '렌트비', amount: 1600 },
        { id: 2, charge: '교통비', amount: 400 },
        { id: 3, charge: '식비', amount: 1200 }
      ],
      charge: '',
      amount: 0
    }
  }
  // initExpenses = [
  //   { id: 1, charge: '렌트비', amount: 1600 },
  //   { id: 2, charge: '교통비', amount: 400 },
  //   { id: 3, charge: '식비', amount: 1200 }
  // ]

  // 지출 목록
  handleSubmit = e => {
    // 폼 제출과 동시에 페이지 새로고침 등 방지
    e.preventDefault()

    if (this.state.charge == '' || this.state.amount == 0) return

    // 지출 목록 세팅
    this.setState({
      expenses: [
        ...this.state.expenses,
        { id: crypto.randomUUID(), charge: this.state.charge, amount: this.state.amount }
      ]
    }) // 기존 목록 + 신규 내용
    // 입력 값 리셋
    this.setState({ charge: '' })
    this.setState({ amount: 0 })
  }
  handleDelete = id => {
    // 전달받은 id 만 제외하여 새로운 배열 생성
    const newExpenses = this.state.expenses.filter(expense => expense.id != id)
    // 상태 업데이트 -> 상태 업데이트와 함께 화면이 리렌더링 된다
    this.setState({ expenses: newExpenses })
    // const newExpenses = this.initExpenses.filter(expense => expense.id != id)
  }
  handleModify = id => {
    console.log(id)
  }

  // 지출 항목
  handleCharge = e => {
    this.setState({ charge: e.target.value })
  }

  // 비용
  handleAmount = e => {
    this.setState({ amount: e.target.valueAsNumber })
  }

  render() {
    // UI 작성 부분
    return (
      <main>
        {/* 지출 등록 */}
        <ExpenseFormCC
          charge={this.state.charge}
          handleCharge={this.handleCharge}
          amount={this.state.amount}
          handleAmount={this.handleAmount}
          handleSubmit={this.handleSubmit}
        />
        {
          /* 지출 목록 */
          // 데이터(변수, 함수)는 HTML 의 속성처럼 전달(상속)해줄 수 있다
        }
        <ExpenseListCC
          expenses={this.state.expenses}
          handleDelete={this.handleDelete}
          handleModify={this.handleModify}
        />
      </main>
    )
  }
}

export default App
