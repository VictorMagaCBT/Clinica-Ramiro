import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
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
			
		</div>
	);
};
