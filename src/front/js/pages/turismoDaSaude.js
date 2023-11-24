import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../styles/turismoDaSaude.css";

const TurismoDaSaude = () => {

	const navigate = useNavigate()
	const  {t} = useTranslation();
	
    return (
        <div className="fullContentTourism d-flex flex-wrap justify-content-center">
			<div className="row-tourism">
				<div className="turismo-da-saude">{t("TurismoDaSaude")}</div>
			</div>
			<div class="row firstRow d-flex flex-wrap justify-content-center">
				<div class="col-6 d-flex flex-wrap">
					<p className="photoText">
						{t("PortugalDestinoroeminente")}	
					</p>
					<p className="photoText">
						{t("CombinaçãodeProfissionaiQualificados")}
					</p>
				</div>
				<div class="col-6">
					<img src="https://i.ibb.co/d5ZT7Wr/bolsa-de-primeiros-socorros-min.jpg" alt="bolsa-de-primeiros-socorros-min" border="0"/>
				</div>
			</div>
			<div class="row secondRow d-flex flex-wrap justify-content-center">
				<div class="col-6">
					<img src="https://i.ibb.co/5YyGdh0/safe-money.jpg" alt="safe-money" border="0"/>
				</div>
				<div class="col-6">
					<p className="photoText">
						{t("OsPacientesDesfrutam")}
					</p>
				</div>
			</div>
			<div class="row thirdRow d-flex flex-wrap justify-content-center">
				<div class="col">
					<p className="photoText">
						{t("EstamosComprometidosComTratamentosDeExcelência")}
					</p>
				</div>
			</div>
			<div class="row fourthRow d-flex flex-wrap justify-content-center">
				<div class="col">
					<img src="https://i.ibb.co/9rXT4vB/turista-porto.jpg" alt="turista-porto" border="0"/>
				</div>
			</div>
			<div className="photoTextFinal">
				<p>
					{t("QueremosFazerParteDaSuaJornada")}
				</p>
			</div>
			<div class="row fourthRow d-flex flex-wrap justify-content-center">
				<div className="back">
					<button 
						type="button" 
						class="buttonBack" 
						onClick={() => navigate ("/")}
					>
						{t("Voltar")}
					</button>
				</div>
			</div>
			
		</div>	
    );
};

export default TurismoDaSaude;         
            
            