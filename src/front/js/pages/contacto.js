import React from "react";

import "../../styles/contactos.css";

const Contactos = () => {
    return (
            <div class="box-formulario">        
            
                <div class="formulario">
                    
                    <div class="title-form">
                    <h1><i class="fa-regular fa-comments"></i> Fale Conosco Agora</h1>
                    </div>
                    <form action="#" method="post">
                            
                        <span>
                            <input type="text" class="input-slide" id="nome" name="nome" placeholder="Nome" autocomplete="off" required=""/>
                            <label for="nome"><i class="fa-regular fa-user"></i> </label>
                        </span>
                        <span>
                            <input type="text" class="input-slide" id="email" name="email" placeholder="E-mail" autocomplete="off" required=""/>
                            <label for="email"> <i class="fa-regular fa-envelope"></i> </label>
                        </span>
                        <span>
                            <input type="text" class="input-slide" id="assunto" name="assunto" placeholder="Assunto" autocomplete="off" required=""/>
                            <label for="assunto"><i class="fa-solid fa-question"></i> </label>
                        </span>
                        <span>
                            <textarea type="text" class="textarea-slide" id="mensagem" name="mensagem" rows="3" placeholder="Mensagem" autocomplete="off" required=""></textarea>
                            <label for="mensagem"><i class="fa-regular fa-comment-dots"></i> </label>
                        </span>
                        <div class="box-btn">
                            
                            <button type="submit" class="btn-envia zoom-shadow">
                                <i class="fa-regular fa-paper-plane mr-5">  Enviar</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Contactos;