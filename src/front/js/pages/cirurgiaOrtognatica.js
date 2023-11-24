import React from "react";
import { useTranslation } from "react-i18next";



import "../../styles/ortognatica.css";
import { useNavigate } from "react-router-dom";



const CirurgiaOrtognatica = () => {
    const navigate = useNavigate();
    const {t} = useTranslation()
    
    return (
        <div className="content-ortognatica">
            <h1 className="cirurgiaOrtognática mt-5 text-center">{t("CirurgiaOrtognatica")}</h1>
            <div className="introductionOrtognatica">
                <div className="introducaoImageOrtognatica">
                    <img src="https://i.ibb.co/4ZwPkJN/sorriso-feliz.jpg" alt="sorriso-feliz" border="0"/>
                </div>
                <p className="introductionTextOrtognatica">
                    {t("JáImaginouUmSorrisoQueTransforma")}
                        <br/><br/>
                    {t("BemVindoAoMundoDaCirurgiaOrtognática")}
                        <br/><br/>
                    {t("UmaJornadaDeTransformação")}
                </p>
            </div>
            <div className="esqueletoPart">
                <div className="cirurgiaText">
                    <p>
                        {t("ImaginePoderCorrigir")}
                            <br/><br/>
                        {t("EssaCirurgiaEntraEmCena")}
                            <br/><br/>
                        {t("SeSofreComDificuldadeEmMastigar")}
                    </p>
                </div>
                <div className="esqueletoImage">
                    <img src="https://i.ibb.co/BBC0Md8/exemplo-esqueleto.webp" alt="exemplo-esqueleto" border="0"/>
                </div>
            </div>
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
            <div className="finalTextOrtognatica">
                <p className="cirurgia-text2">
                    {t("AMaravilhaDaOrtognáticaEstáNaCapacidade")}
                        <br/>
                    {t("AvançãrOuRecuarMandibulas")}
                </p>
                <p className="cirurgia-text4">
                    {t("TransformaASuaHistoria")}
                        <br/>
                    {t("JornadaParaUmSorrisoBrilhante")}
                </p>
            </div>
            <div className="moreInfo">
                <button className="btnOrtognatica" 
                data-toggle="modal" 
                data-target="#exampleModalCenter"
                onClick={() => navigate("/contactos")}>{t("QuerSaberMais?")}</button>
            </div>
        </div>

    );
};

export default CirurgiaOrtognatica;