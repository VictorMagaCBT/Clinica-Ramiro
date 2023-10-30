import React from "react";
import {GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";


import "../../styles/navbar.css";

export const Navbar = () => {

	const navigate = useNavigate()
	return (
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid" id="navbarRow">
				<a class="navbar-brand bg-dark" href="#" id="navbarBrand">
					<img src="https://i.ibb.co/P5V4vgx/logo-Ramiro-sem-fundo.png" alt="logo-Ramiro-sem-fundo" border="0"/>
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon">
						<GiHamburgerMenu className="reactIcon" size="30px" />
					</span>
				</button>
				<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto mb-2 mb-lg-0" id="navbarLinks">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="/">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => navigate("/clinica")}>Clinica</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Equipa</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => navigate("/sobreNos")}>Sobre Nós</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Serviços
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#" onClick={() => navigate("/ortognatica")}>Cirurgia Ortornatica</a></li>
								<li><a class="dropdown-item" href="#" onClick={() => navigate("/remocao-sisos")}>Remoção de Dentes Inclusos</a></li>
								<li><a class="dropdown-item" href="#" onClick={() => navigate("/remocao-quistos")}>Remoção de Quistos</a></li>
								<li><a class="dropdown-item" href="#" onClick={() => navigate("/cirurgia-oral")}>Cirurgia Oral</a></li>
								<li><a class="dropdown-item" href="#" onClick={() => navigate("/implantes")}>Cirurgia da Reabilitação Sobre Implantes</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => navigate("/turismo-da-saude")}>Turismo da Saúde</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => navigate("/contactos")}>Contacto</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" onClick={() => navigate("/blog")}>Blog</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
