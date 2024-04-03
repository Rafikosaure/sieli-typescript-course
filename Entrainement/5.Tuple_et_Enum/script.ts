/*
Déclare une variable 'array' de type tuple qui prend des valeurs de type boolean et number.
Un 'Tuple' en TypeScript est un tableau dont le type de certains éléments est connu.
Chaque élément du tableau a un type spécifique et l'ordre des éléments est important.
*/

let array: [boolean, number]

// initialise la variable 'array'
array = [true, 43]


// Déclare une variable 'roles' de type objet avec des clés et leurs valeurs respectives
const roles = {
    react: 1,
    php: 2,
    css: 3
}
console.log(roles)


/* Un 'enum' (énumération) est une manière de donner un nom à un ensemble de valeurs numériques.
Les valeurs d'un enum en TypeScript ne sont pas modifiables. */
enum Roles {
    JAVASCRIPT=1,
    CSS,
    REACT
}
console.log(Roles)