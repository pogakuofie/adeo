const htmlToText = (text) => {
    return text
        ?.replace(/<[^>]+>/g, '')
        .replace('&nbsp;', '')
        .replace('&cent;', '');
};

export { htmlToText };
