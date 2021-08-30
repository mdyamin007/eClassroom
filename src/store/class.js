const CLASS_CONNECTED = "classConnected";
const CLASS_DISCONNECTED = "classDisconnected";

export const classConnected = (classId) => ({
  type: CLASS_CONNECTED,
  payload: {
    classId,
  },
});

export const classDisconnected = () => ({
  type: CLASS_DISCONNECTED,
});

const classReducer = (state = {}, action) => {
  if (action.type === CLASS_CONNECTED) {
    return {
      ...state,
      class: action.payload.classId,
    };
  } else if (action.type === CLASS_DISCONNECTED) {
    return {};
  } else {
    return state;
  }
};

export default classReducer;
