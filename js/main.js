var array = [-3.25, 3, -7.2, -5.6, 7.8, 9.25, -25]

// Shu sonlarni shaxlitlab musbat ko'rinishida qaytar
// array = [3, 3, 7, 6, 8, 9, 25]

var arrayResult = []

for (var i = 0; i < array.length; i++) {
     
    var number = Math.round(array[i]);

    var result = Math.abs(number);

    arrayResult.push(result)
}
console.log(arrayResult);