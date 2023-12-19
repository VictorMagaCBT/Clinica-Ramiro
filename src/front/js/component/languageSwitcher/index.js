
import {useTranslation} from "react-i18next";
import React, { useState, useRef, useEffect} from "react";
import pt from "./flag/pt.png";
import fr from "./flag/fr.png";
import en from "./flag/en.png";


const LanguageOptions = [
    {
        name: "PT",
        value: "pt",
        flag: pt
    },
    {
        name: "FR",
        value: "fr",
        flag: fr
    },
    {
        name: "EN",
        value: "en",
        flag: en
    }
]

export const LanguageSwitcher = () => {
    const {t, i18n} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState({ name: "PT", flag: pt });

    const dropdownRef = useRef();

   

    useEffect(() => {;
        // Tente obter a preferência do idioma armazenada no localStorage
            const storedLanguage = localStorage.getItem("selectedLanguage");
        
            // Se a preferência do idioma existir no localStorage, aplique-a
            if (storedLanguage) {
            const parsedLanguage = JSON.parse(storedLanguage);
            i18n.changeLanguage(parsedLanguage.value);
            setSelectedLanguage(parsedLanguage);
            } 

            const defaultLanguage = LanguageOptions[0];
            i18n.changeLanguage(defaultLanguage.value);
            localStorage.setItem("selectedLanguage", JSON.stringify(defaultLanguage));
    
      }, [i18n]);


    const handleLanguageChange = (language) => {
        console.log("handleLanguageChange: language", language);
        i18n.changeLanguage(language.value);
        setSelectedLanguage(language);

        if (dropdownRef.current) {
            const bootstrapDropdown = new window.bootstrap.Dropdown(dropdownRef.current);
            bootstrapDropdown.hide();
        }
    };



    return (
        <div className="btn-group dropdown d-flex flex-wrap" id="language">
                <button 
                    type="button" 
                    className="btn-navbar dropdown-toggle" 
                    data-bs-toggle="dropdown" 
                    data-bs-auto-close="outside" 
                    id="dropdownMenuClickableInside" 
                    aria-expanded="false" 
                    ref={dropdownRef}
                >
                    <span>{selectedLanguage.name}</span>
                    <img src={selectedLanguage.flag} alt={selectedLanguage.name} />
                </button>
                    <ul className="dropdown-menu btn-sm" id="dropdownGroupMaps" aria-labelledby="dropdownMenuClickableInside" style={{ minWidth: 'auto', width: '45px' }}>
                    {LanguageOptions.map((language) => {
                            return (
                                <li key={language.value}>
                                    <a className="dropdown-item d-flex" id="dropdownMaps" 
                                        onClick={() => handleLanguageChange(language)
                                    }>
                                        <img src={language.flag} alt={language.name} />
                                        <span>{language.name}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
            </div>
    )
}
