import React from 'react';
import './Alert.css';

import WarningIcon from '@material-ui/icons/Warning';

const Alert = ({ text }) => (
  <div className="Container">
    <WarningIcon className="Svg" />
    <p className="Text">{text}</p>
  </div>
);

export default Alert;
