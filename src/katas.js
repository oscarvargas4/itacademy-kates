// Solution: https://github.com/StratocasterO/katas-it-academy/blob/master/2021_11_24/katas_sol.js
//* ------------------------ Variables --------------------------

console.log("----------------- Exercicis de variables ---------------");

// exercici 1: intercanvi de variables

var primer, segon;

primer = 1;

segon = 2;

// TODO: aquí el teu codi
const arrayHolder = [];
arrayHolder[0] = segon;
arrayHolder[1] = primer;
primer = arrayHolder[0];
segon = arrayHolder[1];

console.log(primer,segon);  // ha de mostrar 2 1



//* ------------------------- Funcions --------------------------

console.log("----------------- Exercicis de funcions ---------------");

// exercici 2: defineix una funció psicologo() que et pregunti "Com estàs?" al executar-la

// TODO: aquí la definició de psicolog() 
const psicologo = () => {
    console.log("Com estàs?");
}

psicologo();


// exercici 3: defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"

// TODO: aquí la definició de pregunta() 
const pregunta = (variable) => {
    console.log(`T'agrada ${variable}`);
}

pregunta("la pizza");


// exercici 4: defineix una funció pregunta2() que et retorni "T'agrada la pizza"
// quan li introduim com a paràmentre "la pizza"

// TODO: aquí la definició de pregunta2() 
const pregunta2 = (variable) => {
    return `T'agrada ${variable}`
}

console.log(pregunta2("la pizza") + " amb piña?");


// exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"

var m3 = 8;

// TODO: aquí les definicions de metresCubicsALitres() i mostrarSolució() 
const metresCubicsALitres = (metresCubics) => {
    return metresCubics*1000
}

const mostrarSolució = () => {
    const litres = metresCubicsALitres(m3);
    console.log(`${m3} metres cúbics són ${litres} litres`)
}

mostrarSolució();


// exercici 6: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

var diners = 0;

// TODO: definició de afegirDiners() i gastarDiners() 
const afegirDiners = (number) => {
    diners = diners + number;
}

const gastarDiners = (number) => {
    diners = diners - number;
}

afegirDiners(20);
gastarDiners(15);
afegirDiners(40);
gastarDiners(25);

console.log(diners); // això retornarà 20



//* ------------------------------ Condicionals --------------------------------

console.log("----------------- Exercicis de condicionals ---------------");

// exercici 7: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
// quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida

// var talla = prompt("Indica la talla de samarreta que vols comprar (S,M,L,XL)")  // TODO: editar el missatge del prompt()

// TODO: estructura condicional que digui per la consola la talla escollida
// if (talla == "S" || talla == "M" || talla == "L" || talla == "XL") {
//     console.log("Talla sel·leccionada: ", talla);
// } else {
//     console.log("Talla sel·leccionada: ", "no és válida");
// }


// exercici 8: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
// de la cosa calculada
var radi = 5;
var mode = "P"; // "P" pel perímentre o "A" per l'àrea

// TODO: defineix la funció cercle amb dos modes
const cercle = (radi, mode) => {
    if(mode == "P") {
        console.log(2*Math.PI*radi)
    } else {
        console.log(Math.PI*Math.pow(radi,2));
    }
}

// cercle(radi, mode);


// exercici 9: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)

var costat = 3;
var costats = 5;

// TODO: defineix la funció poligon()

const poligon = (costat, costats) => {
    var perimetro = costat * costats;
    var apotema = 0.5 / Math.tan((Math.PI/costats)/2);
    var area = perimetro * apotema / 2;

    console.log(`Area = ${area}, Perimetro = ${perimetro}`);
}

// poligon(costat, costats);


// exercici 10: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
// que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
// (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
// amb tota la informació per pintar-la en un console.log()

// TODO: defineix la funció botiga()


const botiga = () => {
    var optionOne = prompt("quin item vols (samarreta, pantaló i barret)");
    if (optionOne == "barret") {
        var optionTwo = prompt("sel·leccionar el tipus (copa, pirata, gorra, llana)");
        return `Has sel.leccionat ${optionOne} de tipus ${optionTwo}`;
    } else {
        var optionTwo = prompt("indica un color)");
        var talla = prompt("sel·leccionar la talla (S, M, L, XL)");
        return `Has sel.leccionat ${optionOne} de color ${optionTwo} y talla ${talla}`;
    }
}

