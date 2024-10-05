import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

import "../../styles/contactos.css";


const Contactos = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [date, setDate] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');
    //const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const {t} = useTranslation();

    /*useEffect(() => {
        if (isSubmitted) {
            navigate("/"); // Redireciona para a homepage após a submissão
        }
    }, [isSubmitted, navigate]);*/


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!name || !email || !object || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
            try {
                await create_user(); 
                console.log ("user criado")// Espera a criação do usuário no backend
                await emailSend(); // Envio do e-mail após a criação do usuário
                console.log ("email enviado")
                Swal.fire({
                    title: 'Boa!',
                    text: 'O seu pedido de informações foi enviado com sucesso!',
                    icon: 'info'
                });
                navigate("/");
                //setIsSubmitted(); // Navegação para a página inicial após o envio do e-mail
            } catch (error) {
                console.error('Erro ao enviar o pedido:', error);
            }
        }
        console.log(name, email, object, message);
    }

    const create_user = async () =>{
        try {       
             const response = await fetch(process.env.BACKEND_URL + `api/create-user`, { 
                    method: "POST", 
                    headers: { 
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, object, message, country, phone_number, date}) 
                })
                const result = await response.json();
                console.log(result);
        
                Swal.fire({
                    title: 'Boa!',
                    text: 'O seu pedido de informações foi enviado com sucesso!',
                    icon: 'info'
                });
        
            } catch (err) {
                console.error('Erro ao criar usuário:', err);
            }
        }

    const emailSend = async() => {
        const emailData = {
            from_name: name,
            object: object,
            message: message,
            country: country,
            date: date,
            phone_number: phone_number,
            email: email,
        };
      
        try {
            const response = await emailjs.send('service_t5uv50u', 'template_2k2almr', emailData, 'AQ-Xn8iGM5XTMOyr6');
            console.log('E-mail enviado com sucesso:', response);
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            throw error; // Rejeita a promessa para indicar erro
        }
    };

   

    return (
            <div class="box-formulario">        
            
                <div class="formulario">
                    
                    <div class="title-form">
                    <h1><i class="fa-regular fa-comments"></i>{t("FaleConnoscoAgora")}</h1>
                    </div>
                    <form action="#" method="post" id="complete-form" onSubmit={handleSubmit}>
                        <div class="row-form">
                            <div class="left-part">
                                <span>
                                    <input 
                                    type="text" 
                                    class="input-slide" 
                                    id="name" 
                                    name="name" 
                                    placeholder={t("Nome")}
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
                                    id="country" 
                                    name="country" 
                                    placeholder={t("País")} 
                                    autocomplete="off" 
                                    required=""
                                    value={country}
                                    onChange={(e)=>{setCountry(e.target.value)}}
                                    />
                                    <label for="country"><i class="fa-solid fa-earth-europe"></i></label>
                                </span>
                                <span>
                                    <input 
                                    type="text" 
                                    class="input-slide" 
                                    id="phone_number" 
                                    name="phone_number"  
                                    placeholder={t("Contacto")} 
                                    autocomplete="off" 
                                    required=""
                                    value={phone_number}
                                    onChange={(e)=>{setPhone_number(e.target.value)}}
                                    />
                                    <label for="phone_number"><i class="fa-solid fa-mobile-screen"></i></label>
                                </span>
                                <span>
                                    <input 
                                    type="text" 
                                    class="input-slide" 
                                    id="date" 
                                    name="date"  
                                    placeholder={t("Data")}
                                    autocomplete="off" 
                                    required=""
                                    value={date}
                                    onChange={(e)=>{setDate(e.target.value)}}
                                    />
                                    <label for="date"><i class="fa-regular fa-calendar"></i></label>
                                </span>
                            </div>
                            <div class="right-part">
                                <span>
                                    <input 
                                    type="text" 
                                    class="input-slide" 
                                    id="email" 
                                    name="email" 
                                    placeholder="e-mail" 
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
                                    placeholder={t("Assunto")} 
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
                                        placeholder={t("Mensagem")} 
                                        autocomplete="off" 
                                        required=""
                                        value={message}
                                        onChange={(e)=>{setMessage(e.target.value)}}
                                        />
                                    <label for="mensagem"><i class="fa-regular fa-comment-dots"></i> </label>
                                </span>
                            </div>
                        </div>
                        <div class="box-btn">
                            <button 
                                type="submit" 
                                class="btn-envia zoom-shadow"
                                
                                >
                                <i class="fa-regular fa-paper-plane"> {t("Enviar")}</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Contactos;