import { useState, useEffect } from "react";

const ContadorDeVida = () => {
  // Estado para o contador de segundos
  const [segundos, setSegundos] = useState(0);

  // useEffect para configurar o timer
  useEffect(() => {
    console.log("🚀 Componente ContadorDeVida foi MONTADO");

    // Configurar o setInterval
    const intervalId = setInterval(() => {
      setSegundos((prevSegundos) => {
        const novoValor = prevSegundos + 1;
        console.log(`⏰ Timer: ${novoValor} segundos`);
        return novoValor;
      });
    }, 1000);

    // Função de limpeza (cleanup)
    return () => {
      console.log("🧹 Limpando timer - Componente será DESMONTADO");
      clearInterval(intervalId);
    };
  }, []); // Array vazio = executa apenas na montagem

  // Função para formatar o tempo (mm:ss)
  const formatarTempo = (totalSegundos) => {
    const minutos = Math.floor(totalSegundos / 60);
    const segs = totalSegundos % 60;
    return `${minutos.toString().padStart(2, "0")}:${segs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="contador-container">
      <h2 className="contador-titulo">⏱️ Contador de Tempo de Vida</h2>

      <div className="contador-display">
        <div className="tempo-principal">{formatarTempo(segundos)}</div>
        <div className="tempo-secundario">
          {segundos} {segundos === 1 ? "segundo" : "segundos"} vivo
        </div>
      </div>

      <div className="status-info">
        <p className="status-texto">🟢 Componente ativo e contando...</p>
        <p className="dica-texto">
          💡 Abra o console para ver os logs de montagem/desmontagem
        </p>
      </div>
    </div>
  );
};

export default ContadorDeVida;
