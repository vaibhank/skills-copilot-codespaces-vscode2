function skillsMember() {
  var member = {
    name: "John Doe",
    age: 30,
    skills: ["JavaScript", "React", "Node"],
    showSkills: function() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
  return member;
}