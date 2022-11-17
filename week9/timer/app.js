var countDownDate = new Date("2072/04/28 08:00:53").getTime();
	var dayText	= "Gün";
	var hourText = "Saat";
	var minuteText = "Dakika";
	var secondText = "Saniye";
	if (countDownDate){
		var x = setInterval(function() {
			var simdi = new Date().getTime();
			var sure = countDownDate - simdi;
			if (sure < 0) {
			clearInterval(x);
			$("#gerisayım").html("Geri sayım yapılacak ileri bir tarih yoktur");
	}else {
	var gün = Math.floor(sure / (1000 * 60 * 60 * 24)),
	saat = Math.floor((sure % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
	dakika = Math.floor((sure % (1000 * 60 * 60)) / (1000 * 60)),
	saniye = Math.floor((sure % (1000 * 60)) / 1000),
	gün = (gün?'<div><div>'+gün+'</div><div>'+dayText+'</div></div>':''),
	saat = (saat?'<div><div>'+saat+'</div><div>'+hourText+'</div></div>':''),
	dakika = (dakika?'<div><div>'+dakika+'</div><div>'+minuteText+'</div></div>':''),
	saniye = (saniye?'<div><div>'+saniye+'</div><div>'+secondText+'</div></div>':'');
	document.getElementById("gerisayım").innerHTML = gün + saat + dakika + saniye;
					}
	}, 1000);
			}