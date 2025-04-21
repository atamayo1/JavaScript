class Person {

    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }

    greet(firstName) {
        return `${this.firstName} say: Hi, ¿how are you ${firstName}?`
    }
    sayAge(firstName) {
        return `${this.firstName} say: I have ${this.age} years, ${firstName}`
    }
}

class Alumn extends Person {
    constructor(firstName, age, course) {
        super(firstName, age);
        this.course = course;
    }

    introduceYourSelf() {
        return `${super.greet('teacher')} i'm the alumn of the course ${this.course}`
    }
}

class Teacher extends Person {
    constructor(firstName, age, mattern) {
        super(firstName, age);
        this.mattern = mattern;
    }
    introduceYourSelf() {
        return `${super.greet('alumns')} i'm the teacher from ${this.mattern}`
    }
}

function greetAndSayAge() {
    const firstNameInput = document.getElementById('firstNameInput').value;
    const ageInput = document.getElementById('ageInput').value;
    const guestInput = document.getElementById('guestInput').value;
    const rolSelect = document.getElementById('rolSelect').value;

    if (firstNameInput.trim() == '' || ageInput.trim() == '' || guestInput.trim() == '' || rolSelect.trim() == '') {
        alert('The fields are mandatory');
        return;
    }

    let person;

    switch (rolSelect) {
        case 'Alumn':
            const courseInput = prompt('Enter the course from alumn');
            person = new Alumn(firstNameInput, ageInput, courseInput);
            break;
        case 'Teacher':
            const matternInput = prompt('Enter the mattern from teacher');
            person = new Teacher(firstNameInput, ageInput, matternInput);
            break;

        default:
            alert('You should select a rol');
            break;
    }

    const introduce = person.introduceYourSelf();

    const greet = person.greet(guestInput);
    const ageMsj = person.sayAge(guestInput);

    const result = document.getElementById('res');
    result.innerHTML = `<p>${greet}</p <p>${ageMsj}</p> <p>${introduce}</p>`
}