import { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const[person, setPerson] = useState(data || []);


  return(
    <main>
        <section className="container">
          <h3>{person.length} birthdays today</h3>
          <List people={person} />
          <button onClick={() => setPerson([])}>Click Me</button>
        </section>
    </main>
  )
  
}

export default App
