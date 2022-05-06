import { useState } from 'react';
import './App.css';
import EditorMain from './components/EditorMain';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <EditorMain />
      </div>
    </div>
  )
}

export default App
