import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">VITOR VOLPI</div>
          <div className="nav-links">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Growth Marketing Specialist
            </h1>
            <p className="hero-subtitle">
              Impulsionando o crescimento de negócios através de análise de dados, 
              estratégias digitais e desenvolvimento orientado a resultados.
            </p>
            <div className="hero-cta">
              <button className="btn-primary">Ver Meu Trabalho</button>
              <button className="btn-secondary">Fale Comigo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projetos Concluídos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Foco em Resultados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meus Serviços</h2>
            <p className="section-subtitle">
              Soluções completas para impulsionar o crescimento do seu negócio
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3 className="service-title">Análise de Dados</h3>
              <p className="service-description">
                Análise profunda de dados para identificar oportunidades de crescimento 
                e otimização de performance.
              </p>
              <ul className="service-features">
                <li>Dashboards interativos</li>
                <li>Relatórios estratégicos</li>
                <li>KPIs personalizados</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3 className="service-title">Growth Marketing</h3>
              <p className="service-description">
                Estratégias de crescimento acelerado baseadas em dados e 
                experimentação contínua.
              </p>
              <ul className="service-features">
                <li>A/B Testing</li>
                <li>Otimização de funil</li>
                <li>Growth Hacking</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3 className="service-title">Desenvolvimento Web</h3>
              <p className="service-description">
                Desenvolvimento front-end focado em performance e experiência 
                do usuário.
              </p>
              <ul className="service-features">
                <li>SEO técnico</li>
                <li>PageSpeed optimization</li>
                <li>UX/UI Design</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3 className="service-title">Business Intelligence</h3>
              <p className="service-description">
                Implementação de soluções de BI para transformar dados em 
                insights acionáveis.
              </p>
              <ul className="service-features">
                <li>Big Data Analytics</li>
                <li>Data Visualization</li>
                <li>Predictive Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meu Trabalho</h2>
            <p className="section-subtitle">
              Experiência profissional em empresas de destaque
            </p>
          </div>
          <div className="work-grid">
            <div className="work-card">
              <div className="work-header">
                <h3 className="work-company">Verde Garden</h3>
                <span className="work-period">2025</span>
              </div>
              <h4 className="work-role">Analista de Dados</h4>
              <p className="work-description">
                Liderança na coleta e integração de dados estratégicos (GA4, GSC, 
                ferramentas de SEO e marketing) para análises robustas e tomadas de decisão.
              </p>
              <div className="work-tech">
                <span className="tech-tag">GA4</span>
                <span className="tech-tag">GSC</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">API</span>
              </div>
            </div>
            <div className="work-card">
              <div className="work-header">
                <h3 className="work-company">Usaflex Calçados</h3>
                <span className="work-period">2023-2024</span>
              </div>
              <h4 className="work-role">Analista de Estratégia Digital Growth e CRM</h4>
              <p className="work-description">
                Desenvolvimento de indicadores e análises estratégicas para o Canal Digital, 
                focando em Growth e CRM para otimizar performance comercial.
              </p>
              <div className="work-tech">
                <span className="tech-tag">Growth</span>
                <span className="tech-tag">CRM</span>
                <span className="tech-tag">Analytics</span>
                <span className="tech-tag">Strategy</span>
              </div>
            </div>
            <div className="work-card">
              <div className="work-header">
                <h3 className="work-company">Strada</h3>
                <span className="work-period">2022-2023</span>
              </div>
              <h4 className="work-role">Senior Growth Analyst</h4>
              <p className="work-description">
                Liderança na estratégia e implantação de Growth em todo o funil, 
                impulsionando crescimento e otimização de performance.
              </p>
              <div className="work-tech">
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">Power BI</span>
                <span className="tech-tag">Hotjar</span>
                <span className="tech-tag">Salesforce</span>
              </div>
            </div>
            <div className="work-card">
              <div className="work-header">
                <h3 className="work-company">iFood</h3>
                <span className="work-period">2021-2022</span>
              </div>
              <h4 className="work-role">Business Intelligence Analyst</h4>
              <p className="work-description">
                Atuação como Analista de BI com mentalidade analítica e orientada à ação, 
                utilizando ferramentas de visualização e análise de dados.
              </p>
              <div className="work-tech">
                <span className="tech-tag">Tableau</span>
                <span className="tech-tag">Databricks</span>
                <span className="tech-tag">Spark</span>
                <span className="tech-tag">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Entre em Contato</h2>
            <p className="section-subtitle">
              Vamos conversar sobre como posso ajudar seu negócio a crescer
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:volpivitor91@gmail.com">volpivitor91@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/volpivitor" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/volpivitor
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Localização</h4>
                  <span>Leme, São Paulo, Brasil</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Seu nome" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Seu email" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Sua mensagem" rows={5} className="form-textarea"></textarea>
                </div>
                <button type="submit" className="btn-primary">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

