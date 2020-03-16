var attrs = 'name age city gender';
var values = [
    ['Joe', 22, 'New York City', 'male'],
    ['Jane', 85, 'Las Vegas', 'female'],
    ['Jack', 55, 'London', 'male']
];

var people = [[],[],[]];
var attributes=attrs.split(" ");

var n = values.length;
var m= attributes.length;
var i,j;


for (i=0;i<n;i++){
    for (j=0;j<m;j++){
        people[i][j] = attributes[j]+ ": " +values[i][j];
    }
}

console.log(people);
 