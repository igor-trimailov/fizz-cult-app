export const selectRoutines = (state) => state.routines.routines
export const selectRoutinesStatus = (state) => state.routines.status
export const selectCurrentRoutineId = (state) => state.routines.currentRoutineId
export const selectExercises = (state) =>
  (state.exercises || [])[state.routines.currentRoutineId]
