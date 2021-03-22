const getFullName = (name: string, surname: string): string => {
  return name + " " + surname
}

interface User {
  name: string,
  age?: number
}

const user01: User = {
  name: "bilal",
  age: 31
}

const user02: User = {
  name: "jack"
}

console.log(user01.name)
