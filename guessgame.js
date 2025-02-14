let rastgeleSayi = Math.floor(Math.random() * 10) + 1;

document.getElementById("guessbuttonid").addEventListener("click" , function()

{
    let ourguess = parseInt(document.getElementById("guessnumber").value);
    let lastmessage = document.getElementById("popupmessage");

    if(isNaN(ourguess) || ourguess < 1 || ourguess > 10){
        lastmessage.textContent = "Lütfen 1-10 arası bir sayı giriniz!";
        lastmessage.style.color = "red";
        return;
    }

    if (ourguess === rastgeleSayi) {
        lastmessage.textContent = `🎉 Tebrikler! Doğru tahmin: ${rastgeleSayi}`;
        lastmessage.style.color = "green";
        document.getElementById("guessbuttonid").disabled = true;
    } else if (ourguess > rastgeleSayi) {
        lastmessage.textContent = "Daha küçük bir sayı girin!";
        lastmessage.style.color = "blue";
    } else {
        lastmessage.textContent = "Daha büyük bir sayı girin!";
        lastmessage.style.color = "blue";
    }
});
