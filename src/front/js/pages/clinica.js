import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/clinica.css";

const Clinica = () => {

    const navigate = useNavigate()

    return (
        <div className="contentClinica">
            <div className="imageClinica">
                <div className="nameClinica">
                    <h1>Clínica Médico Dentária Dr Ramiro Silva</h1>
                </div> 
                <img src="https://i.ibb.co/31rhchF/clinica-ramiro.jpg" alt="clinica-ramiro" border="0"/>
            </div>
            <div className="introductionClinica">
                <p className="text-center">
                    A Clínica Dentária do Dr. Ramiro Silva em Celorico de Basto é um verdadeiro ponto de 
                    referência no cuidado odontológico local. 
                    Com uma história marcada por crescimento constante
                    e excelência em serviços, esta clínica tem se destacado no cenário de saúde bucal da região.
                </p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 " id="firstRowClinic">
                <div class="col" id="firstCard">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/wrgT9PP/negocios-crescendo.jpg" alt="negocios-crescendo" border="0"/>
                        <div class="card-body">
                            <h5 class="cardTitleClinica ">Crescimento Sustentado</h5>
                            <p class="card-text">
                                Desde sua fundação modesta há alguns anos, a clínica experimentou um crescimento 
                                consistente, expandindo suas instalações e equipe. Sendo um reflexo
                                do compromisso incansável do Dr. Ramiro Silva e sua equipa em proporcionar 
                                um atendimento odontológico de alta qualidade.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col" id="secondCard">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/vxdgmFm/paciente-e-dentista.jpg" alt="paciente-e-dentista" border="0"/>
                        <div class="card-body">
                            <h5 class="cardTitleClinica">Atendimento personalizado</h5>
                            <p class="card-text">
                                O que realmente diferencia esta clínica é o atendimento personalizado que oferece 
                                a cada paciente. Desde o primeiro contato, os pacientes se sentem acolhidos e compreendidos,
                                criando um ambiente propício para uma relação de confiança mútua.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col" id="thirdCard">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/8gDxM1G/tecnologia.jpg" alt="tecnologia" border="0"/>
                        <div class="card-body">
                            <h5 class="cardTitleClinica">Tecnologia de Ponta</h5>
                            <p class="card-text">
                                A clínica investe continuamente em tecnologia de ponta para garantir procedimentos odontológicos
                                eficazes e confortáveis. Equipamentos modernos e técnicas avançadas são utilizados para 
                                proporcionar aos pacientes a melhor experiência possível.
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
                            <h5 class="cardTitleClinica">Equipa Excepcional</h5>
                            <p class="card-text">
                                A equipa da clínica é composta por profissionais altamente qualificados e dedicados, que possuem 
                                um compromisso inabalável com a saúde bucal dos pacientes. O Dr. Ramiro Silva lidera uma equipe 
                                apaixonada que busca sempre o melhor para cada indivíduo que busca seus serviços.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col" id="fifthcard">
                    <div class="card h-100">
                        <img src="https://i.ibb.co/qYrBbbQ/cliente-satisfeita-min.jpg" alt="cliente-satisfeita-min" border="0"/>
                        <div class="card-body">
                            <h5 class="cardTitleClinica">Satisfação dos Pacientes</h5>
                            <p class="card-text">
                                A satisfação dos pacientes é evidente, refletida nas inúmeras histórias de sucesso e nos sorrisos 
                                transformados que saem das portas da clínica. Pacientes relatam experiências positivas, destacando
                                a atenção, cuidado e resultados excepcionais obtidos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clinica;