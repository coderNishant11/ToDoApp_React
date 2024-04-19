
import { useState } from 'react'
import './App.css'
import ToDoContainer from './components/ToDoContainer'
import ToDoHeading from './components/ToDoHeading'
//import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoInput from './components/ToDoInput'
import { useEffect } from 'react'



function App() {
  let localItems = JSON.parse(localStorage.getItem('localItems')) || []
  
  const [items,setItems]=useState(localItems)
  function addItem(name, date) {
    
    setItems([{ id: new Date().getSeconds(), itemName: name, itemDate: date }, ...items] )
    console.log(items)
  }

  useEffect(() => {
    localStorage.setItem('localItems',JSON.stringify(items))
  },[items])


  function removeItem(id) {
    console.log(id)
    let newItems=items.filter(item => 
      item.id != id)
    setItems(newItems)
 
  }

  return (
    <div className="my-container">
      <ToDoHeading class='lead' />
      <ToDoInput addItem={addItem }/>
      {items.length?<ToDoContainer items={items} removeItem={removeItem} />:<h1>No Work available</h1>}
    </div>
  
  )
}

export default App
