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
