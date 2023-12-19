import React, {useState} from "react";
import {GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";

import { LanguageSwitcher } from "./languageSwitcher";
import { useTranslation } from "react-i18next";


import "../../styles/navbar.css";

export const Navbar = () => {

	const navigate = useNavigate()
	const [isNavOpen, setIsNavOpen] = useState(false);

	const {t} = useTranslation();
	
	const handleNavLinkClick = () => {
		setIsNavOpen(false);
	  };
	
	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	
  };
	return (
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid" id="navbarRow">
				<a class="navbar-brand" href="#" id="navbarBrand">
					<img src="https://i.ibb.co/P5V4vgx/logo-Ramiro-sem-fundo.png" alt="logo-Ramiro-sem-fundo" border="0"/>
				</a>
				<button class="navbar-toggler" type="button" onClick={toggleNav} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon">
						<GiHamburgerMenu className="reactIcon" size="30px" />
					</span>
				</button>
				<div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? ' show' : ''}`} 
					id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto mb-2 mb-lg-0" id="navbarLinks">
						<li class="nav-item">
							<a class="nav-link" aria-current="page" href="/">{t("Home")}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => { handleNavLinkClick(); navigate("/clinica"); }}>{t("Clinica")}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => { handleNavLinkClick(); navigate("/equipa"); }}>{t("Equipa")}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => { handleNavLinkClick(); navigate("/sobreNos"); }}>{t("SobreNos")}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" id="ortognaticaNavbar" href="#" onClick={() => { handleNavLinkClick(); navigate("/ortognatica"); }}>{t("CirurgiaOrtognatica")}</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								{t("Serviços")}
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#" onClick={() => { handleNavLinkClick(); navigate("/remocao-sisos"); }}>{t("RemoçãoDentesInclusos")}</a></li>
								<li><a class="dropdown-item" href="#" onClick={() => { handleNavLinkClick(); navigate("/remocao-quistos"); }}>{t("RemoçãoDeQuistos")}</a></li>
								<li><a class="dropdown-item" href="#" onClick={() => { handleNavLinkClick(); navigate("/cirurgia-oral"); }}>{t("CirurgiaOral")}</a></li>
								<li><a class="dropdown-item" href="#" onClick={() => { handleNavLinkClick(); navigate("/implantes"); }}>{t("CirurgiaDaReabilitaçãoSobreImplantes")}</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => { handleNavLinkClick(); navigate("/turismo-da-saude"); }}>{t("TurismoDaSaude")}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => { handleNavLinkClick(); navigate("/contactos"); }}>{t("Contacto")}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() =>{ handleNavLinkClick(); navigate("/blog"); }}>Blog</a>
						</li>
						<li class="nav-item languageSwitcher">
							<li className="switcher">
								<LanguageSwitcher />
							</li>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
