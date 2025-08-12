function App() {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: 'red', fontSize: '48px' }}>
        🚨 TESTE EMERGÊNCIA 🚨
      </h1>
      <p style={{ fontSize: '24px', color: 'blue' }}>
        Se você vê isso, o React está funcionando!
      </p>
      <div style={{ 
        background: 'yellow', 
        padding: '20px', 
        margin: '20px',
        border: '3px solid black',
        borderRadius: '10px'
      }}>
        <h2>Status: FUNCIONANDO ✅</h2>
        <p>Data: {new Date().toLocaleDateString()}</p>
        <p>Hora: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  )
}

export default App

