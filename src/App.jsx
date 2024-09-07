import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import RenderData from './components/RenderData'
import ConditionalRendering from './components/ConditionalRendering'
import Button from './components/Button'
import ParentCounter from './components/ParentCounter'
import Form from './components/NameForm'
import FormikForm from './components/FormikForm'
import ToDoList from './components/TodoList'
import UseEffectVariations from './components/UseEffectVariations'
import ReactRouterDOM from './components/ReactRouterDOM'


function App() {  
  const [count, setCount] = useState(0)
  let isLoggedIn = false;

  return (
    <>
      {/* <h1>hello</h1> */}
      {/* <FirstComponent name="Manish" age="20" />
      <FirstComponent name="Manoj" age="43"/>
      <FirstComponent name="Pavan" age="35" />
      <RenderData />
      <ConditionalRendering isLoggedIn={isLoggedIn} userName="Ramesh" />
      <Button/> */}
      {/* <ParentCounter /> */}
      {/* <Form/> */}
      {/* <FormikForm/> */}
      <ToDoList/>
      {/* <UseEffectVariations/> */}
      {/* {<ReactRouterDOM/>} */}
    </>
    
  )
}

export default App
