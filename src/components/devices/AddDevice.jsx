import React, { Component } from 'react';
import { addDevice } from '../../actions/deviceActions';
import { connect } from "react-redux";

class AddDevice extends Component {
    state = {
        device: " ",
        checked: "false"
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addDevice(this.state);
        document.getElementById("addDeviceForm").reset();
        console.log(this.state);
    };

    render() {
        return (
            <>
                <form
                    id="addDeviceForm"
                    className="container"
                    autoComplete="off"
                    style={{ marginTop: "38px" }}
                    onSubmit={this.handleSubmit}
                >
                    <legend> {" "}<h4> </h4> </legend>
                    <div className="form-group">
                        <label htmlFor="device" className ="text-light">Add a device:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="device"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary"> Add </button>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDevice: device => dispatch(addDevice(device))
    };
};

export default connect(null, mapDispatchToProps)(AddDevice);