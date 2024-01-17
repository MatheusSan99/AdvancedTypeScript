let guitar = { manufacturer: 'Ibanez', type : 'Jem 777', strings : 6 };

// One way that we could deconstruct this is by using the following:

const manufacturer = guitar.manufacturer;
const type = guitar.type;
const strings = guitar.strings;
// While this works, it's not very elegant and there's a lot of repetition. Fortunately, TypeScript adopts the JavaScript syntax for a simple deconstruction like this, which provides a much neater syntax:

// let {manufacturer, type, strings} = guitar;

// the original method of destructuring an array relied on the variable being associated with an item at a certain index in the array:

const instruments = [ 'Guitar', 'Violin', 'Oboe', 'Drums' ];
const gtr = instruments[0];
const violin = instruments[1];
const oboe = instruments[2];
const drums = instruments[3];
// Using array destructuring, we can change this syntax to be much more concise, as follows:

// let [ gtr, violin, oboe, drums ] = instruments;
// Knowing that the TypeScript team are good at providing us with a consistent and logical experience, it should come as no surprise that we can also apply REST properties to arrays, using similar syntax:

// let [gtr, ...instrumentslice] = instruments;