function setTime(start, end = Date.now()) {
    const total = end / 1000 - start / 1000;
    const minuite = pad(parseInt(total / 60));
    const seconds = pad(total % 60);

    return `${minuite}:${seconds}`;
}

function pad(number) {
    if (number < 10) {
        return `0${parseInt(number)}`;
    } else {
        return `${parseInt(number)}`;
    }
}

export { setTime };
