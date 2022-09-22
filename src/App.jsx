import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css'

 export function App() {
  return (
    <>
    <Header/>
    <Post
     author="Raissa Campos" 
     content="Componente e Props"
     />
     <Post
     author="Marcos Ewbank" 
     content="Aprendendo Props"
     />
     </>
  ) 
}

