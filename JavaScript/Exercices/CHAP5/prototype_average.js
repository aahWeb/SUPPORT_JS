function User(name, grades) {
    this.name = name;
    this.grades = grades;
  }
  
  User.prototype.calculateAverage = function() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  };
  
  const user1 = new User("Alice", [85, 90, 92]);
  console.log(user1.calculateAverage()); // Affiche la moyenne des notes de Alice