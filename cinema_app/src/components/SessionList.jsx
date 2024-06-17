import React from 'react';
import SessionCard from './SessionCard';

const SessionList = ({ sessions, loading }) => {
  return (
    <div className="session-list">
      {loading && <p>Chargement en cours...</p>}
      {!loading && sessions.length === 0 && <p>Aucune séance trouvée.</p>}
      {sessions.map((session) => (
        <SessionCard key={session._id} session={session} />
      ))}
    </div>
  );
};

export default SessionList;
