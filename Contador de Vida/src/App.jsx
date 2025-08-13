import { useState } from "react";
import ListaDeTarefas from "./components/ListaDeTarefas";
import ContadorDeVida from "./components/ContadorDeVida";

const App = () => {
  // Estado para controlar qual componente mostrar
  const [componenteAtivo, setComponenteAtivo] = useState("tarefas");

  // Estado para controlar se o contador está montado
  const [contadorMontado, setContadorMontado] = useState(false);

  return (
    <div className="app">
      {/* Menu de navegação */}
      <nav className="menu-navegacao">
        <h1 className="app-titulo">🚀 Exercícios React</h1>

        <div className="botoes-menu">
          <button
            onClick={() => setComponenteAtivo("tarefas")}
            className={`botao-menu ${
              componenteAtivo === "tarefas" ? "ativo" : ""
            }`}
          >
            📝 Lista de Tarefas
          </button>

          <button
            onClick={() => setComponenteAtivo("contador")}
            className={`botao-menu ${
              componenteAtivo === "contador" ? "ativo" : ""
            }`}
          >
            ⏱️ Contador de Vida
          </button>
        </div>
      </nav>

      {/* Renderização condicional dos componentes */}
      <main className="conteudo-principal">
        {componenteAtivo === "tarefas" && <ListaDeTarefas />}

        {componenteAtivo === "contador" && (
          <div className="contador-wrapper">
            {/* Controles do contador */}
            <div className="controles-contador">
              <button
                onClick={() => setContadorMontado(!contadorMontado)}
                className={`botao-controle ${
                  contadorMontado ? "desmontar" : "montar"
                }`}
              >
                {contadorMontado
                  ? "🔴 Desmontar Contador"
                  : "🟢 Montar Contador"}
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
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
