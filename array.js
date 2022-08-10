function student(names) {
    // console.log(names.length);
    var longName = names[0];

    let friend = [];

    for (let i = 0; i < names.length; i++) {

        if (longName.length < names[i].length) {
            longName = names[i];
        }
    }

    for (let j = 0; j < names.length; j++) {
        if (longName.length === names[j].langth) {
            friend.push(names[j]);
        }
    }

    return friend;

}

var givenStudentName = ["mamun", "sony", "sakib hasan", "sadman sakib", "tousi", "abdulla al mamun"];
var finalName = student(givenStudentName);
function big(mamun)

console.log(finalName);

