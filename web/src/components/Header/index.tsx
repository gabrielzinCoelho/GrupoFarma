import { useState, useEffect } from "react";
import { HeaderContainer, HeaderTime } from "./styles";
import iconsol from "../../assets/icon-sol.png";
import iconlua from "../../assets/icon-lua.png";

export function Header() {
  // Tempo, Frase e Icone iniciais
  const [tempo, setTempo] = useState<string>("");
  const [frase, setFrase] = useState<string>("Bom dia");
  const [icon, setIcon] = useState<string>(iconsol);


  // Função que atualiza o relógio
  const updateRelogio = (): void => {
    // Data atual
    const now = new Date();
    // Tempo
    const hours = now.getHours();

    // Se entre às 6 e às 18, bom dia e ícone de sol
    if (hours >= 6 && hours < 18) {
      setFrase("Bom dia");
      setIcon(iconsol);
    } 
    // Senão, boa noite e ícone de lua
    else {
      setFrase("Boa noite");
      setIcon(iconlua);
    }
  };

  // Função para obter a data e hora formatada
  const updateTempo = (): string => {
    const agora = new Date();
    const dia = agora.getDate(); // Dia
    const mes = agora.toLocaleString("pt-BR", { month: "long" }); // Nome do mês
    const ano = agora.getFullYear(); // Ano
    const horario = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }); // Hora
    return `${dia} ${mes} ${ano} ${horario}`;
  };

  // Atualizar o relógio a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTempo(updateTempo());
      updateRelogio();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderContainer>
      <HeaderTime>
        <div>
          <img src={icon} alt={frase} />
          <h2>{frase}</h2>
        </div>
        <span>{tempo}</span>
      </HeaderTime>
    </HeaderContainer>
  );
}
