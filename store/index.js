// export default () => ({
//   list: [],
//   default: null,
//   loggedIn: false
// })

// export const state = () => ({
//   profile: null,
// });

// export const getters = {
//   authenticated(state) {
//     return state.profile !== null;
//   },
// };

// export const mutations = {
//   setProfile(state, {
//     profile
//   }) {
//     state.profile = profile;
//   },
// };
export const state = () => ({
  tasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{
      content: task,
      done: false
    }, ...state.tasks];
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  }
}
