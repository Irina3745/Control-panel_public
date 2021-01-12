import { toast} from 'react-toastify';

const deviceReducer = (state ={}, action) =>{
    switch(action.type){
        case "ADD_DEVICE":{
            toast.success("Added a device")
            return state
        }

        case "ADD_DEVICE_ERR":{
            toast.error("An error occurred")
            return state
        }
        case "REMOVE_DEVICE":{
            toast.warn("A device was removed...")
            return state
        }

        case "REMOVE_DEVICE_ERR":{
            toast.error("A device remove error occured...")
            return state
        }

        case "TOGGLE_CHECKED": {
            toast.info("A device status changed...");
            return state;
          }
          case "TOGGLE_CHECKED_ERR": {
            toast.error("A device status change error occured...");
            return state;
          }
          
        default: return state;
    }
}

export default deviceReducer;