const species = ['human', 'mozopor', 'gammano', 'tillona'];
const profession = ['Sky Researcher', 'Teacher', 'Stay Home Parent', 'Fired', 'Business Person'];

const speciesSelected = () => {
    let yourSpecies = species[Math.floor(Math.random()*3)]
    return yourSpecies
};


const professionSelected = () => {
    let yourProfession = profession[Math.floor(Math.random()*4)]
    return yourProfession
};

const giveMessage = () => {
    let num = Math.floor(Math.random()*100);
    let messageProfession = professionSelected();
    let messageSpecie = speciesSelected();
    console.log(`In your previous life, you were a ${messageSpecie}. Your profession was ${messageProfession} and you died at the age of ${num}.`);
};

giveMessage()