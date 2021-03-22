var getFullName = function (name, surname) {
    return name + " " + surname;
};
var user01 = {
    name: "bilal",
    age: 31,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user02 = {
    name: "jack",
    getMessage: function () {
        return "Hello " + this.name;
    }
};
console.log(user01.getMessage());
