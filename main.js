//créer la fonction saissi dans l'input et de les afficher
function displayInput(){
var inputLastName = document.getElementById('nom').value;
var inputFirstName = document.getElementById('prénom').value;
var inputCity = document.getElementById('ville').value;
    if (isNaN(inputLastName) && isNaN(inputFirstName) && isNaN(inputCity)){
    alert('votre Nom est : ' + inputLastName + '\n' + 'votre prénom est : ' + inputFirstName + '\n'  + 'votre ville est : ' + inputCity)
    }
    else{
    alert('veuillez remplir les champs');
    }
}

// var lastname = prompt('Nom');
// var firstname = prompt('Prénom');
// var city = prompt('Ville');
//     if(lastname!='' && isNaN(lastname))
//     if(first!='' && isNaN(first))
//     if(ville!=''&& isNaN(ville)){
//     alert(lastname + '\n' + firstname + '\n' + city);
//         } else{
//     alert('Veuillez saisir tous les champs, svp');
//     }