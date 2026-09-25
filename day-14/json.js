const myInfo = {
    "name": "Asif Abir",
    "gender": "Male",
    "FullAddress": "9, Sher-E-Bangfla Road, Dhaka, Bangladesh",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "php", "MySQL", "Laravel"],
    "myBestFriend": {
        "name": "Himel",
        "gender": "Male",
        "area": "Mohammadpur",
        "softSkills": ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability'],
        "FullInfo": "My Best Friend name is Himel, his gender is Male, he lives in Mohammadpur and his skills are Communication, Teamwork, Problem Solving, Time Management, Adaptability"
    }
}

// console.log(typeof JSON.stringify(myInfo));
console.log(typeof myInfo);
const JsonData = JSON.stringify(myInfo);
console.log(typeof JsonData);
JSON.parse(JsonData);