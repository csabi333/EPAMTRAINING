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
const quote='"';

var jsonPeople=[[],[],[]];
for (i=0;i<n;i++){
    for(j=0;j<m;j++){
    jsonPeople[i][j] =' '+quote+attributes[j]+quote+': '+quote+values[i][j]+quote;
    }
}

for (i=0;i<n;i++){
    jsonPeople[i]='{'+jsonPeople[i]+' }';

}
console.log(jsonPeople);

for(i=0;i<n;i++){
people[i]=JSON.parse(jsonPeople[i]);
}

console.log(people);