//! var carrito = botiga();

//! console.log(carrito);  // això tornarà "Has demanat un barret de pirata (talla L)"



//* ---------------------------- Mètodes numbers -------------------------------

console.log("----------------- Exercicis de numbers ---------------");

// exercici 11: defineix una funció calculadora que agafi com a paràmentres una operació i un o dos números 
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, **, sqrt i cbrt)

// TODO: defineix la funció calculadora() (reutilitza la que vam fer a classe fa uns dies)

function calculadora(num1, num2) {
    var simbols = ["+","-","*","/","sqrt","cbrt"]
    var sim = prompt("simbol")

    if (num1 && num2) {
        if (simbols.indexOf(sim) != -1) {
            switch (sim) {
                case "+":
                    console.log(num1 + num2);
                    break;
                case "-":
                    console.log(num1 - num2);
                    break;
                case "*":
                    console.log(num1 * num2);
                    break; 
                case "/":
                    console.log(num1 / num2);
                    break;  
                case "sqrt":
                    console.log(Math.sqrt(num1));
                    break; 
                case "cbrt":
                    console.log(Math.cbrt(num1));
                    break;         
            }
        } else {
            console.log("Incorrect simbol")
        }
    }

    if (!num2) {
        if (simbols.indexOf(sim) != -1) {
            switch (sim) {
                case "+":
                    console.log(num1 + num1);
                    break;
                case "-":
                    console.log(num1 - num1);
                    break;
                case "*":
                    console.log(num1 * num1);
                    break; 
                case "/":
                    console.log(num1 / num1);
                    break; 
                case "sqrt":
                    console.log(Math.sqrt(num1));
                    break;
                case "cbrt":
                    console.log(Math.cbrt(num1));
                    break;             
            }
        } else {
            console.log("Incorrect simbol")
        }
    }
}

//! calculadora(1, 2);
//! calculadora(3);

// exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle aplicant el
// teorema de Pitàgores (a**2 == b**2 + c**2 és "true" pels triangles rectangles quan "a" és el seu costat més llarg)

var c1, c2, c3;

c1 = 3;
c2 = 4;
c3 = 5;

//! console.log(triangleRectangle(c1,c2,c3));  // ha de tornar true

c1 = 4;
c2 = 5;
c3 = 6;

//! console.log(triangleRectangle(c1,c2,c3));  // ha de tornar false

function triangleRectangle(a,b,c) {
    let triangleArray = [a,b,c];
    maxValue = 0;
    for (let i = 0; i < triangleArray.length; i++) {
        if (triangleArray[i] > maxValue) {
            maxValue = triangleArray[i];
        }
    }

    let c1 = 0;
    for (let i = 0; i < triangleArray.length; i++) {
        if (triangleArray[i] != maxValue) {
            c1 = triangleArray[i];
        }
    }
    let c2 = 0;
    for (let i = 0; i < triangleArray.length; i++) {
        if (triangleArray[i] != maxValue && triangleArray[i] != c1) {
            c2 = triangleArray[i];
        }
    }

    if (maxValue**2 == c1**2 + c2**2) {
        return true;
    } else {
        return false
    }

}

// TODO: defineix la funció triangleRectangle()


// exercici 13: a partir de dos catets, calcula la hipotenusa i els angles d'un triangle rectangle
// PISTA: les funcions trigonomètriques estan definides a l'objecte Math

c1 = 30;
c2 = 40;

// TODO: defineix la funció calculaHipotenusa()
function calculaHipotenusa(c1,c2) {
    const hipotenusa = Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2));
    return hipotenusa;
}

// TODO: defineix la funció calculaAngles()
function calculaAngles(c1,c2) {
    const angle1 = (Math.asin(c1/calculaHipotenusa(c1,c2)) * (180 / Math.PI)).toFixed(2); // (180 / Math.PI) --> Radians to Degrees;
    const angle2 = (Math.asin(c2/calculaHipotenusa(c1,c2)) * (180 / Math.PI)).toFixed(2);

    return `${angle1} & ${angle2}`;
}

