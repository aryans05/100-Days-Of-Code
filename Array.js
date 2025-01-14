const ages = [ 21 , 22 , 23 , 24 , 25];
const numbersofPeople = ages.length;

for ( let i = 0; i< numbersofPeople; i++) {

    if (ages[i] % 2 == 0) {

        console.log(ages[i]);
    }
}


// Objects 


const user1 = {

    firstname : "Aryan",
    gender : "male"


}

console .log(user1["firstname"])