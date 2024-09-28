import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../services/userService'; // Assurez-vous que le chemin est correct
import styles from './styles/Login.module.css';
import { loginUser } from '../services/userService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
        try {
          // Changez username en email
          const userData = { email: username, password }; // Utilisez email au lieu de username
          const response = await loginUser(userData);
          console.log('Utilisateur connecté :', response);
          navigate('/dashboard');
        } catch (err) {
          setError(err.response?.data?.message || 'Une erreur est survenue lors de la connexion.');
        } finally {
          setIsLoading(false);
        }
    
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>🖥 Moniteur de Qualité de l'Air</div>
        <div>
          <Link to="/create-account" className={styles.signUpButton}>S'inscrire</Link>
          <button className={styles.loginButton}>Se connecter</button>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue de nouveau sur Moniteur de Qualité de l'Air</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              placeholder="Entrez votre nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>
        <Link to="/forgot-password" className={styles.forgotPassword}>Mot de passe oublié ?</Link>
      </main>
    </div>
  );
};

export default Login;