import React from 'react';
import moment from 'moment';
import { removeDevice } from '../../actions/deviceActions';
import { connect } from 'react-redux';
import Check from './Check';
import { toggleChecked } from '../../actions/deviceActions';

const Device = ({ device, removeDevice, toggleChecked }) => {

    const handleRemove = (device) => {
        removeDevice(device);
    };

    const handleCheck = (device) => {
        toggleChecked(device);
    }

    return (
        <>
            <tr>
                <th>{device.device}</th>
                <td>{moment(device.date.toDate()).calendar()}</td>
                <td>
                    <Check onClick={() => handleCheck(device)} checked={device.checked} />
                </td>
                <td>
                    <span
                        className="material-icons text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRemove(device)}
                    >
                        delete
                    </span>
                </td>
            </tr>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        removeDevice: device => dispatch(removeDevice(device)),
        toggleChecked: device => dispatch(toggleChecked(device))
    };
};

export default connect(null, mapDispatchToProps)(Device);