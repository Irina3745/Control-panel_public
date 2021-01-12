import React from 'react';
import AddDevice from 'components/devices/AddDevice';
import Devices from 'components/devices/Devices';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Dashboard = ({uid}) => {
    if (!uid) return <Redirect to ="/signin"/>
    return (
        <>
            <AddDevice />
            <Devices />
        </>
    );
};

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
};

export default connect (mapStateToProps)(Dashboard);