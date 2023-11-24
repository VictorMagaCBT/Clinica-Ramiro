import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


import "../../styles/home.css";

export const Home = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	const {t} = useTranslation();
	
	return (
		<div className="fullContent">
			<div className="imageUnderNav">
				<img src="https://i.ibb.co/sJR8j2v/Imagem-23-mejorada-min.jpg" alt="Imagem-23-mejorada-min" border="0"/>
			</div>

			<div className="firstRowHome">
				<div className="welcomeMsg">
					<h1 className="bemVindo mb-3">{t("Bem-vindo")}</h1>
					<p className="text-center">
						{t("Desejamos-lhe")}
							<br/><br/> 
						{t("SomosEspecialistas")}
							<br/><br/>
						{t("NaNossaClinicaValorizamos")}
					</p>
					<p>
						{t("ExploreONossoSite")}
							<br/><br/>
						{t("EstamosAnsiosos")}
					</p> 
					<p>
						{t("NaoHesiteEnContactarnos")}
					</p>
					<p>
						{t("Atenciosamente")}
							<br/><br/>
						{t("EquipaDrRamiro")}
					</p>
				</div>
				<div className="photoRamiro">
					<div className="photoRamiroImg">
						<img src="https://i.ibb.co/SyJn2XT/foto-ramiro-cortada.jpg" alt="foto-ramiro-cortada" border="0"/>
					</div>
					<h1>Dr Ramiro Silva</h1>
					<h3 className="lineUnderName">{t("CirurgiaTraumatologiaBucomaxilofacial")}</h3>
				</div>
			</div>
			<div className="divider">
				<div className="dividerText">{t("Especialidades")}</div>
			</div>
			<div className="rowOrtognatica">
				<h3 class="card-title text-center">{t("CirurgiaOrtognatica")}</h3>
				<div className="photosOrtognatica">
					<div className="exemplo-image1">
						<a href="https://i.ibb.co/XXN5N9p/Imagem-9-sem-Identidade-min.png" target="_blank">
							<img src="https://i.ibb.co/XXN5N9p/Imagem-9-sem-Identidade-min.png" alt="Imagem-9-sem-Identidade-min" border="0"/>
						</a>
					</div>
					<div className="exemplo-image2">
						<a href="https://i.ibb.co/C0MVHjM/Imagem-7-Incognita-min.jpg" target="_blank">
							<img src="https://i.ibb.co/C0MVHjM/Imagem-7-Incognita-min.jpg" alt="Imagem-7-Incognita-min" border="0"/>
						</a>
					
					</div>
					<div className="exemplo-image3">
						<a href="https://i.ibb.co/K7PJTH0/Imagem-11-Inc-gnita-min.jpg" target="_blank">
						<img src="https://i.ibb.co/K7PJTH0/Imagem-11-Inc-gnita-min.jpg" alt="Imagem-11-Inc-gnita-min" border="0"/>
						</a>
					</div>
				</div>

				<div class="textAndButtonOrtognatica">
					<p class="textOrtognatica">
						{t("CirurgiaOrtognáticaEUmProcedimento")}
							<br/><br/>
						{t("EssaCirurgiaERealizada")}
					</p>
					<button type="button" class="btn" onClick={() => navigate ("/ortognatica")}>{t("SaibaMais")}</button>
				</div>
				
			</div>
		
			<div class="card-group d-flex flex-wrap justify-content-around" id="firstCardRow">
				
				<div class="card" id="reabilitacaoImplantes" >
					<h3 class="card-title text-center">{t("CirurgiaDaReabilitaçãoSobreImplantes")}</h3>
						<img src="https://i.ibb.co/86M3sPT/imagem-implantes-3d.webp" alt="imagem-implantes-3d" border="0"/>
					<div class="card-body">
						<p class="card-text">{t("AReabilitaçaoSobreImplantesEUmProcedimento")}</p>
						<button type="button" class="btn btn-primary" onClick={() => navigate ("/implantes")}>{t("SaibaMais")}</button>
					</div>
				</div>
				
				<div class="card" id="oral">
					<h3 class="card-title text-center">{t("CirurgiaOral")}</h3>
						<img src="https://i.ibb.co/smjCq5h/Imagem-21.jpg" alt="Imagem-21" border="0"/>
					<div class="card-body">
						<p class="card-text">{t("ACirurgiaOralEUmProcedimentoRealizadoNaBoca")}</p>
						<button type="button" class="btn btn-primary" onClick={() => navigate ("/cirurgia-oral")}>{t("SaibaMais")}</button>
					</div>
				</div>

			</div>

			<div class="card-group d-flex flex-wrap justify-content-around" id="secondCardRow">
				
				<div class="card" id="remocaoSisos">
					<h3 class="card-title text-center">{t("RemoçãoDentesInclusos")}</h3>
						<img src="https://i.ibb.co/h9R2kxx/siso-3d2.webp" alt="siso-3d2" border="0"/>
					<div class="card-body">
						<p class="card-text">{t("ProcedimentoOdontologicoParaExtrair")}</p>
						<button type="button" class="btn btn-primary" onClick={() => navigate ("/remocao-sisos")}>{t("SaibaMais")}</button>
					</div>
				</div>
				<div class="card" id="quistos">
					<h3 class="card-title text-center">{t("RemoçãoDeQuistos")}</h3>
						<img src="https://i.ibb.co/6wwGTLp/Imagem-31-tratada.jpg" alt="Imagem-31-tratada" border="0"/>
					<div class="card-body">
						<p class="card-text">{t("ProcedimentoParaExtrairQuistos")}</p>
						<button type="button" class="btn btn-primary" onClick={() => navigate ("/remocao-quistos")}>{t("SaibaMais")}</button>
					</div>
				</div>
				
			</div>

			<div className="lineDivider"></div>

			<div className="row-tourismHome">
				<img src="https://i.ibb.co/7kYbHMs/medical-tourism.jpg" alt="medical-tourism" border="0"/>
				<div className="tourism-content">
					<h1>{t("TurismoDaSaude")}</h1>
					<div className="tourismTextHome text-center mt-3">
						<p>{t("PortugalÉDestinoCrescente")}</p>
					</div>
					<button type="button" class="btn btn-danger" onClick={() => navigate ("/turismo-da-saude")}>{t("SaibaMais")}</button>
				</div>
			</div>
			
		</div>
	);
};
