let solution = [1, 0, 3, 0, 5]
let student_answers1 = [1, 2, 3, 4 ,5]

console.log("A tanuló válaszai: "+student_answers1)
console.log("Jó válaszok része: "+solution)
if (solution[0] == student_answers1[0] || solution[2] == student_answers1[2] || solution[4] == student_answers1[4])
{
    console.log("Lehetséges a 100%-os megoldásra")
}
else
{
    console.log("Nem lehetséges a 100%-os megoldásra")
}