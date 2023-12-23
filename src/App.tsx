import { useCounterStore } from "./store/counterStore"
import shallow from 'zustand/shallow'

const App = () => {

  const { title, count } = useCounterStore((state) => ({
    title: state.title,
    count: state.count
  }), shallow)

  const { increment, getPost } = useCounterStore()

  getPost()

  return (
    <div>
      {'\n' + title}
      {'\n' + count}
      <button onClick={
        () => increment(10)
      }>Incrementar por 10</button>
    </div>
  )
}

export default App
