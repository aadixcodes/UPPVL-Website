import React, { useState } from 'react';
import { api } from './page';

const AddTeamForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Team name is required');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      console.log("Name form ::",name)
      const response = await api.post('/addTeam', { name });
      if (response.data && response.data.team) {
        setName('');
        onAdd();
      }
    } catch (err) {
      console.error('Error adding team:', err);
      setError(err.response?.data?.error || 'Failed to add team. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #eee', borderRadius: '4px' }}>
      <h3>Add New Team</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '0.5rem' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter team name"
            style={{
              padding: '0.5rem',
              width: '100%',
              maxWidth: '300px',
              marginRight: '0.5rem',
              border: `1px solid ${error ? 'red' : '#ccc'}`,
              borderRadius: '4px'
            }}
            disabled={isSubmitting}
          />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting || !name.trim()}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            opacity: (isSubmitting || !name.trim()) ? 0.6 : 1,
            pointerEvents: (isSubmitting || !name.trim()) ? 'none' : 'auto'
          }}
        >
          {isSubmitting ? 'Adding...' : 'Add Team'}
        </button>
        {error && (
          <div style={{ 
            color: 'red', 
            marginTop: '0.5rem',
            padding: '0.5rem',
            backgroundColor: '#ffebee',
            borderRadius: '4px',
            fontSize: '0.9em'
          }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddTeamForm;