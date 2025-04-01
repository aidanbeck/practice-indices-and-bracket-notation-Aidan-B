let library = [
    ["The Hunger Games", "Dracula", "To The Lighthouse"],
    ["Black Sails", "The Last of Us", "Severance"],
    ["The Handmaid's Tale", "Frankenstein", "Jurassic Park"],
]

for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        console.log(library[i][j]);
    }
}

for (row = 0; row < 3; row++) {
    for (item = 0; item < 3; item++) {
        console.log(library[row][item]);
    }
}

for (i = 0; i < 3; i++) {
    console.log(library[1][i]);
}