import { useState } from "react";

function App() {
  const [color, setColor] = useState("black"); 

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=> setColor("red")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>red</button>
            <button onClick={()=> setColor("purple")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>purple</button>
            <button onClick={()=> setColor("yellow")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}}>yellow</button>
            <button onClick={()=> setColor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>green</button>
            <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>blue</button>
            <button onClick={()=> setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>black</button>
            <button onClick={()=> setColor("grey")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}}>light grey</button>
            <button onClick={()=> setColor("MediumSeaGreen")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "MediumSeaGreen"}}>MediumSeaGreen</button>
            <button onClick={()=> setColor("lightBlue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "lightBlue"}}>lightBlue</button>
            <button onClick={()=> setColor("violet")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "violet"}}>violet</button>
            <button onClick={()=> setColor("orange")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>orange</button>
            <button onClick={()=> setColor("lavender")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "lavender"}}>lavender</button>
            <button onClick={()=> setColor("lightPink")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "lightPink"}}>lightPink</button>
            <button onClick={()=> setColor("white")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>white</button>
            </div>
        </div>
      </div>
  );
}

export default App;
