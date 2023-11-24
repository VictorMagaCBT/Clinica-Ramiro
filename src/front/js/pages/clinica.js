import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/clinica.css";

const Clinica = () => {

    const navigate = useNavigate()
    const  {t} = useTranslation();

    return (
        <div className="contentClinica">
            <div className="imageClinica">
                <div className="nameClinica">
                    <h1>{t("ClinicaDrRamiro")}</h1>
                </div> 
                <img src="https://i.ibb.co/31rhchF/clinica-ramiro.jpg" alt="clinica-ramiro" border="0"/>
            </div>
            <div className="introductionClinica">
                <p className="text-center">
                    {t("ÉumVerdadeiroPontoDeReferencia")}
                </p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 " id="firstRowClinic">
                <div class="col" id="firstCard">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/wrgT9PP/negocios-crescendo.jpg" alt="negocios-crescendo" border="0"/>
                        <div class="card-body">
                            <h5 class="cardTitleClinica ">{t("CrescimentoSustentado")}</h5>
                            <p class="card-text">
                                {t("DesdeASuaFundacao")}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col" id="secondCard">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/vxdgmFm/paciente-e-dentista.jpg" alt="paciente-e-dentista" border="0"/>
                        <div class="card-body">
                            <h5 class="cardTitleClinica">{t("AtendimentoPersonalizado")}</h5>
                            <p class="card-text">
                                {t("OQueRealmenteNosDiferencia")}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col" id="thirdCard">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/8gDxM1G/tecnologia.jpg" alt="tecnologia" border="0"/>
                        <div class="card-body">
                            <h5 class="cardTitleClinica">{t("TecnologiaDePonta")}</h5>
                            <p class="card-text">
                                {t("InvesteContinuamente")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 d-flex flex-row justify-content-around g-4" id="secondRowClinic">
                <div class="col" id="fourthCard">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/1G1TSFT/Imagem-15-super-recortada.jpg" alt="Imagem-15-super-recortada" border="0"/>
                        <div class="card-body">
                            <h5 class="cardTitleClinica">{t("EquipaExcepcional")}</h5>
                            <p class="card-text">
                                {t("CompostaPorProfissionais")}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col" id="fifthcard">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/qYrBbbQ/cliente-satisfeita-min.jpg" alt="cliente-satisfeita-min" border="0"/>
                        <div class="card-body">
                            <h5 class="cardTitleClinica">{t("SatisfaçãoDosPacientes")}</h5>
                            <p class="card-text">
                                {t("SatisfaçãoDosPacientesEvidente")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back">
                <button type="button" class="buttonBack" onClick={() => navigate ("/")}>{t("Voltar")}</button>
            </div>
        </div>
    );
};

export default Clinica;