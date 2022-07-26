// Memory game functions

//Shuffling Cards
export const shuffleCards = cards => {
    let d = cards.length;
    let t;
    let i;

    //shuffle loop
    while (d) {
        //select a remaining element 
        i = Math.floor(Math.random() * d--);

        // swap with current element 
        t = cards[d];
        cards[d] = cards[i];
        cards[i] = t;
    }

    return cards;
}


//Create a data object for each image
export const getFormedData = data => {
    return data.map((pic, index) => ({
        id: index,
        url: pic.src.small,
        isShown: false,
        isFound: false,
    }))
};


//Create a "twin" of each obtained image
export const getPairedPics = data => {
    return data.reduce((img, i) => img.concat(i, i), []);
};


//Extend existing information with uniqueId key
export const addUniqueIds = data => {
    return data.map((entry, i) => ({
        ...entry,
        uniqueId: i,
    }));
};