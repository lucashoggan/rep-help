import { useState } from 'react'


function App() {
  const [w1, setw1] = useState(1)
  const [r1, setr1] = useState(1)
  const [w2, setw2] = useState(1)
  const [rm1, setrm1] = useState(1)
  const [r2, setr2] = useState(1)
  const [rm2, setrm2] = useState(1)

  const [rounding, setRounding] = useState(2.5)


  return (
    <> 
      <h1>Rep Help</h1>
      <div className="tb-row">
        <div className="tb-col"><h2>Rounding:</h2></div>
        <div className="tb-col"><input type="number" value={rounding} onChange={(e) => setRounding(e.target.value)}/></div>
      </div>
      <div className="tb-row">
        <div className="tb-col"><h2>Weight</h2></div>
        <div className="tb-col"><h2>Reps</h2></div>
        <div className="tb-col"><h2>1RM</h2></div>
      </div> 
      <div className="tb-row">
        <div className="tb-col"><input type="number" value={w1} onChange={(e) => setw1(e.target.value)} /></div>
        <div className="tb-col"><input type="number" value={r1} onChange={(e) => setr1(e.target.value)} /></div>
        <div className="tb-col gb"><p>{Math.round(Number(w1)/(1.0278-(0.0278*Number(r1)))/rounding)*rounding}</p></div> 
      </div>
      <div className="tb-row"> {/* 
      rm=w/(1.0278-(0.0278*r)) 
      w/rm = 1.0278-(0.0278*r)
      w = (1.0278-(0.0278*r)) * rm
      0.0278r = 1.0278-w/rm
      r = (1.0278-w/rm)/0.0278
      */}
        <div className="tb-col"><input type="number" value={w2} onChange={(e) => setw2(e.target.value)}/></div>
        <div className="tb-col gb"><p>{Math.floor((1.0278-(Number(w2)/Number(rm1)))/0.0278)}</p></div>
        <div className="tb-col"><input type="number" value={rm1} onChange={(e) => setrm1(e.target.value)}/></div>
      </div>
      <div className="tb-row">
        <div className="tb-col gb"><p>{Math.round((1.0278-(0.0278*Number(r2)))*rm2)}</p></div>  
        <div className="tb-col"><input type="number" value={r2} onChange={(e) => set(e.target.value)} /></div>
        <div className="tb-col"><input type="number" value={rm2} onChange={(e) => set(e.target.value)} /></div>
      </div>
      
    </>
  )
}

export default App
