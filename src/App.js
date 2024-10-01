/** NOTE: 클래스형 컴포넌트
 * extends 키워드를 통해 리액트의 Component 속성을 상속한다
 */
import { Component } from 'react'
import { ExpenseForm, ExpenseList } from 'components'
import './App.css'

class App extends Component {
  render() { // UI 작성 부분
    return (
      <main>
        { /* 지출 등록 */ }
        <ExpenseForm />
        { /* 지출 목록 */ }
        <ExpenseList />
      </main>
    )
  }
}

export default App