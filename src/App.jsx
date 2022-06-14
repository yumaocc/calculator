import { useEffect } from 'react'
import { useState } from 'react'
import {Button} from 'antd'
import './app.css'
import 'antd/dist/antd.css';

function App() {
  const [outcome, setOutcome] = useState(0)
  const [num, setNum] = useState('')
  const [show,setShow] = useState(true)
  useEffect(() => {
    try {
      setOutcome(eval(num))
    } catch (error) {

    }
  }, [num])
  const clickNum = i => {
    setNum(num => num + i)
  }
  const clickKey = (key) => {
    if(key === '='){
      setShow(false)
    }
    switch (key) {
      case '+':
        setNum(num + '+')
        break;
      case '-':
        setNum(num + '-')
        break;
      case 'x':
        setNum(num + '*')
        break;
      case '÷':
        setNum(num + '/')
        break;
      case '退格':
        setNum(num.slice(0, num.length - 1))
        break;
      case '%':
        setNum((num) => '0.' + num)
        break;
      case '=':
        setNum(outcome)
        setOutcome((outcome)=> outcome = '')
        break;
      case 'c':
        setNum('')
        setOutcome('')
        break;
      default:
        break;
    }
  }
  return (
    <div className="container">
      <div className='header'>
        <input className='input' type="text" value={num} onChange={(e) => setNum(e.target.value)} />
        {show && <span>{outcome}</span>}
      </div>
      <div className='content'>
        <div className='keys'>
          <Button className='key_color' onClick={() => clickKey('c')}>c</Button>
          <button className='key_color' onClick={() => clickKey('÷')}>÷</button>
          <button className='key_color' onClick={() => clickKey('x')}>x</button>
          <button className='key_color' onClick={() => clickKey('退格')}>退格</button>
          <button onClick={() => clickNum(7)}>7</button>
          <button onClick={() => clickNum(8)}>8</button>
          <button onClick={() => clickNum(9)}>9</button>
          <button className='key_color' onClick={() => clickKey('-')}>-</button>
          <button onClick={() => clickNum(4)}>4</button>
          <button onClick={() => clickNum(5)}>5</button>
          <button onClick={() => clickNum(6)}>6</button>
          <button className='key_color' onClick={() => clickKey('+')}>+</button>
          <button onClick={() => clickNum(1)}>1</button>
          <button onClick={() => clickNum(2)}>2</button>
          <button onClick={() => clickNum(3)}>3</button>
          <button className='denghao' onClick={() => clickKey('=')}>=</button>
          <button onClick={() => clickKey('%')}>%</button>
          <button onClick={() => clickNum(0)}>0</button>
          <button onClick={() => clickNum('.')}>.</button>
        </div>
      </div>
    </div>
  )
}
export default App
