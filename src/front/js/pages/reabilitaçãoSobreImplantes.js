import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/implantes.css";

const Implantes = () => {

    const navigate = useNavigate();
    const {t} = useTranslation();
    
    return (
        <div className="content-implantes">
            <h1 className="cirurgiaImplantes mt-5 text-center">{t("CirurgiaDaReabilitaçãoSobreImplantes")}</h1>
            <div className="introductionImplantes">
                <div className="introductionImageImplantes">
                <img src="https://i.ibb.co/ZTpvHVF/sorriso-velhote.jpg" alt="sorriso-velhote" border="0"/>
                </div>
                <p className="introductionText text-center">
                    {t("EmUmMundoOndeInovaçãoEOdontologia")}
                        <br/><br/>
                    {t("JornadaMeticulosa")}
                </p>
            </div>
            <div className="dentaduraPart">
                <p className="dentaduraText">
                    {t("ImplantesDentáriosComoPilares")} 
                        <br/><br/>
                    {t("SãoAFundação")} 
                        <br/><br/>
                    {t("ÈUmAtoDeMestria")}
                        <br/><br/>
                    {t("MaisDoQueCriarNovoSorriso")}
                        <br/><br/>
                    {t("TrazDeVoltaAlegriaDeComer")}
                </p>
                <div className="dentaduraImage">
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
            <div className="bottomTextImplantes">
                <p className="cirurgia-text2">
                    {t("OptarPorEstaTRansformaçãoAbrePortas")} 
                        <br/><br/>
                    {t("PromesaDeUmaNovaFase")}
                </p>
                <p className="cirurgia-text3">
                    {t("EvulçãoDaCienciaEReabilitaçãoImplantes")}
                        <br/><br/>
                    {t("BuscaConstanteDeMelhorQualidadeDeVida")}
                </p> 
            </div>
            <div className="moreInfoImplantes">
                <button className="btnImplantes" 
                data-toggle="modal" 
                data-target="#exampleModalCenter"
                onClick={() => navigate("/contactos")}>{t("QuerSaberMais?")}</button>
            </div>
        </div>
    );
};

export default Implantes;