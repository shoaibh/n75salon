import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BookService } from './components/book-service'
import { WhyChooseUs} from './components/why-choose-us'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookService />
      <WhyChooseUs/>
    </>
  )
}

export default App