//! console.log(calculaHipotenusa(c1,c2));  // ha de donar 50
//! console.log(calculaAngles(c1,c2));      // ha de donar 53.13º i 36.87º

//* ---------------------------- Mètodes strings -------------------------------

console.log("----------------- Exercicis de strings ---------------");

//! ⚠️ en aquests exercicis no s'hi val usar el mètode .split() a no ser que s'indiqui el contrari ⚠️

// exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"

// TODO: defineix la funció convertirEnEnter()

// ? function convertirEnEnter(someString) {
// ?    const digits = someString.match(/\d+/g);
// ?    return digits[0];
// ? }

// function convertirEnEnter(someString) {
//     const digitsArray = someString;
//     let number = "";
//     for (let i = 0; i < digitsArray.length; i++) {

//         if (digitsArray[i] == ".") {
//             number += ".";
//         } else if (!isNaN(digitsArray[i])) {
//             number += "" + digitsArray[i];
//         }
//     }
//     const finalNumber = Math.floor(number);
//     return finalNumber;
// }


//! console.log(convertirEnEnter("hola89234"));     // ha de tornar 89234
//! console.log(convertirEnEnter("43.35465adeu"));  // ha de tornar 43
//! console.log(convertirEnEnter("amor45.9odi"));   // ha de tornar 45


// exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
// i accepti com a separador decimal els símbols ",", "." i "'"
// p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

// TODO: defineix la funció convertirEnDecimal()

function convertirEnDecimal(someString) {
    const digitsArray = someString;
    let number = "";
    for (let i = 0; i < digitsArray.length; i++) {

        if (digitsArray[i] == "." || digitsArray[i] == "'") {
            number += ".";
        } else if (!isNaN(digitsArray[i])) {
            number += "" + digitsArray[i];
        }
    }
    const finalNumber = Number(number);
    return finalNumber;
}

//! console.log(convertirEnDecimal("hola89'234"));     // ha de tornar 89.234
//! console.log(convertirEnDecimal("43'35adeu"));      // ha de tornar 43.35
//! console.log(convertirEnDecimal("amor45.9odi"));    // ha de tornar 45.9


// exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
// canviat de signe si és negatiu (2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()

// TODO: defineix la funció valorAbsolut()
function valorAbsolut(value) {
    const absolutValue = Math.abs(value);
    return absolutValue;
}


//! console.log(valorAbsolut(-3.14));        // ha de tornar 3.14
//! console.log(valorAbsolut(0));            // ha de tornar 0
//! console.log(valorAbsolut(1234.5678));    // ha de tornar 1234.5678
//! console.log(valorAbsolut(-1234.5678));   // ha de tornar 1234.5678



// exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
// de puntuació)

var lletres = "aaaaabcdef!?*";



//! console.log(lletraRandom(lletres));     // torna una lletra entre la a i la f

// TODO defineix la funció lletraRandom()
function lletraRandom(lletres) {
    var char = "";
    do {
        char = lletres[Math.floor(Math.random() * (lletres.length - 1))] // Random with interval array.lenght: Math.random() * (max - min) + min;
    } while (char.toUpperCase() == char.toLowerCase() || char == " ")
        
    return char;       
}

// exercici 18: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni
// en un nou string separades per espais

var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme. Què tal, Manel?   Patata"

var paraules = separarParaules(text);

// TODO: defineix la funció separarParaules()

function separarParaules(text) {
    var phrase = "";
    for (const char of text) {
        if (char.toLowerCase() != char.toUpperCase() || char == " " ) {
            phrase += char;
        }
    }

    return phrase;
}

//! console.log(paraules);


// exercici 19: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (podeu cridar
// la funció separarParaules() dins d'aquesta funció)

//! console.log(paraulaRandom(text));

// TODO defineix la funció paraulaRandom()
function paraulaRandom(text) {
    let wordsWithoutSymbols = separarParaules(text);
    let wordsArray =  wordsWithoutSymbols.split(" ");
    let wordsArrayTrim = [];
    for (let word of wordsArray) {
        if (word !== "") {
            wordsArrayTrim.push(word);
        }
    }
    return wordsArrayTrim[Math.floor(Math.random() * (wordsArrayTrim.length - 1))];
}

// exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
// predicció del que et passarà durant el dia

let birthday = prompt("Please insert your birthday in DD/MM format");
birthday =  birthday.split("/");
birthday[0] = Number(birthday[0]);
birthday[1] = Number(birthday[1]);

if ( birthday.length != 2 || (birthday[0] < 1 || birthday[0] > 31) || (birthday[1] < 1 || birthday[1] > 12 )) {
    throw new Error ("Invalid birthday");
}

horoscop(birthday);

// TODO defineix la funció horoscop()

function horoscop (birthday) {
    let horoscopSign = ""
    switch (birthday[1]) {
        case 1:
            if (birthday[0] <= 19) {
                horoscopSign = "Capricornio";
            } else {
                horoscopSign = "Acuario";
            }
            break;
        case 02:
            if (birthday[0] <= 18) {
                horoscopSign = "Acuario";
            } else {
                horoscopSign = "Piscis";
            }
            break;
        case 03:
            if (birthday[0] <= 20) {
                horoscopSign = "Piscis";
            } else {
                horoscopSign = "Aries";
            }
            break;
        case 04:
            if (birthday[0] <= 19) {
                horoscopSign = "Aries";
            } else {
                horoscopSign = "Tauro";
            }
            break;
        case 05:
            if (birthday[0] <= 20) {
                horoscopSign = "Tauro";
            } else {
                horoscopSign = "Géminis";
            }
            break;
        case 06:
            if (birthday[0] <= 20) {
                horoscopSign = "Géminis";
            } else {
                horoscopSign = "Cáncer";
            }
            break;
        case 07:
            if (birthday[0] <= 22) {
                horoscopSign = "Cáncer";
            } else {
                horoscopSign = "Leo";
            }
            break;
        case 08:
            if (birthday[0] <= 22) {
                horoscopSign = "Leo";
            } else {
                horoscopSign = "Virgo";
            }
            break;
        case 09:
            if (birthday[0] <= 22) {
                horoscopSign = "Virgo";
            } else {
                horoscopSign = "Libra";
            }
            break;
        case 10:
            if (birthday[0] <= 22) {
                horoscopSign = "Libra";
            } else {
                horoscopSign = "Escorpio";
            }
            break;
        case 11:
            if (birthday[0] <= 21) {
                horoscopSign = "Escorpio";
            } else {
                horoscopSign = "Sagitario";
            }
            break;
        case 12:
            if (birthday[0] <= 21) {
                horoscopSign = "Sagitario";
            } else {
                horoscopSign = "Capricornio";
            }
            break;
    }
    console.log(horoscopSign);
}

// exercici 20.1: crea una funció que generi prediccions aleatòries

// TODO defineix la funció prediccio()


// exercici 20.2: crea una funció que implementi l'horòscop xinès

// TODO defineix la funció horoscopXines()



//* ------------------------------ Bucle for ------------------------------------

console.log("----------------- Exercicis de bucles ---------------");

// exercici 21: fes un bucle que escrigui 10 vegades a la consola alternant un color i un altre

// TODO el codi aquí


// exercici 22: fes un bucle que escrigui 20 números i escrigui al seu costat: "hola" si és múltiple de 2, "adeu" si
// és múltiple de 3 i "què tal? si és múltiple de 5"

// TODO el codi aquí


// exercici 23: fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre
// (fins a 1000 com a màxim)
//// PISTA: usa la paraula clau "break"

// ! var max = prompt("Fins quin número vols contar (1-1000)?");

// TODO defineix aquí la funció contar()

contar(max); // això ha de mostrar a la consola els números de l'1 al número introduit


// exercici 24: fes un buscador de números primers. Li fixarem un límit (p.e. 100) i agafarà cada número i el dividirà
// per tots els anteriors; si alguna de les divisions dona zero, llavors no és primer; si cap dona zero, l'escriurà a la
// consola
//// PISTA: un número primer només és divisible per 1 i per si mateix

// TODO el codi aquí


