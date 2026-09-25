const name = "Asif Abir";
const myInfo = {
    name: "Asif Abir",
    gender: "Male",
    housrNo: 9,
    road: "Sher-E-Bangfla Road",
    city: "Dhaka",
    country: "Bangladesh",
    zipCode: 1209,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "php", "MySQL", "Laravel"],
    fullAddress: function () {
        return `${this.housrNo}, ${this.road}, ${this.city}, ${this.country}`;
    },
    myBestFriend: {
        name: "Himel",
        gender: "Male",
        area: "Mohammadpur",
        softSkills: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability'],
        FullInfo: function () {
            return `My Best Friend name is ${this.name}, his gender is ${this.gender}, he lives in ${this.area} and his skills are ${this.softSkills.join(', ')}`;
        }
    },

    testArrowFuun: function () {
        const arrowFunction = () => {
            return `My name is ${this.name} and I live in ${this.city}, ${this.country}`;
        }
        return arrowFunction();
    }
}

// console.log(myInfo.name);
// console.log(myInfo.skills[5]);
// console.log(myInfo.fullAddress());
// console.log(myInfo.myBestFriend.FullInfo());

console.log(myInfo.testArrowFuun());