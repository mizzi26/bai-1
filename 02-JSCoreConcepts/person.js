class Person { 
  constructor(name, surname) {  
      this.name = name;
      this.surname = surname;
      }
    
  fullName() {
  return this.name +" "+ this.surname.toUpperCase();
  }

  Initials(){
   return this.name.toUpperCase()[0] + "." + this.surname.toUpperCase()[0]+".";
   }
}

a = new Person("Jan", "Nowak");
b = new Person("Mateusz", "Kusal");
console.log(a.fullName() +" " + a.Initials());
console.log(b.fullName() +" " + b.Initials());

Person.fullName();
