//variables are declared with var, let or const

var firstName = "Chase";
var favoriteNumber = 7;
var isFromOmaha = false;

var classMember1 = {
    firstName: "Chase",
    favoriteNumber: 7,
    isFromOmaha: false,
    favoriteGames: ["Earthbound", "Super Smash Bros Ultimate", "Mario Kart Wii", "Minecraft", "Pokemon Black Two"],
}

var classMember2 = {
    firstName: "James",
    favoriteNumber: 7,
    isFromOmaha: true,
    favoriteGames: ["Petanque"]
}

//for loop *starting point; ending condition;step to take

for (var i = 0; i < classMember1.favoriteGames.length; i++) {
    //   console.log(classMember1.favoriteGames[i]);
}

//if else statement
var gameListCheck = function (member) {

    if (member.favoriteGames.length < 0) {
        console.log('They do not have games!');
    } else if (member.favoriteGames.length > 0) {
        console.log('They have ' + member.favoriteGames.length + ' favorite games');
    } else {
        console.log('we do not know about their games...');
    }

}

gameListCheck(classMember1);
gameListCheck(classMember2);

let game = {
    name:"Earthbound",
    difficulty: 2,
    imgUrl: "Assets/EarthBound_Box.jpeg",
    system: ["SNES"],
    description:"this is just some info about the game",
    subheader:"Earthbound and game about earth"
}

let gameDiv = document.getElementById("game");
let gameImg = document.createElement("img");
let gameName = document.createElement("h1");
let gameSubheader = document.createElement("h2");
let gameBody =  document.createElement("p");

gameSubheader.innerHTML= "EarthboundAndBeyond";
gameBody.innerHTML = "some random text";
gameName.innerHTML = "EarthBound";
gameImg.src = "Assets/EarthBound_Box.jpeg";
gameDiv.appendChild(gameImg);
gameDiv.appendChild(gameName);
gameDiv.appendChild(gameSubheader);
gameDiv.appendChild(gameBody);

console.log(game.name);





