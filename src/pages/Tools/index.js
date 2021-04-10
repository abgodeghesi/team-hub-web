import React, { useState } from 'react';

function Tools() {
  const [candidates, setCandidates] = useState([]);
  const [candidateName, setCandidateName] = useState('');

  const addCandidate = e => {
    e.preventDefault();
    setCandidates([
      ...candidates,
      {
        id: candidates.length,
        name: candidateName,
      },
    ]);
    setCandidateName('');
  };

  return (
    <section style={{ paddingLeft: '140px' }}>
      <div>
        <h1 style={{ color: 'white' }}>5x5 Da Zuera Simulator</h1>
        <form onSubmit={addCandidate}>
          <label style={{ color: 'white' }} htmlFor="candidate">
            Candidato
          </label>
          <input
            type="text"
            name="candidate"
            value={candidateName}
            onInput={e => setCandidateName(e.target.value)}
          />
        </form>
      </div>
      <div>
        <h1 style={{ color: 'white' }}>Candidatos para sorteio</h1>
        <ul>
          {candidates.map(item => (
            <li style={{ color: 'white' }} key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tools;
