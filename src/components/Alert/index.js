import React from 'react';
import './Alert.css';

import WarningIcon from '@material-ui/icons/Warning';

const Alert = () => (
    <div className="Container">
        <WarningIcon className="Svg"/>
        <p className="Text">
            Nem todos os jogos possuem canais e/ou cargos específicos. Em caso de dúvida, contate um administrador.
        </p>
    </div>
)

export default Alert;