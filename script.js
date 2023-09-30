let titre=document.getElementById('resultat')

function addition(...nombres){
    let resultat=0;
nombres.forEach(nombre =>{
    
    resultat+=nombre;
    
});
titre.innerHTML=resultat
}

addition(4,5,7,10)