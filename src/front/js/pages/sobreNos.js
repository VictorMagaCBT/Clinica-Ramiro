import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/sobreNos.css";

const SobreNos = () => {
  
  const navigate = useNavigate()
  const {t} = useTranslation()

    return (
      <div className="contentAboutUs">
        <div className="textAboutUs">
          <h1>{t("SomosMaisQueUmaClinica")}</h1>
          <h5>
          {t("SomosUmSantuarioDeSaude")}
          </h5>
        </div>  
          <h3 className="titleValues">{t("OsNossosValores")}</h3>
        <div className="valuesImage">
          <img
            src="https://i.ibb.co/vZdWvQP/dentista-teclado-min.jpg" 
            alt="dentista-teclado-min" 
            border="0"
          />
        </div>
        <div className="values">
                <div className="object">
                      <strong>{t("Excelência")}</strong>
                    <div className="infoText">
                    {t("BuscamosAEXcelência")}
                    </div>
                </div>
        
                <div className="object">
                      <strong>{t("CuidadoCompassivo")}</strong>
                    <div className="infoText">
                    {t("AbordagemMoldadaPelaCompaixão")}
                    </div>
                </div>
        
                <div className="object">
                      <strong>{t("ConfiançaTransparência")}</strong>
                    <div className="infoText">
                    {t("ConstruimosRelaçõesDeConfiança")}
                    </div>
                </div>
        
                <div className="object">
                    <strong>{t("EducaçãoOrientação")}</strong>
                    <div className="infoText">
                    {t("AcreditamosQueAEducação")}
                    </div>
                </div>
        </div>
          <h3 className="titleCommitment mt-3">{t("NossoCompromisso")}</h3>
        <div className="commitment">
          <p>
            {t("EstamosEmpenhados")} 
                <br/>
            {t("NãoApenasRestaurarSorrisos")} 
                <br/>
            {t("SintasSeEmCasa")}
          </p>
        </div>
        <div className="imageAboutUs">
          <img
            src="https://i.ibb.co/Vq0THhk/Imagem-24-recortada-HD-min.jpg" 
            alt="Imagem-24-recortada-HD-min" 
            border="0"
          />
        </div>
        <div className="back">
            <button type="button" class="buttonBack" onClick={() => navigate ("/")}>{t("Voltar")}</button>
        </div>
      </div>
    );
  };
  
  export default SobreNos;