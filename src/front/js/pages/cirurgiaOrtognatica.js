import React from "react";



import "../../styles/ortognatica.css";
import { useNavigate } from "react-router-dom";



const CirurgiaOrtognatica = () => {
    const navigate = useNavigate();
    
    return (
        <div className="content-ortgnatica">
            <h1 className="cirurgiaOrtognática mt-5 text-center">Cirurgia Ortognatica</h1>
            <div className="introduction">
                <div className="introducao-image">
                    <img src="https://i.ibb.co/4ZwPkJN/sorriso-feliz.jpg" alt="sorriso-feliz" border="0"/>
                </div>
                <p className="introduction-text">Você já imaginou um sorriso que não apenas ilumina o rosto, mas também transforma a forma como você se sente? Bem-vindo ao mundo da cirurgia ortognática, um incrível campo da odontologia e cirurgia que vai além do simples aprimoramento estético. É uma jornada de transformação que não apenas melhora a sua aparência, mas também restaura sua confiança e qualidade de vida.</p>
            </div>
            <div className="esqueleto-part">
                <p className="cirurgia-text">Imagine poder corrigir aquele desalinhamento facial que sempre o incomodou - seja uma mandíbula que parece fora de lugar, um maxilar desalinhado ou uma mordida que não se encaixa como deveria. A cirurgia ortognática é a chave para resolver esses problemas, proporcionando um rosto mais harmonioso e uma oclusão dentária perfeita.

                Essa cirurgia entra em cena quando a ortodontia sozinha não é suficiente para corrigir irregularidades faciais significativas. Em situações onde o alinhamento dos dentes não é o único problema, a cirurgia ortognática oferece uma solução completa. Se você sofre com dificuldades para mastigar, falar ou até mesmo respirar devido à sua estrutura facial desalinhada, este procedimento pode ser a resposta para os seus problemas.
                </p>
                <div className="esqueleto-image">
                    <img src="https://i.ibb.co/BBC0Md8/exemplo-esqueleto.webp" alt="exemplo-esqueleto" border="0"/>
                </div>
            </div>
            <div className="photos">
                <div className="exemplo-image1">
                    <a href="https://i.ibb.co/PzhBQ9X/Imagem-9-recortada2.jpg" target="_blank">
                        <img src="https://i.ibb.co/PzhBQ9X/Imagem-9-recortada2.jpg" alt="Imagem-9-recortada2" border="0" />
                    </a>
                </div>
                <div className="exemplo-image2">
                    <a href="https://i.ibb.co/VpYRycz/Imagem-7-recortada.jpg" target="_blank">
                        <img src="https://i.ibb.co/VpYRycz/Imagem-7-recortada.jpg" alt="Imagem-7-recortada" border="0" />
                    </a>
                   
                </div>
                <div className="exemplo-image3">
                    <a href="https://i.ibb.co/Tc1FzC1/Imagem-11-recortada.jpg" target="_blank">
                        <img src="https://i.ibb.co/Tc1FzC1/Imagem-11-recortada.jpg" alt="Imagem-11-recortada" border="0" />
                    </a>
                </div>
            </div>
            <div className="final-text">
                <p className="cirurgia-text2">A maravilha da cirurgia ortognática está em sua capacidade de redefinir e reequilibrar os traços faciais, muitas vezes impactando positivamente a sua respiração, fala e, claro, sua aparência. Avançar ou recuar mandíbulas e maxilares, corrigir mordidas abertas ou profundas, alinhar um queixo desalinhado - tudo isso é possível e mais. É uma verdadeira revolução, não apenas para o seu sorriso, mas para a sua autoestima.
                </p>
                <p className="cirurgia-text3">A cirurgia ortognática é um procedimento complexo que requer um cirurgião oral e maxilofacial altamente qualificado. O Dr. Paulo Coelho é um especialista em cirurgia ortognática, com anos de experiência e um histórico de sucesso. Ele é um dos poucos cirurgiões orais e maxilofaciais do Brasil que é membro da Academia Americana de Cirurgia Ortognática e Ortodontia. Ele também é membro da Sociedade Brasileira de Cirurgia e Traumatologia Buco-Maxilo-Facial e da Associação Brasileira de Cirurgia Ortognática e Ortodontia.</p> 
                <p className="cirurgia-text4">Por meio dessa cirurgia, você não apenas transforma sua face, mas também transforma sua história. Sua jornada para um sorriso brilhante e uma vida mais plena está apenas a um passo de distância.</p>
            </div>
            <div className="moreInfo">
                <button className="btn-more-info" 
                data-toggle="modal" 
                data-target="#exampleModalCenter"
                onClick={() => navigate("/contactos")}>Quer saber mais...?</button>
            </div>
        </div>

    );
};

export default CirurgiaOrtognatica;