const getFullName = (name: string, surname: string): string => {
  return name + " " + surname
}

interface UserInterface {
  name: string,
  age?: number,
  getMessage(): string
}

const user01: UserInterface = {
  name: "Bilal B.",
  age: 31,
  getMessage() {
    return "Hello " + this.name
  }
}

const user02: UserInterface = {
  name: "Jack J.",
  getMessage() {
    return "Hello " + this.name
  }
}

console.log(user01.getMessage())
