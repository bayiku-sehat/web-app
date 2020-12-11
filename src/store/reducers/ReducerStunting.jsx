const initialState = {
  dataStunting : []
}

export const ReducerStunting = (state=initialState, action) => {
  switch(action.type){
    case "FETCH_DATA":
      return{...state, dataStunting: action.payload}
    default:
      return state
  }
}