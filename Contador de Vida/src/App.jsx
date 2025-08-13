import { useState } from "react";
import ContadorDeVida from "./components/ContadorDeVida";

const App = () => {
  // Estado para controlar se o contador está montado
  const [contadorMontado, setContadorMontado] = useState(false);

  return (
    <div className="app">
      {/* Cabeçalho */}
      <header className="app-header">
        <h1 className="app-titulo">⏱️ Contador de Tempo de Vida</h1>
        <p className="app-descricao">Exercício com useEffect e cleanup</p>
      </header>

      {/* Controles do contador */}
      <main className="conteudo-principal">
        <div className="controles-contador">
          <button
            onClick={() => setContadorMontado(!contadorMontado)}
            className={`botao-controle ${
              contadorMontado ? "desmontar" : "montar"
            }`}
          >
            {contadorMontado ? "🔴 Desmontar Contador" : "🟢 Montar Contador"}
          </button>

          <p className="status-contador">
            Status: {contadorMontado ? "🟢 Montado" : "🔴 Desmontado"}
          </p>
        </div>

        {/* Renderização condicional do contador */}
        {contadorMontado && <ContadorDeVida />}

        {!contadorMontado && (
          <div className="placeholder-contador">
            <p>⏸️ Contador desmontado</p>
            <p>Clique em "Montar Contador" para iniciar</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
