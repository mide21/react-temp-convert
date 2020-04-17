import React from 'react';

import PropTypes from 'prop-types';

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <input placeholder={scaleNames[scale]} value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }

}

TemperatureInput.propTypes = {
    temperature: PropTypes.number
};

export default TemperatureInput;