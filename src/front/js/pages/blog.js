import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


import "../../styles/blog.css";

const Blog = () => {

    const navigate = useNavigate()
    const  {t} = useTranslation();

    return (
        <div className="containerAllArticles">
            <h1 className="pageTitle mt-5 text-center">{t("ArtigosInteressantes")}</h1>
                <div className="containerOneArticle d-flex flex-wrap justify-content-center">
                    <div className="row d-flex flex-wrap" id="firstRowBlog">
                        <div className="col-4">
                            <div className="bullingArticle">
                                <h2 className="bullingTitle">{t("BullingOrtognatica")}</h2>
                                <div className="bullingImage">
                                    <img src="https://i.ibb.co/Smrb8Z8/bulling-compressed.jpg" alt="bulling-compressed" border="0"/>
                                </div>
                                    <p className="articleDescription text-center">
                                        {t("RelaçãoEntreBullingEOrtognatica")}
                                    </p>
                                    <a 
                                        href="https://minhaortognatica.com.br/bullying-e-ortognatica/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="buling-link text-center"
                                    >
                                        {t("LeiaMais")}
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <button type="button" class="buttonBack" onClick={() => navigate ("/")}>{t("Voltar")}</button>
                    </div>
                </div>
        </div>
    );
};

export default Blog;