for(let i =  0; i < 60; i++) {
    if (i < 18) {
        document.getElementById("container").innerHTML+= "Le capitaine a " + i + " ans, le capitaine est jeune" + "<br><br>";
    }
    else if (i >= 18 && i < 50) {
        document.getElementById("container").innerHTML+= "Le capitaine a " + i + " ans, le capitaine n'est pas très vieux" + "<br><br>";
    }
    else {
        document.getElementById("container").innerHTML+= "Le capitaine a " + i + " ans, le capitaine est vieux" + "<br><br>";
    }
}