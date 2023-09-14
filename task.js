console.log('veikia')

// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

 
// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']


// let newArr = [4 , 5 , -5556 , 155 , 640 , '15x' , 6789 , -5564 , 478 , 654 , 'obuolys' , 789 , -51 , 55 , -222 , 0 , -357 , -56 , 'trylika' , 444 , 7778 , 4154 , 4751 ] 
// //index       0   1     2      3     4      5      6       7      8     9        10       11    12   13     14   15    16    17      18        19    20      21    22
// //slice(+)  0   1    2      3      4     5      6      7       8     9       10       11     12    13    14    15    16    17    18       19       20     21     22    23
// //slice(-)-23  -22  -21    -20    -19   -18    -17    -16     -15   -14     -13      -12    -11   -10    -9    -8    -7    -6    -5       -4       -3     -2     -1    

// 1.1. Pašalinti pirmą masyvo narį.

// let firstNum = newArr.shift()
// console.log(firstNum)
// console.log(newArr)

// 1.2. Pašalinti paskutinį masyvo narį.

// let lastNum = newArr.pop()
// console.log(lastNum)
// console.log(newArr)

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
// let middleIndex = Math.floor(newArr.length / 2)
// newArr.splice(middleIndex, 1)
// console.log(middleIndex)
// console.log(newArr)

// 1.4. Pašalinti priešpaskutinį masyvo narį.
// newArr.splice(-2, 1)
// console.log(newArr)

// 1.5. Pašalinti antrą masyvo narį.
// newArr.splice(1, 1)
// console.log (newArr)

// 1.6. Pašalinti 7 ir 8 masyvo narius.
// newArr.splice (6, 2)
// console.log (newArr)

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
// newArr.splice (-6, 3)
// console.log (newArr)

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
// newArr.splice(2, 1, 888)
// console.log(newArr)

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
// newArr.splice (9, 1, 33, 789, 6543)
// console.log(newArr)

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
// newArr.splice (-1, 1, 321, 654, 987)
// console.log(newArr)

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
// newArr.splice (1, 0, 11)
// console.log(newArr)

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
// newArr.splice (13, 0, 1)
// console.log(newArr)

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
// newArr.splice (-1, 0, -1)
// console.log(newArr)

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
// newArr.unshift (1, 2, 3)
// console.log(newArr)

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
// newArr.push (-333, -321, -312)
// console.log(newArr)

// 1.16. Į masyvo vidurį pridėti skaičių 0.
// newArr.splice(newArr.length / 2, 0, 0);
// console.log(newArr)

// 1.17. Pašalinti pirmą masyvo narį.
// newArr.shift()
// console.log(newArr)

// 1.18. Pašalinti paskutinį masyvo narį.
// newArr.pop()
// console.log(newArr)

// 1.19. Į masyvo pradžią pridėti žodį "start".
// newArr.unshift('start')
// console.log(newArr)

// 1.20. Į masyvo pabaigą pridėti žodį "end".
// newArr.push('end')
// console.log(newArr)


// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'] - mano rezultatas
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį.
// 2.2. Gauti paskutinį masyvo narį.
// 2.3. Gauti antrą masyvo narį.
// 2.4. Gauti priešpaskutinį masyvo narį.
// 2.5. Gauti aštuntą masyvo narį.
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
// 2.7. Gauti vidurinį masyvo narį.
// 2.8. Gauti pirmus tris masyvo narius.
// 2.9. Gauti paskutinius tris masyvo narius.
// 2.10. Gauti pirmus 10 masyvo narius.
// 2.11. Gauti paskutinius 10 masyvo narius.
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.


