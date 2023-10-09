import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/inclusos.css";

const RemocaoSisos = () => {
    
    const navigate = useNavigate();

    return (
        <div className="content-Inclusos">
            <h1 className="titleInclusos mt-5 text-center">Remoção Dentes Inclusos</h1>
            <div className="introductionInclusos">
                <div className="introducao-image-Inclusos">
                    <img src="https://i.ibb.co/86RHkh2/sorriso-africano.jpg" alt="sorriso-africano" border="0"/>
                </div>
                <p className="introduction-text-Inclusos text-center">Dentes inclusos, um enigma bucal! Às vezes, nossos dentes decidem brincar de esconde-esconde. Imagine um dente que não encontra o caminho certo para sair e decide se aconchegar no osso. É aí que entra a cirurgia para remoção de dentes inclusos - uma verdadeira expedição odontológica!</p>
            </div>
            <div className="photo3d-part">
                <p className="inclusos-text text-center">
                    Os dentes inclusos são como tesouros escondidos no subsolo da sua boca. Às vezes, são incômodos, às vezes invisíveis, mas sempre intrigantes. A cirurgia é um jogo de habilidade, paciência e precisão, onde os especialistas odontológicos desvendam o enigma, removendo esses dentes teimosos e restaurando o equilíbrio no seu sorriso.
                </p>
                <div className="photo3d-image">
                    <img src="https://i.ibb.co/h9R2kxx/siso-3d2.webp" alt="siso-3d2" border="0"/>
                </div>
            </div>
            <div className="bottom-text text-center">
                <p>
                    Ao optar por essa intervenção, você não só resolve um enigma dental, mas também ganha em conforto e saúde bucal. É uma jornada curta, mas cheia de descobertas, trazendo alívio e permitindo que seu sorriso brilhe sem obstáculos. Então, vamos desvendar juntos o mistério dos dentes inclusos e revelar um sorriso radiante!
                </p>
            </div>
            <div className="moreInfo">
                <button className="btn-more-info" 
                data-toggle="modal" 
                data-target="#exampleModalCenter"
                onClick={() => navigate("/contactos")}>Quer saber mais...?</button>
            </div>
        </div>
    );
};

export default RemocaoSisos;