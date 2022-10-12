const findTheOldest = function (obj) {
     const getAge = function (birth, death) {
        if (!death) {
            death = new Date().getFullYear();
            console.log("death set to " + death + " for person born "+ birth)
        }
        return death - birth;
    }
    
    return oldest = obj.reduce((oldest, curr) => {
        const oldestAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath)
        const currAge = getAge(curr.yearOfBirth,curr.yearOfDeath)
        return oldestAge < currAge ? curr : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
