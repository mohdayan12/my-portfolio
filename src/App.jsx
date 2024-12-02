import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skill/Skills";
import Project from "./components/Project/Project";
import Contacts from "./components/Contact/Contacts";



const App = () => {
 
  return (
   <div className="absolute top-0 z-[-2] min-h-screen w-full bg-gradient-to-t from-slate-900 to-slate-950">
    
    <Navbar/> 
    <Home/>
    <Skills/>
    <Project/> 
    <Contacts/>
    
   </div>
   

   
  
   
   
   
  )
}

export default App
