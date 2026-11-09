/**
 * Autor: Hispafox
 * Fecha: 2026-11-09
 * Versión: 1.0.0
 * Descripción: Punto de entrada principal de la aplicación React.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
