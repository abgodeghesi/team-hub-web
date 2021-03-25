import React from 'react';

import Alert from '../components/Alert';
import TextMock from '../mock/texts.js';

export default function History() {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100',}}>
            <Alert text={TextMock.WipText} />
        </div>
    )
};