let cars = ['Mercedes-Benz', 'Audi', 'Rolls-Royce', 'Ferrari']
console.log(cars)

console.log(cars.length)
let uzun = alert(`Boshlanishida arrayning uzunligi: ${cars.length}`)

let kesish = confirm(`Sizning arraygizdan ohirgisini olib tashamoqchimisiz`)

if (true) {
    cars.pop()
    alert(`Arrayning uzunligi ${cars.length}`)
} else {
    alert(`Arrayning uzunligi: 4`)
}

console.log(cars)
console.log(cars.length)