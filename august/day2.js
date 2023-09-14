const GREETING_STR = 'Hello';
const MR_STR = 'Mr.';
const MISS_STR = 'Miss';
const FEMALE = 'female';
const MALE = 'male';
const MALE_SHORT = 'm';
const FEMALE_SHORT = 'f';

function sayHi(userName, gender) {
    if (gender === MALE || gender === MALE_SHORT) {
        return GREETING_STR + ' ' + MR_STR + ' ' + userName;    
    } else if (gender === FEMALE || gender === FEMALE_SHORT) {
        return GREETING_STR + ' ' + MISS_STR + ' ' + userName; 
    }
    return GREETING_STR + ' ' + userName; 
}

add();