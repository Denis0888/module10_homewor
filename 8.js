let users = new Map();
users.set("name", "Denis");
users.set("surname", "Ivanov");
users.set("age", 27);
users.set("married", false);


for (let user of users.keys()){
   console.log("ключ-" + user + "," + " значение-" + users.get(user));
}



