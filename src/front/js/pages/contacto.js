import React, {useState} from "react";
import Swal from 'sweetalert2';

import "../../styles/contactos.css";

const Contactos = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        create_user();
        navigate("/")
        console.log(name, email, object, message);
    }
    const create_user = () =>{

        if(name === '') {
            alert(' Name is Empty!')
        } else if(email === ''){
            alert('Email is empty!')
        } else if ( object === " "){
            alert("Object is empty")
        } else if ( message === " "){
            alert("Message is empty")
        }
        else {
            fetch(process.env.BACKEND_URL + `api/create-user`, { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, object, message }) 
        })
        .then((res) => res.json())
            Swal.fire({
                title: 'Boa!',
                text: 'O seu pedido de informações foi enviado com sucesso!',
                icon: 'info'
            })
        .then((result) => {            
                console.log(result);
        })
        .catch((err) => {
        console.log(err);
        })
        }
    }
    return (
            <div class="box-formulario">        
            
                <div class="formulario">
                    
                    <div class="title-form">
                    <h1><i class="fa-regular fa-comments"></i> Fale Conosco Agora</h1>
                    </div>
                    <form action="#" method="post">
                        <span>
                            <input 
                            type="text" 
                            class="input-slide" 
                            id="name" 
                            name="name" 
                            placeholder="Nome" 
                            autocomplete="off" 
                            required=""
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            />
                            <label for="name"><i class="fa-regular fa-user"></i> </label>
                        </span>
                        <span>
                            <input 
                            type="text" 
                            class="input-slide" 
                            id="email" 
                            name="email" 
                            placeholder="E-mail" 
                            autocomplete="off" 
                            required=""
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <label for="email"> <i class="fa-regular fa-envelope"></i> </label>
                        </span>
                        <span>
                            <input 
                            type="text" 
                            class="input-slide" 
                            id="object" 
                            name="object" 
                            placeholder="Assunto" 
                            autocomplete="off" 
                            required=""
                            value={object}
                            onChange={(e)=>{setObject(e.target.value)}}
                            />
                            <label for="object"><i class="fa-solid fa-question"></i> </label>
                        </span>
                        <span>
                            <textarea 
                                type="text" 
                                class="textarea-slide" 
                                id="message" 
                                name="message" 
                                rows="3" 
                                placeholder="Mensagem" 
                                autocomplete="off" 
                                required=""
                                value={message}
                                onChange={(e)=>{setMessage(e.target.value)}}
                                />
                            <label for="mensagem"><i class="fa-regular fa-comment-dots"></i> </label>
                        </span>
                        <div class="box-btn">
                            <button 
                                type="submit" 
                                class="btn-envia zoom-shadow"
                                onClick={handleSubmit}
                                >
                                <i class="fa-regular fa-paper-plane mr-5">Enviar</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Contactos;