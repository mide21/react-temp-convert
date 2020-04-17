import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';


class Temperature extends React.Component {
    render() {
        return (
            <div className="param">
                <p>Celsius</p>
                <FontAwesomeIcon className="icon1" icon={faLongArrowAltLeft} />
                <FontAwesomeIcon className="icon2" icon={faLongArrowAltRight} />
                <p>Fahrenheit</p>
            </div>
        );
    }
}

export default Temperature;