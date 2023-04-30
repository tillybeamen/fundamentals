// ===========  #1  ============
console.log(hello);                                   
var hello = 'world';      

// =============  PREDICTION  ============
var hello;
console.log(hello);
hello = 'world'


// ==================  #2  ================
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// ============  PREDICTION  ===========
var needle;
test(); //cant call a function before it is declared???
function test(){
    var needle;
    needle = 'magnet'
    console.log(needle)
}
needle = 'haystack';

// ===========  #3  =========
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// =========  PREDICTION  ==========
var brendan;
brendan = 'super cool'
console.log(brendan);

// =========  #4  =========
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// =======  PREDICTION  ========
var food 
food = 'chicken'
console.log(food)
eat();
function eat(){
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
}

// ========== #5  ========
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// =======  PREDICTION  ========
var mean 
function mean() {
    var food;
    food = 'fish';
    food = 'chicken'
    console.log(food);
    console.log(food);
}

// ===== CORRECT ANSWER  ========
// Var mean is not a function!!!

// =========  #6  ========
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// =====  PREDICTION  =====
var genre = 'disco';
console.log(genre);
rewind();
function rewind(){
    var genre
    genre = 'r&b';
    genre = 'rock';
    console.log(genre);
    console.log(genre);
}
console.log (genre)

"rock"
"rock"

// =========  #7  ==========
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// =======  PREDICTION  =======
// dojo is undefined

// ========  #8  =========
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


// =======  PREDICTION  =======
console.log(makeDojo("Chicago", 65));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    return dojo;
}

true

console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){

    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

"closed for now"
// cannot change the value of a const variable...once line 170 is reached an error 
// raises

