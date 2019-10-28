class VALUES_NAVBAR {
    constructor() {
        this.sections = [
            { title: ["Home", "Inicio"], id: "nav_home" },
            { title: ["Who am I?", "¿Quien soy?"], id: "nav_who" },
            { title: ["Skills", "Habilidades"], id: "nav_skill" }, 
            { title: ["Experience", "Experiencia"], id: "nav_exp" },
            { title: ["Education", "Educación"], id: "nav_edu"}
        ];
    }

    getValueLanguage(spot, lang) {
        return this.sections[spot].title[lang];
    }
}

export default VALUES_NAVBAR;