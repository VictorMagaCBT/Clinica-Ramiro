import React from "react";

import "../../styles/blog.css";

const Blog = () => {
    return (
        <div className="containerAllArticles">
            <h1 className="pageTitle mt-5 text-center">Artigos Interessantes</h1>
            <div className="containerOneArticle d-flex flex-wrap justify-content-center">
                <div className="row d-flex flex-wrap" id="firstRowBlog">
                    <div className="col-4">
                        <div className="bullingArticle">
                            <h2 className="bullingTitle">Bulling e Ortognática</h2>
                            <div className="bullingImage">
                                <img src="https://i.ibb.co/Smrb8Z8/bulling-compressed.jpg" alt="bulling-compressed" border="0"/>
                        </div>
                        <p className="articleDescription text-center">A relação entre bullying e cirurgia ortognática é uma narrativa sensível e impactante. Descubra como a autoestima e a qualidade de vida podem ser transformadas através da harmonização facial, liberando confiança e superando as marcas emocionais do passado. Vamos explorar como essa intervenção pode não apenas melhorar a estética facial, mas também criar uma nova perspectiva de vida para muitos que enfrentaram desafios devido ao bullying.</p>
                        <a href="https://minhaortognatica.com.br/bullying-e-ortognatica/" target="_blank" rel="noopener noreferrer" className="buling-link text-center">Leia mais...</a>
                    </div>
                
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;