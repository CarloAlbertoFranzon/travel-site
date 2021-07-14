import '../styles/styles.css'

if(module.hot) {
    module.hot.accept()
}

/*Lesson example code below this line */

function person(name, color){

    console.log("Hello my name is " + name + " and my favourite color is " + color );
}

person("John Doe","blue");
person("Carlo Alberto","green");