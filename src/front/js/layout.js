import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Home from "./pages/home";
import injectContext from "./store/appContext";
import Equipa from "./pages/equipa";
import CirurgiaOrtognatica from "./pages/cirurgiaOrtognatica";
import Contactos from "./pages/contacto";
import Oral from "./pages/oral";
import Implantes from "./pages/reabilitaçãoSobreImplantes";
import RemocaoQuistos from "./pages/remocaoQuistos";
import RemocaoSisos from "./pages/remocaoSisos";    
import SobreNos from "./pages/sobreNos";
import Clinica from "./pages/clinica";
import TurismoDaSaude from "./pages/turismoDaSaude";
import Blog from "./pages/blog";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<CirurgiaOrtognatica />} path="/ortognatica" />
                        <Route element={<SobreNos />} path="/sobreNos" />
                        <Route element={<Clinica />} path="/clinica" />
                        <Route element={<Equipa />} path="/equipa" />
                        <Route element={<TurismoDaSaude />} path="/turismo-da-saude" />
                        <Route element={<RemocaoSisos />} path="/remocao-sisos" />
                        <Route element={<RemocaoQuistos />} path="/remocao-quistos" />
                        <Route element={<Oral />} path="/cirurgia-oral" />
                        <Route element={<Implantes />} path="/implantes" />
                        <Route element={<Contactos />} path="/contactos" />
                        <Route element={<Blog />} path="/blog" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
