import create from 'zustand'

interface Post {
    id: number
    title: string
    body: string
}

interface CounterState {
    count: number
    title: string
    posts: Post[]
    increment: (value: number) => void
    getPost: () => Promise<void>
}

export const useCounterStore = create<CounterState>(set => ({
    count: 30,
    title: 'Cuenta:',
    posts: [],
    increment: (value: number) => set(state => ({
        count: state.count + value
    })),
    getPost: async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let post = await res.json()
        console.log(post)
    }
}))