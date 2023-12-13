import React from "react";

import "../../../styles/whatsappButton.css";

const WhatsAppButton = ({ phone_number, text }) => {

     phone_number = "+351969564324";
     text = "Olá, posso ajudar?";

  return (
    <div className="whatsappButton">
        <img src="https://i.ibb.co/TPqgKhc/whats-App-Logo.jpg" alt="WhatsApp" width="75" height="75" />
        <button onClick={() => {
            window.open("https://wa.me/" + phone_number, "_blank");
        }}>
         {text}
        </button>
    </div>
  );
};

export default WhatsAppButton;