const checkItem = (object, lang) => {
    if (Array.isArray(object))
        return object[lang];
    return object;
}

export default checkItem;