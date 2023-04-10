import './App.css';
import React, { useState } from 'react';

function App() {
  let istyle = {
    'font-size':'25px'
  }
  const [todolist, setTodolist] = useState([])
  const [id , setId] = useState(0)
  const [impfilter, setImpfilter] = useState("전체")

  const ListAdd = ()=>{
    const contents = document.getElementById('contents').value
    const date = document.getElementById('date').value
    const importance = document.getElementById('importance').value
    if(contents && date){
      setTodolist([...todolist, {id, contents, date, importance}])
      setId(id+1)
    }
    else{
      console.log("입력")
    }
  }
  
  const ListRemove = (removeid) => {
    return () => {
			setTodolist(todolist.filter((list) => list.id !== removeid));
    };
	};

  return (
    <body>
      <div className="Title">
        <h1 style={{ margin: '10px', 'font-size': '60px' }} align='left'>To-Do List</h1>
      </div>
      <div className='Input'>
        <div className='Inputs'>
          <h2>내용</h2>
          <input style = {istyle} type="text" id="contents" name="contents" required
            minlength="1" size="7"></input>
        </div>
        <div className='Inputs'>
          <h2>날짜</h2>
          <input style = {istyle} type="date" id="date" name="date" required ></input>
        </div>
        <div className='Inputs'>
          <h2>중요도</h2>
          <select style = {istyle} id="importance" name="importance">
            <option value="매우 높음">매우 높음</option>
            <option value="높음">높음</option>
            <option value="중간">중간</option>
            <option value="낮음">낮음</option>
            <option value="매우 낮음">매우 낮음</option>
          </select>
        </div>
        <div className='Inputs'>
          <h2>추가하기</h2>
          <button style = {istyle} type="submit" id="submit" name="submit" onClick={ ListAdd }>추가하기</button>
        </div>
      </div>
      <div className='Filter'>
        <h2 style={{"font-size":"20px", margin:'0px', 'marginLeft':"15px", 'marginRight':"15px"}}>중요도 필터</h2>
        <select style = {{"font-size":"20px"}} id="importancefilter" name="importancefilter" value={"전체"} onChange={(e)=>{setImpfilter(e.target.value)}} >
          <option id = "전체" value="전체">전체</option>
          <option id = "매우 높음" value="매우 높음">매우 높음</option>
          <option id = "높음" value="높음">높음</option>
          <option id = "중간" value="중간">중간</option>
          <option id = "낮음" value="낮음">낮음</option>
          <option id = "매우 낮음" value="매우 낮음">매우 낮음</option>
        </select>

      </div>
      <div className = "Todolist">
        {todolist.map((list)=>{
          if(impfilter === '전체' || impfilter===list.importance){
          return (<div className = 'List'> 
          <p style={{"font-size":"37px", 'marginRight':'20px'}}>▶{list.contents}</p>
          <br></br>
          <div className = 'Properties' text-align='right' style={{"marginLeft":'auto' , 'marginRight':'0px'}}>
          <p style={{"font-size":"25px", margin:'12px'}}>Due : {list.date}</p>
          <p style={{"font-size":"25px", margin:'12px'}}>중요도 : {list.importance}</p>
          </div>
          <br></br>
          <button style={{'marginRight':'3px', 'font-size':'20px'}} onClick={ ListRemove(list.id) }>삭제하기</button>
          </div>);}
        })}
      </div>
    </body>
  );
}
export default App;