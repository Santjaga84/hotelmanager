import ACTION_TYPES from './../../constants/actionTypes'

const initialState = [];

//reducer
export default function roomsReducer(state = initialState,{type, payload}){
  switch(type){
    
    case ACTION_TYPES.GET_ROOMS_SUCCESS:
            
        if(payload === null){
          return [...state,...payload]         
        }else{
          return payload
        }
      
    
    case ACTION_TYPES.UPDATE_ROOM_SUCCESS:
    {
      const newStateUpdate = []
      state.forEach((item) => {
        if(payload.id === item.id){
          newStateUpdate.push({...item,...payload.data})
        }else{
          newStateUpdate.push(item)
        }
      })
      
      return newStateUpdate;
  }

  case ACTION_TYPES.LOGOUT:
    return initialState;
  default:
    return state;
  }
}
