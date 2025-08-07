import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TeamList from './TeamList';
import AddTeamForm from './AddTeamform';
import ScoreUpdater from './ScoreUpdater';
import NextMatchSetter from './NextMatchSetter';
import ScoreTableView from './ScoreTableView';
import { useNavigate } from 'react-router-dom';

// Create axios instance with base URL
export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Session timeout in minutes
const SESSION_TIMEOUT = process.env.REACT_APP_TIMELOGIN || 10;

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === process.env.REACT_APP_ADMINUSERNAME && 
        password === process.env.REACT_APP_ADMINPASSWORD) {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Admin Login</h2>
        {error && (
          <div style={{
            color: 'white',
            backgroundColor: '#ff4444',
            padding: '0.75rem',
            borderRadius: '4px',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500'
            }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#0d6efd',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0b5ed7'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0d6efd'}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionTimer, setSessionTimer] = useState(null);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scoresLoading, setScoresLoading] = useState(false);
  const [scoresError, setScoresError] = useState(null);
  const navigate = useNavigate();

  // Fetch teams from backend
  const fetchTeams = async () => {
    try {
      const response = await api.get('/teams');
      setTeams(Array.isArray(response.data) ? response.data : []);
      setError(null);
    } catch (err) {
      console.error('Error fetching teams:', err);
      setError(err.response?.data?.error || 'Failed to load teams');
    } finally {
      setLoading(false);
    }
  };

  // Fetch scores when selected team changes
  const fetchScores = async () => {
    if (!selectedTeam) return;
    setScoresLoading(true);
    try {
      // In a real app: const response = await api.get(`/scores?teamId=${selectedTeam}`);
      setScores([]); // Placeholder for now
    } catch (err) {
      console.error('Error fetching scores:', err);
      setScoresError('Failed to load scores');
    } finally {
      setScoresLoading(false);
    }
  };

  // Refresh data
  const triggerRefresh = () => {
    setLoading(true);
    fetchTeams();
    if (selectedTeam) fetchScores();
  };

  const startSessionTimer = () => {
    // Clear any existing timer
    if (sessionTimer) {
      clearTimeout(sessionTimer);
    }

    // Set session expiry time (SESSION_TIMEOUT minutes from now)
    const expiryTime = new Date().getTime() + (SESSION_TIMEOUT * 60 * 1000);
    localStorage.setItem('sessionExpiry', expiryTime.toString());

    // Set timer to log out when session expires
    const timer = setTimeout(() => {
      handleLogout();
    }, SESSION_TIMEOUT * 60 * 1000);

    setSessionTimer(timer);
  };

  const handleLogin = () => {
    startSessionTimer();
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear session
    localStorage.removeItem('sessionExpiry');
    if (sessionTimer) {
      clearTimeout(sessionTimer);
    }
    setIsAuthenticated(false);
    // Optionally navigate to home or just show login form
    // navigate('/');
  };

  // Check for existing session on component mount
  useEffect(() => {
    const sessionExpiry = localStorage.getItem('sessionExpiry');
    if (sessionExpiry && new Date().getTime() < parseInt(sessionExpiry)) {
      // Session is still valid
      setIsAuthenticated(true);
      startSessionTimer();
    } else {
      // Clear any expired session
      localStorage.removeItem('sessionExpiry');
    }
  }, []);

  // Initial data fetch
  useEffect(() => { 
    if (isAuthenticated) {
      fetchTeams(); 
    }
  }, [isAuthenticated]);
  
  // Update scores when team changes
  useEffect(() => {
    if (isAuthenticated && selectedTeam) {
      fetchScores();
    } else {
      setScores([]);
    }
  }, [selectedTeam, isAuthenticated]);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ 
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ margin: '0 0 0.5rem' }}>Volleyball League Admin</h1>
          <p style={{ margin: 0, color: '#666' }}>Manage teams and match results</p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            fontSize: '0.9rem'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
        >
          Logout
        </button>
      </header>

      <main style={{ display: 'grid', gap: '2rem' }}>
        <div>
          <AddTeamForm onAdd={triggerRefresh} />
          <TeamList 
            teams={teams} 
            onSelect={setSelectedTeam} 
            selectedTeam={selectedTeam}
            loading={loading}
            error={error}
          />
        </div>

        {selectedTeam && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <ScoreUpdater 
                team={teams.find(t => t._id === selectedTeam)?.name || selectedTeam} 
                onUpdate={triggerRefresh} 
              />
              <NextMatchSetter 
                team={teams.find(t => t._id === selectedTeam)?.name || selectedTeam} 
                onUpdate={triggerRefresh} 
              />
            </div>
            <ScoreTableView scores={scores} loading={scoresLoading} error={scoresError} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;