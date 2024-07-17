/* 
Écrire un programme qui permet à un utilisateur de voir quelques types de boucles, avec un champ où écrire un type de boucle et de voir la définition et l’utilisation de cette boucle.
*/


let boucle= prompt('Ecrit un type de boucle');

switch(boucle){
    case 'for' :
        alert("Une boucle for en programmation est une structure de contrôle qui permet de répéter une série d'instructions un nombre déterminé de fois. Elle est utilisée pour parcourir une collection d'éléments comme des listes, des tuples, des dictionnaires ou des chaînes de caractères.");
        break

    case 'while' :
        alert("Une boucle while en programmation est une structure de contrôle qui permet de répéter une série d'instructions tant qu'une condition donnée est vraie. Contrairement à la boucle for, la boucle while est particulièrement utile lorsque le nombre d'itérations n'est pas connu à l'avance et dépend d'une condition qui peut changer au cours de l'exécution du programme.");
        break

    case 'do while' :
        alert("la boucle do...while est une structure de contrôle qui permet d'exécuter un bloc de code au moins une fois, puis de répéter l'exécution du bloc tant qu'une condition spécifiée reste vraie.");
        break

    default:
        alert('svp ecrit un type de boucle');
        

}