import './App.css'

function App() {
  return (
    <div className="app">
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#2563eb', fontSize: '3rem', marginBottom: '1rem' }}>
          Vitor Volpi
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#6b7280', marginBottom: '2rem' }}>
          Growth Marketing Specialist
        </p>
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          padding: '2rem', 
          borderRadius: '20px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2>Teste de Funcionamento</h2>
          <p>Se você está vendo esta mensagem, o React está funcionando!</p>
          <button style={{
            background: 'white',
            color: '#667eea',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '1rem'
          }}>
            Botão de Teste
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

