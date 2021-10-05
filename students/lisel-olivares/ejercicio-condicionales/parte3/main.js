const notaExamen = prompt ('Tu nota:');
const nota = parseInt (notaExamen);

if (nota < 5){
    document.write ('<h1>SUSPENSO</h1>');
}else if (nota >= 5 && nota < 7){
    document.write ('<h1>APROBADO</h1>');
}else if (nota >= 7 && nota < 9){
    document.write ('<h1>NOTABLE</h1>');
}else if (nota >= 9 && nota < 10){
    document.write ('<h1>SOBRESALIENTE</h1>');
}else if (nota === 10){
    document.write ('<h1>MATRICULA DE HONOR</h1>');
}else{
    document.write ('<h1>HA OCURRIDO UN ERROR, CONTACTA CON EL PROFESOR</h1>');
}
