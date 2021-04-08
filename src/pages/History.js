import React from 'react';

import Alert from '../components/Alert';
import TextMock from '../mock/texts.js';

export default function History() {
  return (
    <div
      style={{ width: 'auto', justifyContent: 'center', margin: '10px auto' }}
    >
      <Alert text={TextMock.WipText} />
    </div>
  );
}
