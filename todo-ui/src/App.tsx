import { useEffect, useState } from 'react'
import './App.css'

type Todo = {
  id: number
  title: string
  description?: string | null
  isCompleted: boolean
  createdAt: string
  updatedAt?: string | null
}

const API_URL = 'http://localhost:5041/api/todos'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchTodos = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error('Unable to load tasks')
      }
      const data = (await response.json()) as Todo[]
      setTodos(data)
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void fetchTodos()
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!title.trim()) {
      setError('Title is required.')
      return
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), description: description.trim() || null }),
      })

      if (!response.ok) {
        throw new Error('The task could not be created.')
      }

      setTitle('')
      setDescription('')
      setError('')
      await fetchTodos()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
    }
  }

  const toggleTodo = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}/toggle-complete`, { method: 'PATCH' })
      if (!response.ok) {
        throw new Error('Unable to change task status.')
      }

      await fetchTodos()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (!response.ok) {
        throw new Error('Unable to delete task.')
      }

      await fetchTodos()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
    }
  }

  return (
    <main className="app-shell">
      <section className="todo-panel">
        <header className="header">
          <div>
            <p className="eyebrow">Demo</p>
            <h1>Todo List</h1>
          </div>
          <span className="badge">{todos.length} tasks</span>
        </header>

        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Add a task title"
            aria-label="Task title"
          />
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Optional notes"
            aria-label="Task description"
            rows={3}
          />
          <button type="submit" className="primary-button">Add task</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <div className="todo-list">
          {loading ? (
            <p>Loading tasks...</p>
          ) : todos.length === 0 ? (
            <p className="empty-state">No tasks yet. Add the first one.</p>
          ) : (
            todos.map((todo) => (
              <article key={todo.id} className={`todo-item ${todo.isCompleted ? 'done' : ''}`}>
                <label className="todo-check">
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => void toggleTodo(todo.id)}
                  />
                  <span>{todo.title}</span>
                </label>

                {todo.description && <p className="todo-description">{todo.description}</p>}

                <div className="todo-actions">
                  <button type="button" className="secondary-button" onClick={() => void toggleTodo(todo.id)}>
                    {todo.isCompleted ? 'Mark active' : 'Mark done'}
                  </button>
                  <button type="button" className="danger-button" onClick={() => void deleteTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  )
}

export default App
