import React from 'react';
import Device from './Device';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Devices = ({devices}) => {
    return (
        <>
            <table className="table table-dark container" style={{ marginTop: "30px" }}>
                <thead>
                    <tr className="text-info">
                        <th scope="col">Devices</th>
                        <th scope="col">Added On</th>
                        <th scope="col">Status</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {devices && devices.map((device)=> <Device device = {device} key = {device.id}/>)}
                </tbody>
            </table>
        </>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    const devices = state.firestore.ordered.devices;
    return {
        devices: devices,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
        {
            collection: "devices",
            orderBy: ["date", "desc"],
        },
    ])
)(Devices);