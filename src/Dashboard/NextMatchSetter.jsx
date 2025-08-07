import React, { useState } from 'react';
import { api } from './page';

const NextMatchSetter = ({ team, onUpdate }) => {
  const [nextMatch, setNextMatch] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  if (!team) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!nextMatch.trim()) {
      setMessage({ text: 'Please enter next match details', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await api.put(`/updateScore/${team}`, { nextMatch });
      
      setMessage({ 
        text: `Next match for ${team} updated successfully`, 
        type: 'success' 
      });
      
      setNextMatch('');
      onUpdate();
    } catch (error) {
      console.error('Error updating next match:', error);
      setMessage({ 
        text: error.response?.data?.error || 'Failed to update next match', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ 
      marginBottom: '2rem', 
      padding: '1rem', 
      border: '1px solid #eee', 
      borderRadius: '4px' 
    }}>
      <h3>Set Next Match</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Team: {team}</p>
          
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Enter next match details (e.g., vs Team B, 2023-08-07)"
              value={nextMatch}
              onChange={(e) => {
                setNextMatch(e.target.value);
                if (message.text) setMessage({ text: '', type: '' });
              }}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '0.5rem',
                border: `1px solid ${message.type === 'error' ? '#f44336' : '#ccc'}`,
                borderRadius: '4px'
              }}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting || !nextMatch.trim()}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: '#9c27b0',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            opacity: (isSubmitting || !nextMatch.trim()) ? 0.6 : 1,
            pointerEvents: (isSubmitting || !nextMatch.trim()) ? 'none' : 'auto'
          }}
        >
          {isSubmitting ? 'Updating...' : 'Update Next Match'}
        </button>

        {message.text && (
          <div style={{
            marginTop: '1rem',
            padding: '0.75rem',
            borderRadius: '4px',
            backgroundColor: message.type === 'error' ? '#ffebee' : '#e8f5e9',
            color: message.type === 'error' ? '#c62828' : '#2e7d32',
            borderLeft: `4px solid ${message.type === 'error' ? '#f44336' : '#4caf50'}`
          }}>
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
};

export default NextMatchSetter;