import React from 'react'
import Quiz from './components/Quiz'
import Home from "./components/Home"
import Result from "./components/Result"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </div>
  )
}

export default App