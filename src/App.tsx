import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// 获取接口数据
const fetchServerlessAPI = async () => {
  const url = 'https://my-typescript-worker.wangleixxxy.workers.dev'
  const res = await fetch(url, {
    // mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  })
  return res.json()
}


function App() {
  const [time, setTime] = useState('')
  const getTime = async () => {
    const response = await fetchServerlessAPI()
    setTime(response.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>获取的数据是：{ time }</p>
        <button onClick={getTime}>点击获取</button>
      </header>
    </div>
  );
}

export default App;
