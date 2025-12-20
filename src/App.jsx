import { React, useState} from 'react';
import './App.css'
import {Button} from '@/components/ui/button'

function App() {
  const [test, setTest] = useState(0);

  const clicking = () => {
    setTest(test - 1);
  }
  return (
    <>
    <div className='bg-accent'><Button onClick={clicking}>Garo cha hai</Button></div>
    <h1>{test}</h1>
    </>
  )
}

export default App
