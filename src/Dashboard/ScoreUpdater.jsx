import React, { useState } from 'react';
import { api } from './page';

const ScoreUpdater = ({ team, onUpdate }) => {
  const [isWin, setIsWin] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  if (!team) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await api.post('/addScore', { 
        teamname: team, 
        isWin 
      });
      
      setMessage({ 
        text: `Successfully recorded ${isWin ? 'win' : 'loss'} for ${team}`, 
        type: 'success' 
      });
      onUpdate();
    } catch (error) {
      console.error('Error updating score:', error);
      setMessage({ 
        text: error.response?.data?.error || 'Failed to update score', 
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
      <h3>Update Match Result</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Team: {team}</p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            marginBottom: '1rem',
            alignItems: 'center'
          }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="radio"
                checked={isWin}
                onChange={() => setIsWin(true)}
                style={{ marginRight: '0.5rem' }}
                disabled={isSubmitting}
              />
              <span>Win</span>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="radio"
                checked={!isWin}
                onChange={() => setIsWin(false)}
                style={{ marginRight: '0.5rem' }}
                disabled={isSubmitting}
              />
              <span>Loss</span>
            </label>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            opacity: isSubmitting ? 0.6 : 1,
            pointerEvents: isSubmitting ? 'none' : 'auto'
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Result'}
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

export default ScoreUpdater;