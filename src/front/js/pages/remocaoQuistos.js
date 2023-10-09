import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/quistos.css";

const RemocaoQuistos = () => {

    const navigate = useNavigate();
    return (
        <div className="content-Quistos">
            <h1 className="titleQuistos mt-5 text-center">Cirurgia Para Remoção de Quistos</h1>
            <div className="introductionQuistos">
                <div className="introducao-image-Quistos">
                    <img src="https://i.ibb.co/cCB0XxV/jovemsorriso.jpg" alt="jovemsorriso" border="0"/>
                </div>
                <p className="introduction-text-Quistos text-center">Quando o silêncio da boca esconde um desafio - cistos, intrusos indesejados que podem surgir sem aviso. É nesses momentos que a cirurgia para remoção de cistos na boca se torna uma necessidade séria, uma solução eficaz para restaurar a saúde oral.</p>
            </div>
            <div className="quistos-text">
                <p className="text-center">
                Os cistos bucais podem ser comparados a convidados indesejados que se alojam silenciosamente. A cirurgia emerge como o remédio necessário, com especialistas dentais utilizando suas habilidades e conhecimento para investigar e erradicar esses problemas. É uma abordagem focada e meticulosa, voltada para a restauração do bem-estar bucal.
                </p>
            </div>
            <div className="photosQuistos">
                <div className="firstPhoto-image">
                    <img src="https://i.ibb.co/NL07wgS/Imagem-30.jpg" alt="Imagem-30" border="0"/>
                </div>
                <div className="secondPhoto-image">
                    <img src="https://i.ibb.co/LZG6jJh/Imagem-31.jpg" alt="Imagem-31" border="0"/>
                </div>
                <div className="thirdPhoto-image">
                    <img src="https://i.ibb.co/MVF0N2t/Imagem-33.jpg" alt="Imagem-33" border="0"/>
                </div>
            </div>
            <div className="bottom-quisto-text text-center">
                <p>
                Ao optar por essa intervenção, você não apenas resolve a questão do cisto, mas também coloca sua saúde bucal de volta nos trilhos. É um processo que demanda precisão, mas que oferece alívio duradouro e permite que seu sorriso recupere sua luminosidade.
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

export default RemocaoQuistos;