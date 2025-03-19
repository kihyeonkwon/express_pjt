//js리스트에 추가는 push
people = [{"name":"홍길동", "age":20}, {"name":"임꺽정", "age":21}]


new_person = {"name":"로빈후드", "age":22}

people.push(new_person)

console.log(people)

//js리스트 제거는 splice

let index = 2
people.splice(index, 1);

