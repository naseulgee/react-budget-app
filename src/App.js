/** NOTE: 클래스형 컴포넌트
 * extends 키워드를 통해 리액트의 Component 속성을 상속한다
 */
import { Component } from 'react'
import { ExpenseForm, ExpenseList } from 'components'
import './App.css'

class App extends Component {
  initExpenses = [
    { id: 1, charge: '렌트비', amount: 1600 },
    { id: 2, charge: '교통비', amount: 400 },
    { id: 3, charge: '식비', amount: 1200 }
  ]

  render() {
    // UI 작성 부분
    return (
      <main>
        {/* 지출 등록 */}
        <ExpenseForm />
        {/* 지출 목록 */}
        <ExpenseList expenses={this.initExpenses} />
      </main>
    )
  }
}

export default App
