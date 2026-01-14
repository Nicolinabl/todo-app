import { create } from 'zustand'

export const useTodoStore = create((set) => ({
  // CREATE STATE = what is in the store (initial state): Array of tasks, if task is completed, remove task 
  task: ['Build app', 'Do some coding', 'Take a break', 'practice react'],
  isCompleted: false,
  removeTask: false,

  // SET STATE = change what is in the store
  // Add task
  setTask: (newTask) => set({ task: newTask}),

  // Toggle between completed/not completed
  toggleIsCompleted: () => set((state) => ({
    isCompleted: !state.isCompleted
  })),

  // Remove task
  // removeTask: () => set((state) => ({
  //   removeTask: state.task.remove
  // }))
 
}))

