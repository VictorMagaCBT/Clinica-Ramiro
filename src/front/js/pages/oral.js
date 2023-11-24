import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/oral.css";

const Oral = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <div className="content-Oral">
            <h1 className="titleOral mt-5 text-center">{t("CirurgiaOral")}</h1>
            <div className="introductionOral">
                <p className="introduction-text-Oral text-center">
                    {t("NossaBocaPedeIntervençao")}
                        <br/><br/>
                    {t("CirurgiaOralÉResposta")}
                </p>
                <div className="introducao-image-Oral">
                <img src="https://i.ibb.co/NNRWCLx/Imagem-15-recortada.jpg" alt="Imagem-15-recortada" border="0"/>
                </div>
            </div>
            <div className="body-photo-part">
                <div className="body-photo-image">
                    <img src="https://i.ibb.co/28jrwH2/raiox.jpg" alt="raiox" border="0"/>
                </div>
                <p className="oral-text text-center">
                    {t("ImagineUmLaboratorio")}
                        <br/><br/>
                    {t("ExtraçaoDeDentesEnxertosOsseos")}
                        <br/><br/>
                    {t("ProcessoEstruturado")}
                </p>
            </div>
            <div className="bottomOralText text-center">
                <p>
                    {t("SaoReparosMelhorias")}
                        <br/><br/>
                    {t("UmNovoCapituloNaSaudeBucal")}
                </p>
                <p>
                    {t("PromessaDeSorrisoRenovado")}
                        <br/><br/>
                    {t("ConfiançaGanhaDestaque")}
                </p>
            </div>
            <div className="moreInfoOral">
                <button className="btnOral" 
                data-toggle="modal" 
                data-target="#exampleModalCenter"
                onClick={() => navigate("/contactos")}>{t("QuerSaberMais?")}</button>
            </div>
        </div>
    );
};

export default Oral;