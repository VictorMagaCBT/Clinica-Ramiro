import React, {useState} from "react";

import "../../styles/sobreNos.css";

const SobreNos = () => {
    return (
      <div className="contentAboutUs">
        <div className="textAboutUs">
          <h1>Somos mais do que uma Clínica</h1>
          <h5>
            Somos um santuário de saúde bucomaxilofacial, onde cada sorriso é uma obra de arte que merece ser
            celebrada. Nossa missão é transformar vidas, uma cirurgia de cada vez.
          </h5>
        </div>  
          <h3 className="titleValues">Os Nossos Valores</h3>
        <div className="values">
                <div className="object">
                    <strong>Excelência</strong>
                    <div className="infoText">
                    Buscamos a excelência em cada procedimento, adotando as últimas
                    inovações e técnicas para garantir o melhor para nossos pacientes.
                    </div>
                </div>
        
                <div className="object">
                    <strong>Cuidado Compassivo</strong>
                    <div className="infoText">
                    Nossa abordagem é moldada pela compaixão e empatia. Cada paciente é
                    único e tratamos a todos com a atenção e carinho que merecem.
                    </div>
                </div>
        
                <div className="object">
                    <strong>Confiança e Transparência</strong>
                    <div className="infoText">
                    Construímos relações baseadas na confiança, mantendo uma comunicação
                    aberta e transparente com nossos pacientes em todas as etapas do
                    tratamento.
                    </div>
                </div>
        
                <div className="object">
                    <strong>Educação e Orientação</strong>
                    <div className="infoText">
                    Acreditamos que a educação é o primeiro passo para a saúde. Guiamos
                    nossos pacientes com informações precisas para que possam fazer
                    escolhas informadas sobre seu tratamento.
                    </div>
                </div>
        </div>
          <h3 className="titleCommitment mt-3">Nosso Compromisso</h3>
        <div className="commitment">
          <p>
            Estamos empenhados em proporcionar a cada paciente uma jornada de
            tratamento personalizada e transformadora. Desde o momento em que
            entra em nossa clínica até a completa recuperação, estamos ao seu
            lado, cuidando de cada detalhe. A equipa do Dr. Ramiro Silva, não se
            preocupa apenas em restaurar sorrisos, mas também renovamos a
            confiança e a qualidade de vida de nossos pacientes. Sua saúde
            bucomaxilofacial é nossa prioridade, e sua satisfação é nossa maior
            recompensa. Sinta-se em casa, pois você está prestes a embarcar em uma
            jornada de transformação conosco.
          </p>
        </div>
        <div className="imageAboutUs">
          <img
            src="https://i.ibb.co/Vq0THhk/Imagem-24-recortada-HD-min.jpg" 
            alt="Imagem-24-recortada-HD-min" 
            border="0"
          />
        </div>
        </div>
    );
  };
  
  export default SobreNos;