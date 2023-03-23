export const state = () => ({
  performance_id: "",
  performance_name: "",
  performance_sculptute: "",
  performance_location: "",
  performance_image: "",
  performance_type: "",
  performance_size: "",
  category_id: ""
})
export const mutations = {
  setId: (state, data) => {
    state.performance_id = data
  },
  setName: (state, data) => {
    state.performance_name = data
  },
  setSculptute: (state, data) => {
    state.performance_sculptute = data
  },
  setLocation: (state, data) => {
    state.performance_location = data
  },
  setImage: (state, data) => {
    state.performance_image = data
  },
  setType: (state, data) => {
    state.performance_type = data
  },
  setSize: (state, data) => {
    state.performance_size = data
  },
  setCategory: (state, data) => {
    state.category_id = data
  }
}
