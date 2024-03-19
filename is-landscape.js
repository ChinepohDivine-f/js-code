function isLandscape(width, height) {
    return width > height;
    // there is no reason to pass true or false as js will automatically return the required boolean variable for the condition
}

console.log("Is the image landscape:", isLandscape(1080, 960));
