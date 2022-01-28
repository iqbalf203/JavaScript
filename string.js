var message="Hello!";
var name="Iqbal";
alert(message +" there "+ name);
console.log(name.length);
var input= prompt("Compose Your tweet: ");
console.log(280-input.length + " Character left ")
console.log("So your tweet is :" + input.slice(0,280));

// to upper case
name =name.toUpperCase();
name=name.toLowerCase();


//first letter to upper case
var name=prompt("whats your name?");
var f =name.slice(0,1)
var ft= f.toUpperCase();
var second= name.slice(1,name.length);
console.log(ft+second);
