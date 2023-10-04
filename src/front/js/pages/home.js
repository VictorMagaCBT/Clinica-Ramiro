import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	return (
		<div className="fullContent">
			<div className="imageUnderNav">
				<img src="https://i.ibb.co/xLtycbS/Imagem-23-alterada.jpg" alt="Imagem-23-alterada" border="0"/>
			</div>

			<div className="firstRow">
				<div className="welcomeMsg">
					<h1 className="bemVindo mb-3">Bem Vindo</h1>
					
					<p>	Desejamos-lhe uma calorosa recepção a este espaço dedicado à sua saúde bucomaxilofacial. Somos especialistas em cirurgia bucomaxilofacial e estamos aqui para oferecer o mais alto padrão de cuidados, combinando experiência e inovação para garantir a sua saúde e bem-estar.

						Na nossa clínica, valorizamos a confiança e a satisfação dos nossos pacientes, especialmente aqueles que vêm de longe para buscar tratamento especializado. Reconhecemos a importância do turismo da saúde e estamos prontos para atender às suas necessidades, proporcionando uma experiência médica excepcional.
					</p>

					<p>Estamos comprometidos em proporcionar-lhe não apenas excelentes tratamentos, mas também uma estadia agradável e tranquila durante o seu tempo aqui. A nossa equipa multilingue está preparada para atendê-lo com a maior dedicação, tornando a sua estadia conosco o mais confortável possível.

						Explore o nosso site para descobrir mais sobre os nossos serviços, a nossa equipa altamente qualificada e a nossa filosofia de cuidado centrado no paciente. Estamos ansiosos para conhecê-lo e ajudá-lo a alcançar uma saúde bucomaxilofacial ótima.

					</p> 
					<p>Não hesite em contactar-nos para agendar a sua consulta ou para obter mais informações. Estamos aqui para o receber e cuidar de si.

						Atenciosamente,
						Equipa da Clínica de Cirurgia Bucomaxilofacial do Dr. Ramiro Silva
					</p>
				</div>
				<div className="photoRamiro">
					<h1>Dr Ramiro Silva</h1>
					<h3>Cirurgia e Traumatologia Buco Máxilo Facial</h3>
					<div className="photoRamiroImg">
						<img src="https://i.ibb.co/RgW6Qnk/foto-ramiro-cortada.jpg" alt="foto-ramiro-cortada" border="0"/>
					</div>
				</div>
			</div>

			<div class="card-group d-flex flex-wrap justify-content-space-around">
				<div class="card" id="cardOrtognatica">
					<img src="https://i.ibb.co/X8mLH68/Imagem-9-recortada2.jpg" alt="Imagem-9-recortada2" border="0"/>
					<div class="card-body">
						<h5 class="card-title">Cirurgia Ortognática</h5>
						<p class="card-text">A cirurgia ortognática é um procedimento cirúrgico utilizado para corrigir problemas relacionados à posição e alinhamento dos ossos da face e mandíbula. Essa cirurgia é realizada por um cirurgião maxilofacial e tem como objetivo melhorar tanto a estética quanto a funcionalidade da face.</p>
						<button type="button" class="btn btn-primary" onClick={() => navigate ("/ortognatica")}>Saiba mais...</button>
					</div>
				</div>
				<div class="card" id="remocaoSisos">
					<img src="https://i.ibb.co/h9R2kxx/siso-3d2.webp" alt="siso-3d2" border="0"/>
					<div class="card-body">
						<h5 class="card-title">Remoção de Dentes Inclusos</h5>
						<p class="card-text">A remoção de dentes inclusos é um procedimento odontológico realizado para extrair dentes que não conseguem erupcionar normalmente na boca. Esses dentes, também chamados de dentes impactados, ficam retidos dentro da gengiva ou osso, o que pode causar desconforto e problemas bucais.</p>
						<button type="button" class="btn btn-primary" onClick={() => navigate ("/remocao-sisos")}>Saiba mais...</button>
					</div>
				</div>
				<div class="card" id="quistos">
					<img src="https://i.ibb.co/6wwGTLp/Imagem-31-tratada.jpg" alt="Imagem-31-tratada" border="0"/>
					<div class="card-body">
						<h5 class="card-title">Remoção de Quistos</h5>
						<p class="card-text">A cirurgia de remoção de cistos da boca é um procedimento odontológico realizado para extrair cistos que se formam na boca. Os cistos são bolsas cheias de líquido que podem se desenvolver em diferentes áreas da boca, como na gengiva, no osso ou nos tecidos ao redor dos dentes.</p>
						<button type="button" class="btn btn-primary" onClick={() => navigate ("/remocao-quistos")}>Saiba mais...</button>
					</div>
				</div>
				</div>

				<div class="card-group d-flex flex-wrap justify-content-space-around" id="secondCardRow">
				<div class="card" id="oral">
					<img src="https://i.ibb.co/smjCq5h/Imagem-21.jpg" alt="Imagem-21" border="0"/>
					<div class="card-body">
						<h5 class="card-title">Cirurgia Oral</h5>
						<p class="card-text">A cirurgia oral é um procedimento realizado na boca e regiões próximas, envolvendo intervenções cirúrgicas para tratar uma variedade de condições bucais. Essas intervenções podem abordar desde a remoção de dentes impactados, tratamento de lesões, até correção de problemas ósseos e teciduais.</p>
						<button type="button" class="btn btn-primary" onClick={() => navigate ("/remocao-quistos")}>Saiba mais...</button>
					</div>
				</div>
				<div class="card" id="reabilitacaoImplantes" >
				<img src="https://i.ibb.co/86M3sPT/imagem-implantes-3d.webp" alt="imagem-implantes-3d" border="0"/>
					<div class="card-body">
						<h5 class="card-title">Cirurgia da Reabilitação sobre Implantes</h5>
						<p class="card-text">A cirurgia de reabilitação com implantes é um procedimento odontológico avançado que visa restaurar a função e estética bucal por meio da colocação de implantes dentários. Os implantes são estruturas de titânio inseridas no osso da mandíbula ou maxila para substituir dentes ausentes ou danificados.</p>
						<button type="button" class="btn btn-primary" onClick={() => navigate ("/reabilitacao-implantes")}>Saiba mais...</button>
					</div>
				</div>
				</div>
			
			<div className="row-tourism">
				<img src="https://i.ibb.co/7kYbHMs/medical-tourism.jpg" alt="medical-tourism" border="0"/>
				<div className="tourism-content">
					<h1>TURISMO DA SAÚDE</h1>
					<div className="tourismText text-center mt-3">
						<p>Portugal é um destino crescente no turismo de saúde, especialmente na área odontológica. A reputação de profissionais qualificados, instalações modernas e custos acessíveis atrai pacientes internacionais em busca de tratamentos dentários de alta qualidade.</p>
					</div>
					<button type="button" class="btn btn-danger" onClick={() => navigate ("/remocao-sisos")}>Saiba mais...</button>
				</div>
			</div>
			
		</div>
	);
};
