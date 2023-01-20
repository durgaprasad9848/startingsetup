import React,{useMemo} from 'react'


const DemoOutput=(props)=> {

const {items,state} = props;


  const sortedList = useMemo(()=>{
    console.log("Items sorted");
    if(state ==="Assending")
    {
    return  items.sort((a,b) => a - b);
    }else{
    return items.sort((a,b) => b - a);
    }
  },[items,state]);
  console.log('DemoList RUNNING'); 
  
  return (
   <div className="list">
    <h2>{props.title}</h2>
    <ul>
      {sortedList.map((item)=>(
        <li key={item}>{item}</li>
      ))}
    </ul>

   </div>
  );
}

export default React.memo( DemoOutput );