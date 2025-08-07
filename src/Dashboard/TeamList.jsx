import React from 'react';

const TeamList = ({ teams = [], selectedTeam, onSelect, loading = false, error = null }) => {
  if (loading) {
    return (
      <div style={{ margin: '1rem 0', textAlign: 'center' }}>
        <p>Loading teams...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        margin: '1rem 0', 
        padding: '1rem',
        backgroundColor: '#ffebee',
        color: '#c62828',
        borderRadius: '4px',
        borderLeft: '4px solid #f44336'
      }}>
        <p>Error loading teams: {error}</p>
      </div>
    );
  }

  if (!teams || teams.length === 0) {
    return (
      <div style={{ 
        margin: '1rem 0', 
        padding: '1rem',
        backgroundColor: '#e3f2fd',
        color: '#1565c0',
        borderRadius: '4px',
        borderLeft: '4px solid #2196f3'
      }}>
        <p>No teams available. Add a team to get started.</p>
      </div>
    );
  }

  return (
    <div style={{ 
      marginBottom: '2rem',
      padding: '1rem',
      border: '1px solid #eee',
      borderRadius: '4px'
    }}>
      <h3>Team Selection</h3>
      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="team-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
          Select a team to manage:
        </label>
        <select
          id="team-select"
          value={selectedTeam}
          onChange={(e) => onSelect(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: 'white',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
          disabled={loading}
        >
          <option value="">-- Select a team --</option>
          {teams.map((team) => (
            <option key={team._id} value={team._id}>
              {team.name}
            </option>
          ))}
        </select>
        
        {selectedTeam && (
          <div style={{ 
            marginTop: '1rem',
            padding: '0.75rem',
            backgroundColor: '#e8f5e9',
            color: '#2e7d32',
            borderRadius: '4px',
            borderLeft: '4px solid #4caf50',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>✓</span>
            <span>Team selected: <strong>{teams.find(t => t._id === selectedTeam)?.name}</strong></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamList;
