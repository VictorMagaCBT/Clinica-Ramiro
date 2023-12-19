import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/equipa.css";

const Equipa = () => {

    const navigate = useNavigate()
    const  {t} = useTranslation();

    return (
        <div className="contentWithButton">
            <div className="contentEquipa ">
                <img src="https://i.ibb.co/P5V4vgx/logo-Ramiro-sem-fundo.png" id="imageLogo" alt="logo-Ramiro-sem-fundo" border="0"/>
                <div class="card-group d-flex flex-wrap" id="contentEquipaCards">
                    <div class="card cardBoxes">
                        <div class="row rowCards">
                            <div class="col-md-4">
                                <img src="https://i.ibb.co/86djpPx/Ramiro-min.jpg" alt="Ramiro-min" border="0" />
                            </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h3>Dr Ramiro Silva</h3>
                                        <p class="card-text fs-4">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text fs-4"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    
                    <div class="card cardBoxes">
                        <div class="row rowCards">
                            <div class="col-md-4">
                                <img src="https://i.ibb.co/8PtrdJb/Colega-Ramiro-min-1.jpg" alt="Colega-Ramiro-min-1" border="0" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">Dr colega Dr Ramiro</h3>
                                    <p class="card-text fs-4">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text fs-4"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card cardBoxes">
                        <div class="row rowCards">
                            <div class="col-md-4">
                                <img src="https://i.ibb.co/By4gXC1/Cristiana-min.jpg" alt="Cristiana-min" border="0" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">Cristiana</h3>
                                    <p class="card-text fs-4">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text fs-4"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
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

export default Equipa;