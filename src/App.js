import './App.css';
import Slides from './components/Slides';
import { useState } from 'react';


function App() {
  const [index, setIndex] = useState(0)
  //const slideArr = [1,2,3,4,5]
  const slideArr = [
    {
      title: "Today's work Plan",
      desc: "Slide of Today's whole day work plan"
    },
    {
      title: "Breakfast",
      desc: "Will have breakfast at 8 am"
    },
    {
      title: "Lunch",
      desc: "Will have lunch at 1 pm"
    },
    {
      title: "All tasks Done!",
      desc: "Slide of Today's all tasks done"
    }
  ]

  const handleReset = () => {
    if(index === 0) return
    else setIndex(0)   
  }

  const handlePrev = () => {
    if(index === 0) return
    else setIndex(index-1)
   
  }

  const handleNext = () => {
    if(index === slideArr.length-1) return
    setIndex(index+1)
    
  }
  console.log("index",index)

  return (
    <div className="App">
      <h1 style={{color:'green'}}>SlideShow App</h1>
      <div className='buttons'>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      </div>
      <Slides index = {index} slideArr = {slideArr}/>
      {/*<Slides />*/}
    </div>
  );
}

export default App;
