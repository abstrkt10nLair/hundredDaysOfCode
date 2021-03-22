const getFullName = (name: string, surname: string): string => {
  return name + " " + surname
}

interface UserInterface {
  name: string,
  age?: number,
  getMessage(): string
}

const user01: UserInterface = {
  name: "bilal",
  age: 31,
  getMessage() {
    return "Hello " + this.name
  }
}

const user02: UserInterface = {
  name: "jack",
  getMessage() {
    return "Hello " + this.name
  }
}

console.log(user01.getMessage())
