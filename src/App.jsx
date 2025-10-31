export default function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">U</div>
        <h1>Projetos UDESC CEPLAN</h1>
        <p className="subtitle">
          Explore os projetos desenvolvidos pelos alunos do curso de Sistemas de
          Informação
        </p>
      </header>

      <div className="projects">
        <a
          href="https://erp2025-1.udesc-ceplan.com.br/"
          className="card"
          rel="noopener noreferrer"
        >
          <div className="card-header">
            <div className="card-number">01</div>
            <span className="status active">Disponível</span>
          </div>
          <h2 className="card-title">ERP 2025-1</h2>
          <p className="card-description">
            Site para exposição do conhecimento adquirido pelos alunos do curso
            de Sistemas de Informação da UDESC CEPLAN na matéria de Sistemas
            Integrados de Gestão.
          </p>
          <div className="card-footer">
            <span>Acessar projeto</span>
            <svg
              className="arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </a>

        <div className="card disabled">
          <div className="card-header">
            <div className="card-number">02</div>
            <span className="status pending">Em breve</span>
          </div>
          <h2 className="card-title">RIN 2025-2</h2>
          <p className="card-description">
            Próximo projeto dos alunos da UDESC CEPLAN. Aguarde novidades em
            breve!
          </p>
          <div className="card-footer">
            <span>Em desenvolvimento</span>
          </div>
        </div>
      </div>

      <footer>
        <p>
          <strong>UDESC</strong> - Universidade do Estado de Santa Catarina
        </p>
        <p>CEPLAN - Centro de Educação do Planalto Norte</p>
      </footer>
    </div>
  );
}
