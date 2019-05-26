function NSApuzzle(cipherText, key) {
  var codigo = "";
  for (i = 0; i < cipherText.length; i++) {
    var texto = Number(cipherText.charAt(i));
    var chave = Number(key.charAt(i));
    if (texto < chave) {
      texto += 10;
    }
    var a = texto - chave;
    codigo += a.toString(); 
  }
  var mensagem = "";
  for (i = 0; i < codigo.length; i += 2) {
    var msg_temp;
    msg_temp = codigo.substring(i, i + 2);
    mensagem += String.fromCharCode((parseInt(msg_temp)%26) + 64);
  }
  return mensagem.toLowerCase();
}

var test1 = "6097703920902805098792458100127006308920278750110017283152904512008635073921961285410397244195102032905201942802717080593227"; // helloworld
var key1 =  "6981642705701301086201207791115091207421138236919216132358913111926129022415841781360483274671901231854407951401635567442416"; // key
console.log(NSApuzzle(test1,key1));