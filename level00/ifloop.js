const personArray = ["harsh","raj","priya","rahul","jaya"];
const genderArray = ["male","male","female","male","female"];

for (let i = 0; i<personArray.length; i++) {
    if (genderArray[i] == "male") {
        console.log(personArray[i]);
    }
}