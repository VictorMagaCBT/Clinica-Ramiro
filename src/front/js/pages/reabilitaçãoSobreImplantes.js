import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/implantes.css";

const Implantes = () => {

    const navigate = useNavigate();
    return (
        <div className="content-implantes">
            <h1 className="cirurgiaImplantes mt-5 text-center">Cirurgia Ortognatica</h1>
            <div className="introduction">
                <div className="introducao-image">
                <img src="https://i.ibb.co/ZTpvHVF/sorriso-velhote.jpg" alt="sorriso-velhote" border="0"/>
                </div>
                <p className="introduction-text">Em um mundo onde a inovação se encontra com a odontologia, a cirurgia de reabilitação com implantes surge como uma dádiva para aqueles que buscam restaurar sua saúde bucal e a confiança em seu sorriso. É uma jornada meticulosa, onde a ciência se une à precisão cirúrgica para reconstruir a harmonia oral.</p>
            </div>
            <div className="dentadura-part">
                <p className="dentadura-text">Imagine implantes dentários como pilares sólidos, incorporados estrategicamente em sua mandíbula. Eles são a base, a fundação para futuras reabilitações. A cirurgia é um ato de maestria, onde esses implantes são habilmente colocados, proporcionando um alicerce robusto para os novos dentes que estão por vir.
                    Essa intervenção é mais do que a criação de um novo sorriso; é a restauração da funcionalidade perdida e a reinvenção da estética dental. É um compromisso com a longevidade, onde os implantes oferecem estabilidade e durabilidade. A reabilitação traz de volta a alegria de comer, sorrir e falar com naturalidade.
                </p>
                <div className="dentadura-image">
                    <img src="https://i.ibb.co/7tnhV1F/implantes-em-3d.jpg" alt="implantes-em-3d" border="0"/>
                </div>
            </div>
            <div className="photos">
                <div className="exemplo-first-image">
                    <a href="https://i.ibb.co/TkQDkW6/Imagem-4.jpg" target="_blank">
                    <img src="https://i.ibb.co/TkQDkW6/Imagem-4.jpg" alt="Imagem-4" border="0"/>
                    </a>
                </div>
                <div className="exemplo-second-image">
                    <a href="https://i.ibb.co/TwzgpLt/Imagem-6.jpg" target="_blank">
                        <img src="https://i.ibb.co/TwzgpLt/Imagem-6.jpg" alt="Imagem-6" border="0"/>
                    </a>
                </div>
               
            </div>
            <div className="final-text">
                <p className="cirurgia-text2">
                    Ao optar por essa transformação, você está abrindo as portas para uma vida sem limitações, sem preocupações com a integridade de sua dentição. A cirurgia de reabilitação com implantes é uma promessa de uma nova fase, onde cada mordida é um passo firme em direção à confiança e ao bem-estar.
                </p>
                <p className="cirurgia-text3">
                    A ciência da odontologia evolui e a cirurgia de reabilitação com implantes é um testemunho dessa evolução. É a busca constante por uma melhor qualidade de vida, onde a inovação se une à experiência para criar sorrisos que perduram.
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

export default Implantes;