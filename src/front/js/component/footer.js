import React from "react";



export const Footer = () => (
	<footer class="text-white text-center text-lg-start bg-dark">
    
    <div class="container p-4">
     
      <div class="row mt-4">
        
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">CLÍNICA DENTÁRIA DR. RAMIRO SILVA</h5>

          <p>
          A Clínica Dentária Ramiro Silva, em Celorico de Basto, Portugal, 
          destaca-se como pioneira na região, oferecendo excelência em cirurgia 
          ortognática e serviços de turismo de saúde odontológica.
          </p>

          <p>
          Proporcionamos cuidados inovadores para o seu sorriso e bem-estar oral
          </p>

        </div>
       

        
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4 mx-2" >LOCALIZAÇÃO</h5>

          <ul class="fa-ul" style={{marginleft: "1.65em"}}>
            <li class="mb-3">
              <span class="fa-li">
                <i class="fas fa-home"></i>
                </span><span class="ms-2"> 
                Avenida João Pinto Ribeiro,
			          4890-221, Celorico de Basto
			   	        <br/>
			          Portugal
				      </span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">contact@example.com</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 351  255 323 189</span>
            </li>
          </ul>
        </div>
        

        
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Opening hours</h5>

          <table class="table text-center text-white">
            <tbody class="fw-normal">
              <tr>
                <td>Mon - Fri:</td>
                <td>8am - 7pm</td>
              </tr>
              <tr>
                <td>Sat:</td>
                <td>8am - 1am</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
      
    </div>
    

    
    <div class="text-center p-3" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright: {""}
      <p class="text-white">Clínica Dentária Dr Ramiro Silva</p>
    </div>
    
  </footer>
);


