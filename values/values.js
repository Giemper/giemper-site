class Values {
    constructor () { }

    checkItem(object, lang) {
        if (Array.isArray(object))
            return object[lang];
        return object;
    }
}

export default Values;