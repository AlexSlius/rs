export const theFirstHeaderCharacter = (str) => {
    const firstChar = str.charAt(0);
    return str.replace(firstChar, firstChar.toUpperCase());
}

