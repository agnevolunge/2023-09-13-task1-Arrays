console.log('veikia')

// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
 
// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
// 1.1. Pašalinti pirmą masyvo narį.
// 1.2. Pašalinti paskutinį masyvo narį.
// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
// 1.4. Pašalinti priešpaskutinį masyvo narį.
// 1.5. Pašalinti antrą masyvo narį.
// 1.6. Pašalinti 7 ir 8 masyvo narius.
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// 1.16. Į masyvo vidurį pridėti skaičių 0.
// 1.17. Pašalinti pirmą masyvo narį.
// 1.18. Pašalinti paskutinį masyvo narį.
// 1.19. Į masyvo pradžią pridėti žodį "start".
// 1.20. Į masyvo pabaigą pridėti žodį "end".
 
// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']


let newArr = [4 , 5 , -5556 , 155 , 640 , '15x' , 6789 , -5564 , 478 , 654 , 'obuolys' , 789 , -51 , 55 , -222 , 0 , -357 , -56 , 'trylika' , 444 , 7778 , 4154 , 4751 ] 
//index       0   1     2      3     4      5      6       7      8     9        10       11    12   13     14   15    16    17      18        19    20      21    22
//slice(+)  0   1    2      3      4     5      6      7       8     9       10       11     12    13    14    15    16    17    18       19       20     21     22    23
//slice(-)-23  -22  -21    -20    -19   -18    -17    -16     -15   -14     -13      -12    -11   -10    -9    -8    -7    -6    -5       -4       -3     -2     -1    

// 1.1. Pašalinti pirmą masyvo narį.

let firstNum = newArr.shift()
console.log(firstNum)
console.log(newArr)

// 1.2. Pašalinti paskutinį masyvo narį.

let lastNum = newArr.pop()
console.log(lastNum)
console.log(newArr)

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
let middleIndex = Math.floor(newArr.length / 2)
newArr.splice(middleIndex, 1)
console.log(middleIndex)
console.log(newArr)

// 1.4. Pašalinti priešpaskutinį masyvo narį.
newArr.splice(-2, 1)
console.log(newArr)

// 1.5. Pašalinti antrą masyvo narį.
newArr.splice(1, 1)
console.log (newArr)

// 1.6. Pašalinti 7 ir 8 masyvo narius.
newArr.splice (6, 2)
console.log (newArr)

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
newArr.splice (-6, 3)
console.log (newArr)

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
newArr.splice(2, 1, 888)
console.log(newArr)

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
newArr.splice (9, 1, 33, 789, 6543)
console.log(newArr)

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
newArr.splice (-1, 1, 321, 654, 987)
console.log(newArr)

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
newArr.splice (1, 0, 11)
console.log(newArr)

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
newArr.splice (13, 0, 1)
console.log(newArr)

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
newArr.splice (-1, 0, -1)
console.log(newArr)

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
newArr.unshift (1, 2, 3)
console.log(newArr)

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
newArr.push (-333, -321, -312)
console.log(newArr)

// 1.16. Į masyvo vidurį pridėti skaičių 0.
newArr.splice(newArr.length / 2, 0, 0);
console.log(newArr)

// 1.17. Pašalinti pirmą masyvo narį.
newArr.shift()
console.log(newArr)

// 1.18. Pašalinti paskutinį masyvo narį.
newArr.pop()
console.log(newArr)

// 1.19. Į masyvo pradžią pridėti žodį "start".
newArr.unshift('start')
console.log(newArr)

// 1.20. Į masyvo pabaigą pridėti žodį "end".
newArr.push('end')
console.log(newArr)


// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'] - mano rezultatas
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']