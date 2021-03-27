var getFullName = function (name, surname) {
    return name + " " + surname;
};
var user01 = {
    name: "Bilal B.",
    age: 31,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user02 = {
    name: "Jack J.",
    getMessage: function () {
        return "Hello " + this.name;
    }
};
console.log(user01.getMessage());
