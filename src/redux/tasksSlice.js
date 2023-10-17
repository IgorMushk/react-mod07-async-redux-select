import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder 
    .addCase(fetchTasks.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchTasks.fulfilled, (state, action) =>{
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(addTask.pending, state =>{
      state.isLoading = true;
      state.error = null;
    })
    .addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deleteTask.pending, state => {
      state.isLoading = true;
    })
    .addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    })
    .addCase(deleteTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(toggleCompleted.pending, state => {
      state.isLoading = true;
    })
    .addCase(toggleCompleted.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);      
    })
    .addCase(toggleCompleted.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;      
    })
  },
});

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchTasks.pending]: handlePending,
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchTasks.rejected]: handleRejected,
//     [addTask.pending]: handlePending,
//     [addTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addTask.rejected]: handleRejected,
//     [deleteTask.pending]: handlePending,
//     [deleteTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteTask.rejected]: handleRejected,
//     [toggleCompleted.pending]: handlePending,
//     [toggleCompleted.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1, action.payload);
//     },
//     [toggleCompleted.rejected]: handleRejected,
//   },
// });

export const tasksReducer = tasksSlice.reducer;

/////////////////////////////////////////////////////////////////////////////
// const tasksInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   // Добавляем обработку внешних экшенов
//   extraReducers: {
//     [fetchTasks.panding](state, action) {
//       state.isLoading = true;
//     },
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchTasks.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [addTask.pending](state) {
//       state.isLoading = true;
//     },
//     [addTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addTask.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [deleteTask.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteTask.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     [toggleCompleted.pending](state) {
//       state.isLoading = true;
//     },
//     [toggleCompleted.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1, action.payload);
//     },
//     [toggleCompleted.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//   },
// });

// export const tasksReduser = tasksSlice.reducer;
