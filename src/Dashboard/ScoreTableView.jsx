import React from 'react';

const ScoreTableView = ({ scores = [], loading = false, error = null }) => {
  if (loading) {
    return (
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        textAlign: 'center',
        color: '#666',
        backgroundColor: '#f9f9f9',
        borderRadius: '4px'
      }}>
        Loading scores...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#ffebee',
        color: '#c62828',
        borderRadius: '4px',
        borderLeft: '4px solid #f44336'
      }}>
        {error}
      </div>
    );
  }

  if (!scores || scores.length === 0) {
    return (
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#e3f2fd',
        color: '#1565c0',
        borderRadius: '4px',
        borderLeft: '4px solid #2196f3'
      }}>
        No scores available yet. Add match results to see them here.
      </div>
    );
  }

  return (
    <div style={{ 
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ 
        marginTop: 0,
        marginBottom: '1.5rem',
        color: '#333',
        borderBottom: '2px solid #eee',
        paddingBottom: '0.75rem'
      }}>
        Match Results
      </h3>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          minWidth: '600px'
        }}>
          <thead>
            <tr style={{ 
              backgroundColor: '#f5f5f5',
              textAlign: 'left'
            }}>
              <th style={{ 
                padding: '0.75rem 1rem',
                border: '1px solid #e0e0e0',
                fontWeight: 600
              }}>Team</th>
              <th style={{ 
                padding: '0.75rem 1rem',
                border: '1px solid #e0e0e0',
                fontWeight: 600
              }}>Score</th>
              <th style={{ 
                padding: '0.75rem 1rem',
                border: '1px solid #e0e0e0',
                fontWeight: 600
              }}>Date</th>
              <th style={{ 
                padding: '0.75rem 1rem',
                border: '1px solid #e0e0e0',
                fontWeight: 600
              }}>Result</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr 
                key={score._id || index}
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9',
                  transition: 'background-color 0.2s'
                }}
              >
                <td style={{ 
                  padding: '0.75rem 1rem',
                  border: '1px solid #e0e0e0'
                }}>
                  {score.teamName || 'N/A'}
                </td>
                <td style={{ 
                  padding: '0.75rem 1rem',
                  border: '1px solid #e0e0e0',
                  fontWeight: 500
                }}>
                  {score.points || '0'}
                </td>
                <td style={{ 
                  padding: '0.75rem 1rem',
                  border: '1px solid #e0e0e0',
                  color: '#666'
                }}>
                  {score.date ? new Date(score.date).toLocaleDateString() : 'N/A'}
                </td>
                <td style={{ 
                  padding: '0.75rem 1rem',
                  border: '1px solid #e0e0e0'
                }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    backgroundColor: score.lastMatchWin ? '#e8f5e9' : '#ffebee',
                    color: score.lastMatchWin ? '#2e7d32' : '#c62828',
                    fontWeight: 500,
                    fontSize: '0.85rem'
                  }}>
                    {score.lastMatchWin ? 'Win' : 'Loss'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreTableView;
