let one;
let two;
let three;
let four;
let five;
let six;
document.getElementById('rand').onclick = function() {
    randomize();
}

function randomize() 
{
    one = Math.floor(Math.random() * 69);
    two = Math.floor(Math.random() * 69);
    three = Math.floor(Math.random() * 69);
    four = Math.floor(Math.random() * 69);
    five = Math.floor(Math.random() * 69);
    if(one == 0) {
        one++;
    }
    if(two == 0) {
        two++;
    }
    if(three == 0) {
        three++;
    }
    if(four == 0) {
        four++;
    }
    if(five == 0) {
        five++;
    }
    
    document.getElementById('text').style.display = 'block';
    setTimeout(() => {
        document.getElementById('number_one').innerHTML = one;
    }, 1000);
    setTimeout(() => {
        document.getElementById('number_two').innerHTML = two;
    }, 2000);
    setTimeout(() => {
        document.getElementById('number_three').innerHTML = three;
    }, 3000);
    setTimeout(() => {
        document.getElementById('number_four').innerHTML = four;
    }, 4000);
    setTimeout(() => {
        document.getElementById('number_five').innerHTML = one;
    }, 5000);
    six = Math.floor(Math.random() * 26);
    if(six == 0) {
        six++;
    }
    setTimeout(() => {
        document.getElementById('number_six').innerHTML = six;
    }, 6000);
    setTimeout(() => {
        document.getElementById('save').style.display = 'block';
        document.getElementById('unsave').style.display = 'block';
    }, 9000);
    

}
document.getElementById('save').onclick = function() {
    save();
}
document.getElementById('unsave').onclick = function() {
    unsave();
}
document.getElementById('remember').onclick = function() {
    remember();
}



function save() 
{
    localStorage.setItem("one", one);
    localStorage.setItem("two", two);
    localStorage.setItem("three", three);
    localStorage.setItem("four", four);
    localStorage.setItem("five", five);
    localStorage.setItem("six", six);
}
function unsave() 
{
    localStorage.removeItem("one");
    localStorage.removeItem("two");
    localStorage.removeItem("three");
    localStorage.removeItem("four");
    localStorage.removeItem("five");
    localStorage.removeItem("six");
    
}
function remember() 
{
    let one = localStorage.getItem("one");
    let two = localStorage.getItem("two");
    let three = localStorage.getItem("three");
    let four = localStorage.getItem("four");
    let five = localStorage.getItem("five");
    let six = localStorage.getItem("six");
    document.getElementById('number_one').innerHTML = one;
    document.getElementById('number_two').innerHTML = two;
    document.getElementById('number_three').innerHTML = three;
    document.getElementById('number_four').innerHTML = four;
    document.getElementById('number_five').innerHTML = five;
    document.getElementById('number_six').innerHTML = six;
    document.getElementById('save').style.display = 'block';
    document.getElementById('unsave').style.display = 'block';
    document.getElementById('text').style.display = 'block';
    
    
}