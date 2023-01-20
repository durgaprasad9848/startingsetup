import React,{useState,useCallback} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from'./components/Demo/DemoOutput';
import './App.css';

function App() {
  const[listTitle,setListTitle] = useState('Assending');

  console.log('APP RUNNING');

  const changeTitleHandler =useCallback( () => {
    if(listTitle === "Assending")
    {
    setListTitle('Dessending');
    }
    else{
      setListTitle('Assending')
    }
  },[listTitle]);

  return (
    <div className="app">
 
      <DemoOutput title = {"List of Numbers"} items = {[5,3,1,10,9]} state = {listTitle} />
      <Button onClick = {changeTitleHandler}>{listTitle}</Button>

    </div>
  );
}

export default App;
