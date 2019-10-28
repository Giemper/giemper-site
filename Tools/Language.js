import React, { useState, useEffect } from 'react';

class Language extends React.Component {
    constructor () {
        super();
        [this.lang, this.setLang] = useState(0);
    }

    getLanguage() {
        return this.lang;
    }

    setLanguage(lang) {
        this.setLang(lang);
        document.cookie = "language=" + lang;
        console.log("Idioma nuevo: " + this.lang);
    }

    start() {
        useEffect(() => {
            const getter = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            this.setLanguage((getter === '')
                            ? '0'
                            : getter);
        });
    }
}

export default Language;