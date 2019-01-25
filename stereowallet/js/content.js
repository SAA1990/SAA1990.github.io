function changeLang(data_ru, data_en){
	$('.lang').click(function(){
	    var lang = $(this).attr('data-content');
		if (lang == "USA") {
			var template = Handlebars.compile( $('#wallet').html() );
	    	$(document.body).html(template(data_ru));
	    	changeLang(data_ru, data_en);
	    } 

	    if (lang == "RU") {
	    	var template = Handlebars.compile( $('#wallet').html() );
	    	$(document.body).html(template(data_en));
	    	changeLang(data_ru, data_en);
	    }
	});    
}

var data_ru = 	{	"header":{
						"stereowallet": "stereowallet", 
						"flag":{
							"name":"RU",
							"lang":"./img/flag_ru.png"
						},
					},
					"section-1":{
						"h1":"BUY. SELL. WITHDRAW. CHANGE",
						"h2":{
							"text":"We introduce you new user-friendly yet wide range functional crypto wallet - ",
							"strong":"STEREOWALLET"
						},
						"p":{
							"strong":"Available on February",
							"text": " in App Store and Google Play"
						},
					},
					"section-2":{
						"h2":"Wide range of possibilities.",
						"p":"You can buy cryptocurrency, sell it, change one to another and withdraw to your credit card as FIAT inside one app.",
					},
					"section-3":{
						"h2":"Fast and secured.",
						"p":"STEREOWALLET based on banking technologies. This gives us the ability to provide you instant transactions with no delay and bank-level security.",
					},
					"section-4":{
						"h2":"Simple and clear.",
						"p":{
							"strong":"STEREOWALLET",
							"text": " was developed by programmers AND DESIGNERS. So you can enjoy the simplicity of interaction with our powerful application."
						},
					},
					"footer":{
						"text":"Contact",
						"copyright":"TCK GROUP LTD",
						"address":"Cyprus, Limassol, 40 Kimonos 3095",
						"phone":"+357 25 056 443",
						"email":"info@sterewallet.com",
					}
				};

var data_en =	{	"header":{
						"stereowallet": "stereowallet", 
						"flag":{
							"name":"USA",
							"lang":"./img/flag_usa.svg"
						},
					},
					"section-1":{
						"h1":"КУПИТЬ. ПРОДАТЬ. ВЫВЕСТИ. ПОМЕНЯТЬ",
						"h2":{
							"text":"Мы представляем вам новый удобный и функциональный шифровальный кошелек широкого спектра - ",
							"strong":"STEREOWALLET"
						},
						"p":{
							"strong":"Доступно в феврале",
							"text": " в App Store и Google Play"
						},
					},
					"section-2":{
						"h2":"Широкий спектр возможностей.",
						"p":"Вы можете купить криптовалюту, продать ее, поменять одну на другую и вывести на свою кредитную карту как FIAT в одном приложении.",
					},
					"section-3":{
						"h2":"Быстро и надежно.",
						"p":"STEREOWALLET основан на банковских технологиях. Это дает нам возможность предоставлять вам мгновенные транзакции без задержек и на уровне банка.",
					},
					"section-4":{
						"h2":"Просто и понятно.",
						"p":{
							"strong":"STEREOWALLET",
							"text": " был разработан программистами и дизайнерами. Так что вы можете наслаждаться простотой взаимодействия с нашим мощным приложением."
						},
					},
					"footer":{
						"text":"Контакты",
						"copyright":"TCK GROUP LTD",
						"address":"Cyprus, Limassol, 40 Kimonos 3095",
						"phone":"+357 25 056 443",
						"email":"info@sterewallet.com",
					}
				};

$(document).ready(function(){

	var template = Handlebars.compile( $('#wallet').html() );
	$(document.body).append(template(data_ru));
	changeLang(data_ru, data_en);

});