const htmlToText = (text) => {
    return text?.replace(/<[^>]+>/g, '').replace('&nbsp;', '');
};

export { htmlToText };
