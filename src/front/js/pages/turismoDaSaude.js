import React from "react";
import "../../styles/turismoDaSaude.css";

const TurismoDaSaude = () => {
    return (
        <div className="fullContent-tourism">
			<div className="row-tourism">
				<div className="turismo-da-saude">TURISMO DA SAÚDE</div>
			</div>
			<div class="row firstRow">
				<div class="col-6">
					<p className="photoText">
						Portugal tem emergido como um dos destinos proeminentes no cenário global do turismo de saúde, 
						com sua indústria odontológica ganhando destaque.
					</p>
					<p className="photoText">
						A combinação de profissionais altamente 
						qualificados, tecnologia de ponta e um ambiente acolhedor tem atraído pacientes internacionais
						em busca de tratamentos dentários de excelência.
					</p>
				</div>
				<div class="col-6">
					<img src="https://i.ibb.co/d5ZT7Wr/bolsa-de-primeiros-socorros-min.jpg" alt="bolsa-de-primeiros-socorros-min" border="0"/>
				</div>
			</div>
			<div class="row secondRow">
				<div class="col-6">
					<img src="https://i.ibb.co/5YyGdh0/safe-money.jpg" alt="safe-money" border="0"/>
				</div>
				<div class="col-6">
					<p className="photoText">
						Os pacientes desfrutam da oportunidade de receber cuidados odontológicos 
						de alta qualidade enquanto exploram a rica herança cultural e paisagens deslumbrantes de Portugal.
					</p>
				</div>
			</div>
			<div class="row thirdRow">
				<div class="col-6">
					<p className="photoText">
						Estamos comprometidos em oferecer tratamentos dentários de excelência, garantindo
						que cada paciente tenha uma experiência positiva e resultados duradouros durante sua estadia em Portugal.
					</p>
				</div>
				<div class="col-6">
					<img src="https://i.ibb.co/9rXT4vB/turista-porto.jpg" alt="turista-porto" border="0"/>
				</div>
			</div>
			<div className="photoTextFinal">
				Estamos aqui para fazer parte da sua jornada em direção a um sorriso saudável e radiante, em um dos 
				destinos mais encantadores para turismo de saúde.
			</div>
		</div>	
    );
};

export default TurismoDaSaude;         
            
            