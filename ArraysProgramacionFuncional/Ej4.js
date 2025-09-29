const num =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Utiliza filter para crear un nuevo array con los números pares.

    const even = num.filter(mark => mark%2==0);
    console.log(even);

//Utiliza map para crear un nuevo array con los cuadrados de los números.

    const cuadrado = num.map(num => num**2);
    console.log(cuadrado);

//Utiliza reduce para calcular la suma de todos los números.

    const sum = num.reduce((sum, mark) => sum+=mark);
    console.log(sum);

//Utiliza every para verificar si todos los números son mayores que 0.

    const possitiveNumber = num.every(mark => mark>0);
    console.log(possitiveNumber);

//Utiliza some para verificar si algún número es mayor que 10.


    const biggerThan10 = num.some(mark => mark>10);
    console.log(biggerThan10);   