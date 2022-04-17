const htmlToText = (text) => {
    return text?.replace(/<[^>]+>/g, '');
};

export { htmlToText };
