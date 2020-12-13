const initialState = {
  dataStunting : [],
  dataLoading: true
}

export const ReducerStunting = (state=initialState, action) => {
  switch(action.type){
    case "FETCH_DATA":
      return{...state, dataStunting: action.payload}
    case "DATA_LOADING":
      return{...state, dataLoading: action.payload}
    default:
      return state
  }
}