// exercici 25: fes un contador que només mostri els números que tinguin un dígit contingut a la string predefinida fins a 100
//// PISTA: usa la paraula clau "continue"

var digits = prompt("Quins digits vols mostrar (1-9)?");

// TODO defineix la funció mostrarDigits()

mostrarDigits(digits);      // si digits és "2 3 4", això mostrarà "2, 3, 4, 12, 13, 14, 20, 21, 22, 23..."



//* ----------------------------- Bucle while -----------------------------------

// exercici 26: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau; fins
// llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi
// amb el format:       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua
//// PISTA: l'ultim console.log() mostrarà un string amb salts de línia "\n"

// TODO aquí el codi



//* ---------------------------- Mètodes arrays ---------------------------------

console.log("----------------- Exercicis d'arrays ---------------");

// exercici 27: dia de la setmana. A partir d'un array amb els dies de la setmana, pinta a la consola quin dia és avui

var dies = ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"]

// TODO aquí el codi


// exercici 28: replicar split(). Defineix una funció que separi una cadena de caràcters amb el separador escollit

var cadena = "blaucacavermellcacagroccacamarrócacaverd"

// TODO defineix aquí la funció separar()

console.log(separar(cadena, "caca"));   // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


// exercici 29: defineix una funció que agafi els elements d'un array i els mogui N elements cap a la dreta

var array = ["primer", "segon", "tercer", "quart", "cinquè"]

// TODO defineix aquí la funció moure()

console.log(moure(array, 2));       // ha de mostrar ["quart", "cinquè", "primer", "segon", "tercer"]


// exercici 30: adapta l'exercici de la llista de la compra (ex. 26) perquè fiqui els elements en un array i
// els ordeni alfabèticament

// TODO aquí el codi


// exercici 31: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova
// si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins
// hi ha hagut coincidències d'aniversari

// TODO aquí el codi



//* ------------------------------ Objectes -------------------------------------

console.log("----------------- Exercicis d'objectes ---------------");

// exercici 32: crea un objecte que tingui les propietats "nom", "any" i "edat" i un mètode calcularEdat()
// que calculi l'edat en funció de l'any de neixement i la guardi a la propietat "edat"
//// PISTA: useu Date()

var persona = { // TODO aquí les propietats de l'objecte
}

persona.calcularEdat();

// TODO console.log() que digui "La Maria va nèixer el 1995 i té 25 anys" agafant les propietats de l'objecte


// exercici 33: crea un objecte que contingui una paraula i el mètode separar() (de l'exercici 27) de tal manera
// que poguem usar-lo amb el codi següent

var frase = { string : "blaucacavermellcacagroccacamarrócacaverd",
                // TODO aquí el mètode de l'objecte  
}

var fraseSeparada = frase.separar("caca");

console.log(fraseSeparada);     // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


// exercici 34: adapta l'exercici de la llista de la compra (ex. 26 i 29) perquè fiqui els elements en un objecte
// separats per seccions (carnisseria, fruita i verdura, làctics, forn de pa) i ordenats alfabèticament. El console.log
// haurà de mostrar els productes classificats per seccions:           Llista de la compra:
//                                                                        - Carnisseria
//                                                                             + Hamburguesa
//                                                                             + Bistec
//                                                                             + Mandonguilles
//                                                                        - Fruita i verdura
//                                                                             + Plàtans
//                                                                             + Síndria
//// PISTA: el prompt demanarà dues paraules: el producte i una lletra per classificar-los (p.e. "magdalenes F")

// TODO: aqui el codi


// exercici 35: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array
// d'objectes amb els noms de les columnes com a propietats
//// PISTA: necessitareu ajuda. Demaneu-la
//// PISTA 2: encara que no hi hagi \n per marcar els salts de línia, els detexta igual perquè uso cometes ``

var csv = `Year,Make,Model,Description,Price
           1997,Ford,E350,ac abs moon,3000.00
           1999,Chevy,Venture "Extended Edition",,4900.00
           1999,Chevy,Venture "Extended Edition XL",,5000.00
           1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

// TODO gestionar el csv perquè acabi sent una cosa com la de sota

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];



console.log("-------------------- FI DELS EXERCICIS --------------------");