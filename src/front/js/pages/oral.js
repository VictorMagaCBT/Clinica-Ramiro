import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/oral.css";

const Oral = () => {

    const navigate = useNavigate();

    return (
        <div className="content-Oral">
            <h1 className="titleOral mt-5 text-center">Cirurgia Oral</h1>
            <div className="introductionOral">
                <p className="introduction-text-Oral text-center">Às vezes, nossa boca pede uma intervenção. A cirurgia oral é a resposta, um campo onde a ciência se torna arte, resolvendo questões de saúde e estética bucais.</p>
                <div className="introducao-image-Oral">
                <img src="https://i.ibb.co/NNRWCLx/Imagem-15-recortada.jpg" alt="Imagem-15-recortada" border="0"/>
                </div>
            </div>
            <div className="body-photo-part">
                <div className="body-photo-image">
                    <img src="https://i.ibb.co/28jrwH2/raiox.jpg" alt="raiox" border="0"/>
                </div>
                <p className="oral-text text-center">
                Imagine-a como um laboratório, onde os especialistas dentais são os pesquisadores e você, o paciente. Aqui, extração de dentes, enxertos ósseos e remoção de lesões ganham soluções. É um processo estruturado, onde cada etapa é meticulosamente planejada para garantir um sorriso saudável.
                </p>
            </div>
            <div className="bottom-oral-text text-center">
                <p>
                Essas intervenções não são apenas reparos; são melhorias, com o objetivo de aprimorar saúde e bem-estar. Ao escolher essa abordagem, você está moldando um novo capítulo para sua saúde bucal, com os cirurgiões orais como os facilitadores, ajustando e otimizando cada detalhe.
                </p>
                <p>
                A cirurgia oral é a promessa de um sorriso renovado e a garantia de uma boca funcional. É um caminho de progresso, onde a confiança ganha destaque e a vitalidade é o objetivo. 
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

export default Oral;