import  styles from './App.module.css'


import { Header } from "./components/Header"

function App() {

  return (
    <div className={styles.container}>
      <main>
          <Header />
      </main>
    </div>
  )
}

export default App
