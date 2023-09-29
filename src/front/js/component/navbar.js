import React from "react";
import {GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import {cirurgiaOrtognatica} from "../pages/cirurgiaOrtognatica";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

export const Navbar = () => {

	const navigate = useNavigate()
	return (
		<nav class="navbar navbar-expand-lg bg-light ">
			<div class="container-fluid" id="navbarRow">
				<a class="navbar-brand bg-dark" href="#" id="navbarBrand">
					<img src="https://i.ibb.co/hYzgMfy/logo-Ramiro-Editado.jpg" alt="logo-Ramiro-Editado" border="0"/>
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
							<a class="nav-link" href="#">Clinica</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Equipa</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Contacto</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Serviços
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#" onClick={() => navigate("ortognatica")}>Cirurgia Ortornatica</a></li>
								<li><a class="dropdown-item" href="#">Serviço 2</a></li>
								<li><a class="dropdown-item" href="#">Serviço 3</a></li>
								<li><a class="dropdown-item" href="#">Serviço 4</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