let arr = [ 'start' , 2 , 3 , 5 , 11 , 155 , 888 , '15x' , 6789 , -5564 , 'obuolys' , -51 , 55 , 0 , 33 , 789 , 6543 , 1 , 'trylika' , 444 , 321 , 654 , -1 , 987 , -333 , -321 , 'end' ]
//index       0       1   2   3    4    5     6      7      8       9        10        11   12   13  14    15    16    17      18       19    20    21    22   23     24     25     26
//slice(+) 0      1     2   3    4    5    6      7     8       9       10        11      12   13  14   15    16    17     18       19     20    21    22    23    24     25     26    27
//slice(-)-27    -26  -25 -24  -23  -22  -21    -20    -19    -18      -17       -16     -15  -14 -13  -12   -11   -10    -9        -8    -7     -6    -5   -4     -3     -2    -1   


// 2.1. Gauti pirmą masyvo narį.
let slicedElements1 = arr.slice(0, 1)
console.log(slicedElements1)

// 2.2. Gauti paskutinį masyvo narį.
let slicedElements2 = arr.slice(-1)
console.log(slicedElements2)

// 2.3. Gauti antrą masyvo narį.
let slicedElements3 = arr.slice(1, 2)
console.log(slicedElements3)

// 2.4. Gauti priešpaskutinį masyvo narį.
let slicedElements4 = arr.slice(-2, -1)
console.log(slicedElements4)

// 2.5. Gauti aštuntą masyvo narį.
let slicedElements5 = arr.slice(7, 8)
console.log(slicedElements5)

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let slicedElements6 = arr.slice(-9, -8)
console.log(slicedElements6)

// 2.7. Gauti vidurinį masyvo narį.
let middle = Math.floor(arr.length / 2)
let slicedElements7 = arr.slice(middle, middle + 1)
console.log(slicedElements7)

// 2.8. Gauti pirmus tris masyvo narius.
let slicedElements8 = arr.slice(0, 3)
console.log(slicedElements8)

// 2.9. Gauti paskutinius tris masyvo narius.
let slicedElements9 = arr.slice(-3)
console.log(slicedElements9)

// 2.10. Gauti pirmus 10 masyvo narius.
let slicedElements10 = arr.slice(0, 10)
console.log(slicedElements10) 

// 2.11. Gauti paskutinius 10 masyvo narius.
let slicedElements11 = arr.slice(-10)
console.log(slicedElements11)

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let slicedElements12 = arr.slice(2, 8)
console.log(slicedElements12) 

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let slicedElements13 = arr.slice(4, 9)
console.log(slicedElements13) 

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let slicedElements14 = arr.slice(10, 19)
console.log(slicedElements14) 

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let slicedElements15 = arr.slice(-20, -8)
console.log(slicedElements15) 

// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let slicedElements16 = arr.slice(1, arr.length)
console.log(slicedElements16) 

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let slicedElements17 = arr.slice(0, -1)
console.log(slicedElements17) 

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let slicedElements18 = arr.slice(5)
console.log(slicedElements18) 

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.
let slicedElements19 = arr.slice(0, -5)
console.log(slicedElements19) 

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let slicedElements20 = arr.slice(0, Math.floor(arr.length / 2))
console.log(slicedElements20)

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let slicedElements21 = arr.slice(Math.floor(arr.length / 2), -1)
console.log(slicedElements21)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.
let slicedElements22 = arr.slice(1, -2)
console.log(slicedElements22) 

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let slicedElements23 = arr.slice(5, -3)
console.log(slicedElements23) 

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let slicedElements24 = arr.slice(1, -8)
console.log(slicedElements24) 

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let slicedElements25 = arr.slice(7, -1)
console.log(slicedElements25) 

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let slicedElements26 = arr.slice(9, -12)
console.log(slicedElements26) 

// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let slicedElements27 = arr.slice(10, 10 + 9)
console.log(slicedElements27) 

// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let slicedElements28 = arr.slice(7, 7 + 12)
console.log(slicedElements28) 

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let slicedElements29first = arr.slice(0, 5)
let slicedElements29last = arr.slice(-6)
let slicedElements29All = [...slicedElements29first, ...slicedElements29last]

console.log(slicedElements29All) 

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let slicedElements30first = arr.slice(2, 5)
let slicedElements30last = arr.slice(14, 17)
let slicedElements30All = [...slicedElements30first, ...slicedElements30last]

console.log(slicedElements30All) 