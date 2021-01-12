export const addDevice = device => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();     
        firestore
            .collection("devices")
            .add({
                ...device,
                date: new Date()
            })
            .then(() => {
                dispatch({
                    type: "ADD_DEVICE",
                    device
                });
            })
            .catch(err => {
                dispatch({
                    type: "ADD_DEVICE_ERR",
                    err
                });
            });
    };
};

export const removeDevice = device => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("devices")
            .doc(device.id)
            .delete()
            .then(() => {
                dispatch({
                    type: "REMOVE_DEVICE"
                });
            })
            .catch(err => {
                dispatch({
                    type: "REMOVE_DEVICE_ERR",
                    err
                });
            });
    };
};

export const toggleChecked = (device) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
  
      firestore
        .collection("devices")
        .doc(device.id)
        .set(
          {
            ...device,
            checked: !device.checked,
          },
          { merge: true }
        )
        .then(() => {
          dispatch({
            type: "TOGGLE_CHECKED",
            device,
          });
        })
        .catch((err) => {
          dispatch({
            type: "TOGGLE_CHECKED_ERR",
            err,
          });
        });
    };
  };