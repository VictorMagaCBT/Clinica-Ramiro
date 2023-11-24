import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/inclusos.css";

const RemocaoSisos = () => {
    
    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <div className="content-Inclusos">
            <h1 className="titleInclusos mt-5 text-center">{t("RemoçãoDentesInclusos")}</h1>
            <div className="introductionInclusos">
                <div className="introducao-image-Inclusos">
                    <img src="https://i.ibb.co/86RHkh2/sorriso-africano.jpg" alt="sorriso-africano" border="0"/>
                </div>
                <p className="introduction-text-Inclusos text-center">
                    {t("EnigmaBucal")} 
                        <br/><br/>
                    {t("OsDentesDecidemBrincar")}
                        <br/><br/>
                    {t("ExpediçãoOdontológica")}
                </p>
            </div>
            <div className="photo3d-part">
                <p className="inclusos-text text-center">
                    {t("SaoTesourosEscondidos")}
                        <br/><br/>
                    {t("IncómodosInvisiveisIntrigantes")}
                        <br/><br/>
                    {t("CirurgiaÈUmJogoDeHahilidade")}
                </p>
                <div className="photo3d-image">
                    <img src="https://i.ibb.co/h9R2kxx/siso-3d2.webp" alt="siso-3d2" border="0"/>
                </div>
            </div>
            <div className="bottomText text-center">
                <p>
                    {t("IntervençaoResolveEnigmaDental")}
                </p>
            </div>
            <div className="moreInfoInclusos">
                <button className="btnInclusos"
                data-toggle="modal" 
                data-target="#exampleModalCenter"
                onClick={() => navigate("/contactos")}>{t("QuerSaberMais?")}</button>
            </div>
        </div>
    );
};

export default RemocaoSisos;