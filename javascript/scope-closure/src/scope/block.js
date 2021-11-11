//let y const solo funcionan en el bloque asignado
const fruits = () => {
  if(true){
      var a1="apple";
      let a2="banana";
      const a3="kiwi";
  }
  console.log(a1,a2,a3); //solo aparece a1, y en a2,a3 solo funciona en el bloque if
}

