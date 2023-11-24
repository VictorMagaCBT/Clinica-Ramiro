import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/quistos.css";

const RemocaoQuistos = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <div className="content-Quistos">
            <h1 className="titleQuistos mt-5 text-center">{t("RemoçãoDeQuistos")}</h1>
            <div className="introductionQuistos">
                <div className="introducaoImageQuistos">
                    <img src="https://i.ibb.co/cCB0XxV/jovemsorriso.jpg" alt="jovemsorriso" border="0"/>
                </div>
                <p className="introductionTextQuistos text-center">
                    {t("QuandoOSilencioDaBocaEscondeDesafios")}
                        <br/><br/>
                    {t("NecessidadeSeria")}
                </p>
            </div>
            <div className="quistosText">
                <p className="text-center">
                    {t("ConvidadosIndesejados")}
                        <br/><br/>
                    {t("CirurgiaParaErradicarEsseProblema")}
                        <br/><br/>
                    {t("AbordagemFocadaMeticulosa")}
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
            <div className="bottomQuistoText text-center">
                <p>
                    {t("SaudeBucalNosTrilhos")}
                        <br/><br/>
                    {t("DemandaPrecisaoMasAlivioDuradouro")}
                </p>
            </div>
            <div className="moreInfoQuisto">
                <button className="btnQuisto" 
                data-toggle="modal" 
                data-target="#exampleModalCenter"
                onClick={() => navigate("/contactos")}>{t("QuerSaberMais?")}</button>
            </div>
        </div>
    );
};

export default RemocaoQuistos;