import { create } from 'zustand'

export const useTodoStore = create((set) => ({
  // CREATE STATE = what is in the store (initial state): Array of tasks, if task is completed, remove task option
  task: [],
  isCompleted: false,
  removeTask: false,

  // SET STATE = change what is in the store
  // Add task
  addTask: (newTask) => set((state) => ({ task: [...state.task, { newTask, isCompleted: false, id: Date.now()}]
  })),

  // Remove task
  removeTask: (id) => set((state) => ({ task: state.task.filter(task => task.id !== id) })),

  // Toggle between completed/not completed
  toggleIsCompleted: (id) => set((state) => ({ task: state.task.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted}: task)})),
 
}))

