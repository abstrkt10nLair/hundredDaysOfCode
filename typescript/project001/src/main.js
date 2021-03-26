var getFullName = function (name, surname) {
    return name + " " + surname;
};
var user01 = {
    name: "Bilal",
    age: 31,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user02 = {
    name: "Jack",
    getMessage: function () {
        return "Hello " + this.name;
    }
};
console.log(user01.getMessage());
