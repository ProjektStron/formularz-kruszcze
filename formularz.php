<?php 
   if ( isset( $_POST['submit'] ) ) {
   	$to = 'kontakt@sezamgold.pl';
   	$subject = 'SEZAMGOLD.PL - KRUSZCE';
   	
   		$body = 
   			'IP klienta: '.$_SERVER['REMOTE_ADDR'].'<br><br>'.
   			'<h1 style="text-align:center">Sprzedający:</h1><br><br>'.
   					'Imię: '.$_POST['imie'].'<br>'.
   					'Nazwisko: '.$_POST['nazwisko'].'<br>'.
   					'Ulica nr/lok: '.$_POST['ulica'].'<br>'.
   					'Miasto: '.$_POST['miasto'].'<br>'.
   					'Kod pocztowy: '.$_POST['kod_pocztowy'].'<br>'.
   					'Telefon: '.$_POST['nr_telefonu'].'<br>'.
   					'Email: '.$_POST['email'].'<br><br>'.
   					'Wyraził zgodę na:  <br><br>'.
   					'Zgoda 1: Tak'.'<br>'.
   					'Zgoda 2: Tak'.'<br>'.
   					'Zgoda 3: Tak'.'<br>'.
   					'Zgoda 4: Tak'.'<br><br>'.
   			'<h1 style="text-align:center">Lista towarów które zadeklarował Klient do sprzedaży:</h1><br><br>'.
   			'<br>Wykaz sprzedawanych metali nr 1'.'<br>';
   		if ( $_POST['kruszec1-rodzaj'] === "gold"){
   			$body .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec1-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "silver"){
   			$body .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec1-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "coins"){
   			$body .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec1-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "silvercoins"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec1-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "goldbars"){
   			$body .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec1-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "silverbars"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec1-hidden-silverbars'].'<br>';
   		}
   	
   	if ( $_POST['data-stan2'] === "1" && $_POST['data-stan3'] !== "1" ) {
   		$body .= 
   			'<br>Wykaz sprzedawanych metali nr 2'.'<br>';
   		if ( $_POST['kruszec2-rodzaj'] === "gold"){
   			$body .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec2-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silver"){
   			$body .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec2-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "coins"){
   			$body .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec2-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silvercoins"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec2-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "goldbars"){
   			$body .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec2-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silverbars"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec2-hidden-silverbars'].'<br>';
   		}	
   	}
   	
   	if ( $_POST['data-stan2'] === "1" && $_POST['data-stan3'] === "1" ) {
   		$body .= 
   			'<br>Wykaz sprzedawanych metali nr 2'.'<br>';
   		if ( $_POST['kruszec2-rodzaj'] === "gold"){
   			$body .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec2-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silver"){
   			$body .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec2-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "coins"){
   			$body .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec2-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silvercoins"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec2-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "goldbars"){
   			$body .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec2-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silverbars"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec2-hidden-silverbars'].'<br>';
   		}	
   		
   		$body .= 
   			'<br>Wykaz sprzedawanych metali nr 3'.'<br>';
   		if ( $_POST['kruszec3-rodzaj'] === "gold"){
   			$body .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec3-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silver"){
   			$body .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec3-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "coins"){
   			$body .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec3-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silvercoins"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec3-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "goldbars"){
   			$body .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec3-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silverbars"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec3-hidden-silverbars'].'<br>';
   		}		
   	}
   	
   	if ( $_POST['data-stan2'] !== "1" && $_POST['data-stan3'] === "1" ) {
   		$body .= 
   			'<br>Wykaz sprzedawanych metali nr 3'.'<br>';
   		if ( $_POST['kruszec3-rodzaj'] === "gold"){
   			$body .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec3-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silver"){
   			$body .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec3-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "coins"){
   			$body .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec3-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silvercoins"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec3-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "goldbars"){
   			$body .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec3-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silverbars"){
   			$body .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec3-hidden-silverbars'].'<br>';
   		}		
   	}
   	$body .= 
   		'<br><br>'.$_POST['podsumowanie-input'];
   	
   	$headers = array('Content-Type: text/html; charset=UTF-8');
   	if (wp_mail( $to, $subject, $body, $headers )){
   		echo '<script>alert("Pomyślnie wysłano formularz")</script>';
   	}
   	$body_klient =
   		     "<h1 style='text-align:center'>Dziękujemy Państwu za przesłanie formularza zgłoszeniowego.<br>
                Skontaktujemy się telefonicznie celem omówienia warunków sprzedaży.</h1><br>
   			Umowa kupna-sprzedaży zostaje zawartasdfadsfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfsadfsadfsadf 		djdkajsdkasdjalsdjajdsajsfsfsadfasdfdsssssaaaaaaadfadsfadsfasfdsafdsdafasdfasdfasdfasdfadsfasdsdfsadfasdfasdfsaddfdsafasdfadsf 
   asdfasdfasdfassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdsafadsfsadfasd 
   sadffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfsadfasdfasdfasd";
   	$body_klient .= "<h1 style='text-align:center'>Pozdrawiamy<br>
                        Personel portalu Sezamgold.pl</h1>";
   	$body_klient .= 'Imię: '.$_POST['imie'].'<br>'.
   					'Nazwisko: '.$_POST['nazwisko'].'<br>'.
   					'Ulica nr/lok: '.$_POST['ulica'].'<br>'.
   					'Miasto: '.$_POST['miasto'].'<br>'.
   					'Kod pocztowy: '.$_POST['kod_pocztowy'].'<br>'.
   					'Telefon: '.$_POST['nr_telefonu'].'<br>'.
   					'Email: '.$_POST['email'].'<br><br>'.
   					'Zgoda 1: Tak'.'<br>'.
   					'Zgoda 2: Tak'.'<br>'.
   					'Zgoda 3: Tak'.'<br>'.
   					'Zgoda 4: Tak'.'<br>';
   	$body_klient .= "<h1 style='text-align:center'>Lista towarów które sprzedajesz:</h1><br>";
   	$body_klient .= '<br>Wykaz sprzedawanych metali nr 1'.'<br>';
   		if ( $_POST['kruszec1-rodzaj'] === "gold"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec1-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "silver"){
   			$body_klient .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec1-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "coins"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec1-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "silvercoins"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec1-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "goldbars"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec1-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec1-rodzaj'] === "silverbars"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec1-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec1-hidden-silverbars'].'<br>';
   		}
   	
   	if ( $_POST['data-stan2'] === "1" && $_POST['data-stan3'] !== "1" ) {
   		$body_klient .= 
   			'<br>Wykaz sprzedawanych metali nr 2'.'<br>';
   		if ( $_POST['kruszec2-rodzaj'] === "gold"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec2-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silver"){
   			$body_klient .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec2-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "coins"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec2-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silvercoins"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec2-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "goldbars"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec2-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silverbars"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec2-hidden-silverbars'].'<br>';
   		}	
   	}
   	
   	if ( $_POST['data-stan2'] === "1" && $_POST['data-stan3'] === "1" ) {
   		$body_klient .= 
   			'<br>Wykaz sprzedawanych metali nr 2'.'<br>';
   		if ( $_POST['kruszec2-rodzaj'] === "gold"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec2-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silver"){
   			$body_klient .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec2-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "coins"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec2-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silvercoins"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec2-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "goldbars"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec2-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec2-rodzaj'] === "silverbars"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec2-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec2-hidden-silverbars'].'<br>';
   		}	
   		
   		$body_klient .= 
   			'<br>Wykaz sprzedawanych metali nr 3'.'<br>';
   		if ( $_POST['kruszec3-rodzaj'] === "gold"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec3-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silver"){
   			$body_klient .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec3-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "coins"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec3-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silvercoins"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec3-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "goldbars"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec3-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silverbars"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec3-hidden-silverbars'].'<br>';
   		}		
   	}
   	
   	if ( $_POST['data-stan2'] !== "1" && $_POST['data-stan3'] === "1" ) {
   		$body_klient .= 
   			'<br>Wykaz sprzedawanych metali nr 3'.'<br>';
   		if ( $_POST['kruszec3-rodzaj'] === "gold"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Złoto<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Próba złota: '.$_POST['kruszec3-hidden-gold'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silver"){
   			$body_klient .=
   				'Rodzaj kruszcza: Srebro<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Próba srebra: '.$_POST['kruszec3-hidden-silver'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "coins"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety złotej: '.$_POST['kruszec3-hidden-coins'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silvercoins"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne monety<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj monety srebrnej: '.$_POST['kruszec3-hidden-silvercoins'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "goldbars"){
   			$body_klient .=
   				'Rodzaj kruszcza: Złote sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki zlotej: '.$_POST['kruszec3-hidden-goldbars'].'<br>';
   		}
   		if ( $_POST['kruszec3-rodzaj'] === "silverbars"){
   			$body_klient .= 
   				'Rodzaj kruszcza: Srebrne sztabki<br>'.
   				'Waga / Ilość kruszcza: '.$_POST['kruszec3-waga'].' g/szt'.'<br>'.
   				'Rodzaj sztabki srebrnej: '.$_POST['kruszec3-hidden-silverbars'].'<br>';
   		}		
   	}
   	if ( empty($_POST['kruszec1-waga']) && empty($_POST['kruszec2-waga']) && empty($_POST['kruszec3-waga']) ) {
   		$body_klient .= 
   			'<br><br>Wartość zostanie podana po zważeniu metali ze wględu na brak podanej wagi. Poinformujemy Państwa o wycenie.';	
   	} else {
   		$body_klient .= 
   			'<br><br>'.$_POST['podsumowanie-input'];
   	}
   
   
   	wp_mail( $_POST['email'], $subject, $body_klient, $headers );
   }
   		
   
   
   $calcRawData = file_get_contents('https://lombardsezam.pl/sezamcalc.json');
   $calcRawDataDecoded = json_decode($calcRawData);
   $kruszeckruszecArray = ['goldassey' => $calcRawDataDecoded->goldassey, 'silverassey' => $calcRawDataDecoded->silverassey];
   
   $dateString = $calcRawDataDecoded->lastupdate->date;
   $dateString = explode(" ",$dateString);
   
   
   foreach ($calcRawDataDecoded->goldassey as $gold) {
   	$thisprice = round($gold->price_mod, 2);
   	if ($gold->assey == '999') {
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$gold999 = $thisprice;
   	}
   	if ($gold->assey == '986') {
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$gold986 = $thisprice;
   	}
   	if ($gold->assey == '916') {
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$gold916 = $thisprice;
   	}
   	if ($gold->assey == '900') {
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$gold900 = $thisprice;
   	}
   	if ($gold->assey == '750') {
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$gold750 = $thisprice;
   	}
   	if ($gold->assey == '585') {
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$gold585 = $thisprice;
   	}
   	if ($gold->assey == '375') {
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$gold375 = $thisprice;
   	}
   	if ($gold->assey == '333') {
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$gold333 = $thisprice;
   	}
   }
   
   foreach ($calcRawDataDecoded->silverassey as $gold) {
   	if ($gold->assey == '999') {
   	$thisprice = round($gold->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$silver999 = $thisprice;
   	}
   	if ($gold->assey == '925') {
   	$thisprice = round($gold->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$silver925 = $thisprice;
   	}
   	if ($gold->assey == '830') {
   	$thisprice = round($gold->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$silver830 = $thisprice;
   	}
   	if ($gold->assey == '800') {
   	$thisprice = round($gold->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$silver800 = $thisprice;
   	}
   	if ($gold->assey == '750') {
   	$thisprice = round($gold->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$silver750 = $thisprice;
   	}
   	if ($gold->assey == '700') {
   	$thisprice = round($gold->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$silver700 = $thisprice;
   	}
   	if ($gold->assey == '625') {
   	$thisprice = round($gold->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$silver625 = $thisprice;
   	}
   	if ($gold->assey == '600') {
   	$thisprice = round($gold->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$silver600 = $thisprice;
   	}
   }
   
   foreach ($calcRawDataDecoded->coins as $coin) {
   	if ($coin->name == 'Krugerrand 1 uncja') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$krugerrandjednauncja = $thisprice;
   	}
   	if ($coin->name == 'Krugerrand 1/2 uncji') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$krugerrandjednadrugauncji = $thisprice;
   	}
   	if ($coin->name == 'Krugerrand 1/4 uncji') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$krugerrandjednaczwartauncji = $thisprice;
   	}
   	if ($coin->name == '10 Dolarów USA') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$dziesiecdolarowusa = $thisprice;
   	}
   	if ($coin->name == '10 Rubli ( Rosja )') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$dziesiecrublirosja = $thisprice;
   	}
   	if ($coin->name == '15 Rubli ( Rosja )') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$pietnascierublirosja = $thisprice;
   	}
   	if ($coin->name == '20 Dolarów USA') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$dwadziesciadolarowusa = $thisprice;
   	}
   	if ($coin->name == '5 Rubli ( Rosja )') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$piecrublirosja = $thisprice;
   	}
   	if ($coin->name == 'Australijski Kangur 1 oz') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$australijskikangurjedenoz = $thisprice;
   	}
   	if ($coin->name == 'Australijski Kangur 1/2 oz') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$australijskikangurjednadrugaoz = $thisprice;
   	}
   	if ($coin->name == 'Britannia 1 oz.') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$britanniajedenoz = $thisprice;
   	}
   	if ($coin->name == 'Monety pr. 999 1 Uncja') {
   	$thisprice = round($coin->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$monetypr9991uncja = $thisprice;
   	}
   }
   
   foreach ($calcRawDataDecoded->silvercoins as $silvercoins) {
   	if ($silvercoins->name == 'Monety pr 999 1/2 Uncji') {
   	$thisprice = round($silvercoins->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$monetysrebrnepr99912uncji = $thisprice;
   	}
   	if ($silvercoins->name == 'Monety pr. 999 1 Uncja') {
   	$thisprice = round($silvercoins->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$monetysrebrnepr9991uncja = $thisprice;
   	}
   }
   
   foreach ($calcRawDataDecoded->goldbars as $goldbars) {
   	if ($goldbars->name == 'LBMA 1g') {
   	$thisprice = round($goldbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$lbma1g = $thisprice;
   	}
   	if ($goldbars->name == ' LBMA 2g') {
   	$thisprice = round($goldbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$lbmadwag = $thisprice;
   	}
   	if ($goldbars->name == ' LBMA 10g') {
   	$thisprice = round($goldbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$lbmadziesiecg = $thisprice;
   	}
   	if ($goldbars->name == 'LBMA 5g') {
   	$thisprice = round($goldbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$lbmapiecg = $thisprice;
   	}
   	if ($goldbars->name == 'LBMA 20g') {
   	$thisprice = round($goldbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$lbmadwadziesciag = $thisprice;
   	}
   	if ($goldbars->name == ' LBMA 50g') {
   	$thisprice = round($goldbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$lbmapiecdziesiatg = $thisprice;
   	}
   	if ($goldbars->name == 'LBMA 100 g ') {
   	$thisprice = round($goldbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$lbmastog = $thisprice;
   	}
   	if ($goldbars->name == 'Sztabka 1 uncja') {
   	$thisprice = round($goldbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$sztabkajednauncja = $thisprice;
   	}
   	if ($goldbars->name == 'Sztabka 1/2 uncji') {
   	$thisprice = round($goldbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$sztabkajednadrugauncji = $thisprice;
   	}
   }
   
   foreach ($calcRawDataDecoded->silverbars as $silverbars) {
   	if ($silverbars->name == 'Sztabka 100g') {
   	$thisprice = round($silverbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$sztabkastog = $thisprice;
   	}
   	if ($silverbars->name == 'Sztabka 10g') {
   	$thisprice = round($silverbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$sztabkadziesiecg = $thisprice;
   	}
   	if ($silverbars->name == 'Sztabka 30 g') {
   	$thisprice = round($silverbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$sztabkatrzydziescig = $thisprice;
   	}
   	if ($silverbars->name == 'Sztabka 50g') {
   	$thisprice = round($silverbars->price_mod, 2);
   		$thisprice = number_format((float)$thisprice, 2, '.', '');
   		$sztabkapiecdziesiatg = $thisprice;
   	}
   }
   
   ?>
<form id="form" action="" method="post" class="row row-cols-lg-auto g-3 align-items-center">
   <div id="hiddens"></div>
   <input type="hidden" id="podsumowanie-input" name="podsumowanie-input" value="0">
   <input type="hidden" id="data-stan2" name="data-stan2" value="0">
   <input type="hidden" id="data-stan3" name="data-stan3" value="0">
   <div class="col-12">
      <label class="form-label" for="imie">Imię</label>
      <input name="imie" type="text" id="imie" class="visually-hidden" required />
   </div>
   <div class="mt-2 col-12">
      <label class="form-label" for="nazwisko">Nazwisko</label>
      <input name="nazwisko" type="text" id="nazwisko" class="visually-hidden" required />
   </div>
   <div class="mt-2 col-12">
      <label class="form-label" for="email">Email</label>
      <input name="email" type="email" id="email" class="visually-hidden" required />
   </div>
   <div class="mt-2 col-12">
      <label class="form-label" for="nr_konta">Nr konta bankowego</label>
      <input name="nr_konta" type="text" id="nr_konta" class="visually-hidden" required />
   </div>
   <div class="mt-2 col-12">
      <label class="form-label" for="ulica">Ulica</label>
      <input name="ulica" type="text" id="ulica" class="visually-hidden" required />
   </div>
   <div class="mt-2 col-12">
      <label class="form-label" for="miasto">Miasto</label>
      <input name="miasto" type="text" id="miasto" class="visually-hidden" required />
   </div>
   <div class="mt-2 col-12">
      <label class="form-label" for="kod_pocztowy">Kod pocztowy</label>
      <input name="kod_pocztowy" type="text" id="kod_pocztowy" class="visually-hidden" required />
   </div>
   <div class="mt-2 col-12">
      <label class="form-label" for="nr_telefonu">Numer telefonu</label>
      <input name="nr_telefonu" type="text" id="nr_telefonu" class="visually-hidden" required />
   </div>
   <div class="kruszec1 col-12 p-3 mt-3">
      <input id="kruszec1-stan" name="kruszec1-stan" type="hidden" data-stan="1">
      <div class="">
         <p class="font-weight-bold">Wykaz sprzedawanych metali nr 1</p>
         <input id="kruszec1-proba-zloto" type="hidden" name="kruszec1-proba-zloto">
         <label  class="visually-hidden" for="inlineFormSelectPref">Wybierz kruszec...</label>
         <select id="kruszec1-rodzaj" name="kruszec1-rodzaj" class="select">
            <option value="gold">Złoto</option>
            <option value="silver">Srebro</option>
            <option value="coins">Monety złote</option>
            <option value="silvercoins">Monety srebrne</option>
            <option value="goldbars">Sztabki złote</option>
            <option value="silverbars">Sztabki srebrne</option>
         </select>
      </div>
      <div>
         <label class="mt-3 form-label" for="kruszec1-waga">Waga [g]</label>
         <input class="visually-hidden" type="number" id="kruszec1-waga" name="kruszec1-waga">
         <p id="pusta-waga1">Nie znasz wagi? Zostaw puste pole.</p>
      </div>
      <div id="gold1">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz próbę...</label>
         <select id="kruszec1-zloto" name="kruszec1-zloto" class="select">
            <option value="<?php echo $gold999; ?>">Próba 999 - aktualna cena za 1 gram: <?php echo $gold999; ?> zł</option>
            <option value="<?php echo $gold986; ?>">Próba 986 - aktualna cena za 1 gram: <?php echo $gold986; ?> zł</option>
            <option value="<?php echo $gold916; ?>">Próba 916 - aktualna cena za 1 gram: <?php echo $gold916; ?> zł</option>
            <option value="<?php echo $gold900; ?>">Próba 900 - aktualna cena za 1 gram: <?php echo $gold900; ?> zł</option>
            <option value="<?php echo $gold750; ?>">Próba 750 - aktualna cena za 1 gram: <?php echo $gold750; ?> zł</option>
            <option value="<?php echo $gold585; ?>">Próba 585 - aktualna cena za 1 gram: <?php echo $gold585; ?> zł</option>
            <option value="<?php echo $gold375; ?>">Próba 375 - aktualna cena za 1 gram: <?php echo $gold375; ?> zł</option>
            <option value="<?php echo $gold333; ?>">Próba 333 - aktualna cena za 1 gram: <?php echo $gold333; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="silver1">
         <label class="visually-hidden" for="inlineFormSelectPref">Wybierz próbę...</label>
         <select id="kruszec1-srebro" name="kruszec1-srebro" class="select">
            <option value="<?php echo $silver999; ?>">Próba 999 - aktualna cena za 1 gram: <?php echo $silver999; ?> zł</option>
            <option value="<?php echo $silver925; ?>">Próba 925 - aktualna cena za 1 gram: <?php echo $silver925; ?> zł</option>
            <option value="<?php echo $silver830; ?>">Próba 830 - aktualna cena za 1 gram: <?php echo $silver830; ?> zł</option>
            <option value="<?php echo $silver800; ?>">Próba 800 - aktualna cena za 1 gram: <?php echo $silver800; ?> zł</option>
            <option value="<?php echo $silver750; ?>">Próba 750 - aktualna cena za 1 gram: <?php echo $silver750; ?> zł</option>
            <option value="<?php echo $silver700; ?>">Próba 700 - aktualna cena za 1 gram: <?php echo $silver700; ?> zł</option>
            <option value="<?php echo $silver625; ?>">Próba 625 - aktualna cena za 1 gram: <?php echo $silver625; ?> zł</option>
            <option value="<?php echo $silver600; ?>">Próba 600 - aktualna cena za 1 gram: <?php echo $silver600; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="coins1">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz monetę...</label>
         <select id="monety1-zlote" name="monety1-zlote" class="select">
            <option value="<?php echo $krugerrandjednauncja; ?>">Krugerrand 1 uncja: <?php echo $krugerrandjednauncja; ?> zł</option>
            <option value="<?php echo $krugerrandjednadrugauncji; ?>">Krugerrand 1/2 uncji: <?php echo $krugerrandjednadrugauncji; ?> zł</option>
            <option value="<?php echo $krugerrandjednaczwartauncji; ?>">Krugerrand 1/4 uncji: <?php echo $krugerrandjednaczwartauncji; ?> zł</option>
            <option value="<?php echo $dziesiecdolarowusa; ?>">10 Dolarów USA: <?php echo $dziesiecdolarowusa; ?> zł</option>
            <option value="<?php echo $dziesiecrublirosja; ?>">10 Rubli ( Rosja ): <?php echo $dziesiecrublirosja; ?> zł</option>
            <option value="<?php echo $pietnascierublirosja; ?>">15 Rubli ( Rosja ): <?php echo $pietnascierublirosja; ?> zł</option>
            <option value="<?php echo $dwadziesciadolarowusa; ?>">20 Dolarów USA: <?php echo $dwadziesciadolarowusa; ?> zł</option>
            <option value="<?php echo $piecrublirosja; ?>">5 Rubli ( Rosja ): <?php echo $piecrublirosja; ?> zł</option>
            <option value="<?php echo $australijskikangurjedenoz; ?>">Australijski Kangur 1 oz: <?php echo $australijskikangurjedenoz; ?> zł</option>
            <option value="<?php echo $australijskikangurjednadrugaoz; ?>">Australijski Kangur 1/2 oz: <?php echo $australijskikangurjednadrugaoz; ?> zł</option>
            <option value="<?php echo $britanniajedenoz; ?>">Britannia 1 oz.: <?php echo $britanniajedenoz; ?> zł</option>
            <option value="<?php echo $monetypr9991uncja; ?>">Monety pr. 999 1 Uncja: <?php echo $monetypr9991uncja; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="silvercoins1">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz monetę...</label>
         <select id="monety1-srebrne" name="monety1-srebrne" class="select">
            <option value="<?php echo $monetysrebrnepr99912uncji; ?>">Monety pr 999 1/2 Uncji: <?php echo $monetysrebrnepr99912uncji; ?> zł</option>
            <option value="<?php echo $monetysrebrnepr9991uncja; ?>">Monety pr. 999 1 Uncja: <?php echo $monetysrebrnepr9991uncja; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="goldbars1">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz sztabkę...</label>
         <select id="sztabki1-zlote" name="sztabki1-zlote" class="select">
            <option value="<?php echo $lbma1g; ?>">LBMA 1g: <?php echo $lbma1g; ?> zł</option>
            <option value="<?php echo $lbmadwag; ?>">LBMA 2g: <?php echo $lbmadwag; ?> zł</option>
            <option value="<?php echo $lbmadziesiecg; ?>">LBMA 10g: <?php echo $lbmadziesiecg; ?> zł</option>
            <option value="<?php echo $lbmapiecg; ?>">LBMA 5g: <?php echo $lbmapiecg; ?> zł</option>
            <option value="<?php echo $lbmadwadziesciag; ?>">LBMA 20g: <?php echo $lbmadwadziesciag; ?> zł</option>
            <option value="<?php echo $lbmapiecdziesiatg; ?>">LBMA 50g: <?php echo $lbmapiecdziesiatg; ?> zł</option>
            <option value="<?php echo $lbmastog; ?>">LBMA 100 g: <?php echo $lbmastog; ?> zł</option>
            <option value="<?php echo $sztabkajednauncja; ?>">Sztabka 1 uncja: <?php echo $sztabkajednauncja; ?> zł</option>
            <option value="<?php echo $sztabkajednadrugauncji; ?>">Sztabka 1/2 uncji: <?php echo $sztabkajednadrugauncji; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="silverbars1">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz sztabkę...</label>
         <select id="sztabki1-srebrne" name="sztabki1-srebrne" class="select">
            <option value="<?php echo $sztabkastog; ?>">Sztabka 100g: <?php echo $sztabkastog; ?> zł</option>
            <option value="<?php echo $sztabkadziesiecg; ?>">Sztabka 10g: <?php echo $sztabkadziesiecg; ?> zł</option>
            <option value="<?php echo $sztabkatrzydziescig; ?>">Sztabka 30 g: <?php echo $sztabkatrzydziescig; ?> zł</option>
            <option value="<?php echo $sztabkapiecdziesiatg; ?>">Sztabka 50g: <?php echo $sztabkapiecdziesiatg; ?> zł</option>
         </select>
      </div>
      <div id="wartosc1" class="mt-3 row justify-content-center">
         <p style="font-size: 1.2rem;" class="text-center p-2 col-auto border border-danger font-weight-bold"><span>0</span> zł</p>
      </div>
      <button type="button" class="plus">+ dodaj kolejne</button>
   </div>
   <div class="kruszec2 col-12 p-3 d-none">
      <input id="kruszec2-stan" name="kruszec2-stan" type="hidden" data-stan="0">
      <div class="">
         <p class="font-weight-bold">Wykaz sprzedawanych metali nr 2</p>
         <label  class="visually-hidden" for="inlineFormSelectPref">Wybierz kruszec...</label>
         <select id="kruszec2-rodzaj" name="kruszec2-rodzaj" class="select">
            <option value="gold">Złoto</option>
            <option value="silver">Srebro</option>
            <option value="coins">Monety złote</option>
            <option value="silvercoins">Monety srebrne</option>
            <option value="goldbars">Sztabki złote</option>
            <option value="silverbars">Sztabki srebrne</option>
         </select>
      </div>
      <div>
         <label class="mt-3 form-label" for="kruszec2-waga">Waga [g]</label>
         <input class="visually-hidden" type="number" id="kruszec2-waga" name="kruszec2-waga" >
         <p id="pusta-waga2">Nie znasz wagi? Zostaw puste pole.</p>
      </div>
      <div class="" id="gold2">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz próbę...</label>
         <select id="kruszec2-zloto" name="kruszec2-zloto" class="select">
            <option value="<?php echo $gold999; ?>">Próba 999 - aktualna cena za 1 gram: <?php echo $gold999; ?> zł</option>
            <option value="<?php echo $gold986; ?>">Próba 986 - aktualna cena za 1 gram: <?php echo $gold986; ?> zł</option>
            <option value="<?php echo $gold916; ?>">Próba 916 - aktualna cena za 1 gram: <?php echo $gold916; ?> zł</option>
            <option value="<?php echo $gold900; ?>">Próba 900 - aktualna cena za 1 gram: <?php echo $gold900; ?> zł</option>
            <option value="<?php echo $gold750; ?>">Próba 750 - aktualna cena za 1 gram: <?php echo $gold750; ?> zł</option>
            <option value="<?php echo $gold585; ?>">Próba 585 - aktualna cena za 1 gram: <?php echo $gold585; ?> zł</option>
            <option value="<?php echo $gold375; ?>">Próba 375 - aktualna cena za 1 gram: <?php echo $gold375; ?> zł</option>
            <option value="<?php echo $gold333; ?>">Próba 333 - aktualna cena za 1 gram: <?php echo $gold333; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="silver2">
         <label class="visually-hidden" for="inlineFormSelectPref">Wybierz próbę...</label>
         <select id="kruszec2-srebro" name="kruszec2-srebro" class="select">
            <option value="<?php echo $silver999; ?>">Próba 999 - aktualna cena za 1 gram: <?php echo $silver999; ?> zł</option>
            <option value="<?php echo $silver925; ?>">Próba 925 - aktualna cena za 1 gram: <?php echo $silver925; ?> zł</option>
            <option value="<?php echo $silver830; ?>">Próba 830 - aktualna cena za 1 gram: <?php echo $silver830; ?> zł</option>
            <option value="<?php echo $silver800; ?>">Próba 800 - aktualna cena za 1 gram: <?php echo $silver800; ?> zł</option>
            <option value="<?php echo $silver750; ?>">Próba 750 - aktualna cena za 1 gram: <?php echo $silver750; ?> zł</option>
            <option value="<?php echo $silver700; ?>">Próba 700 - aktualna cena za 1 gram: <?php echo $silver700; ?> zł</option>
            <option value="<?php echo $silver625; ?>">Próba 625 - aktualna cena za 1 gram: <?php echo $silver625; ?> zł</option>
            <option value="<?php echo $silver600; ?>">Próba 600 - aktualna cena za 1 gram: <?php echo $silver600; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="coins2">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz monetę...</label>
         <select id="monety2-zlote" name="monety2-zlote" class="select">
            <option value="<?php echo $krugerrandjednauncja; ?>">Krugerrand 1 uncja: <?php echo $krugerrandjednauncja; ?> zł</option>
            <option value="<?php echo $krugerrandjednadrugauncji; ?>">Krugerrand 1/2 uncji: <?php echo $krugerrandjednadrugauncji; ?> zł</option>
            <option value="<?php echo $krugerrandjednaczwartauncji; ?>">Krugerrand 1/4 uncji: <?php echo $krugerrandjednaczwartauncji; ?> zł</option>
            <option value="<?php echo $dziesiecdolarowusa; ?>">10 Dolarów USA: <?php echo $dziesiecdolarowusa; ?> zł</option>
            <option value="<?php echo $dziesiecrublirosja; ?>">10 Rubli ( Rosja ): <?php echo $dziesiecrublirosja; ?> zł</option>
            <option value="<?php echo $pietnascierublirosja; ?>">15 Rubli ( Rosja ): <?php echo $pietnascierublirosja; ?> zł</option>
            <option value="<?php echo $dwadziesciadolarowusa; ?>">20 Dolarów USA: <?php echo $dwadziesciadolarowusa; ?> zł</option>
            <option value="<?php echo $piecrublirosja; ?>">5 Rubli ( Rosja ): <?php echo $piecrublirosja; ?> zł</option>
            <option value="<?php echo $australijskikangurjedenoz; ?>">Australijski Kangur 1 oz: <?php echo $australijskikangurjedenoz; ?> zł</option>
            <option value="<?php echo $australijskikangurjednadrugaoz; ?>">Australijski Kangur 1/2 oz: <?php echo $australijskikangurjednadrugaoz; ?> zł</option>
            <option value="<?php echo $britanniajedenoz; ?>">Britannia 1 oz.: <?php echo $britanniajedenoz; ?> zł</option>
            <option value="<?php echo $monetypr9991uncja; ?>">Monety pr. 999 1 Uncja: <?php echo $monetypr9991uncja; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="silvercoins2">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz monetę...</label>
         <select id="monety2-srebrne" name="monety2-srebrne" class="select">
            <option value="<?php echo $monetysrebrnepr99912uncji; ?>">Monety pr 999 1/2 Uncji: <?php echo $monetysrebrnepr99912uncji; ?> zł</option>
            <option value="<?php echo $monetysrebrnepr9991uncja; ?>">Monety pr. 999 1 Uncja: <?php echo $monetysrebrnepr9991uncja; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="goldbars2">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz sztabkę...</label>
         <select id="sztabki2-zlote" name="sztabki2-zlote" class="select">
            <option value="<?php echo $lbma1g; ?>">LBMA 1g: <?php echo $lbma1g; ?> zł</option>
            <option value="<?php echo $lbmadwag; ?>">LBMA 2g: <?php echo $lbmadwag; ?> zł</option>
            <option value="<?php echo $lbmadziesiecg; ?>">LBMA 10g: <?php echo $lbmadziesiecg; ?> zł</option>
            <option value="<?php echo $lbmapiecg; ?>">LBMA 5g: <?php echo $lbmapiecg; ?> zł</option>
            <option value="<?php echo $lbmadwadziesciag; ?>">LBMA 20g: <?php echo $lbmadwadziesciag; ?> zł</option>
            <option value="<?php echo $lbmapiecdziesiatg; ?>">LBMA 50g: <?php echo $lbmapiecdziesiatg; ?> zł</option>
            <option value="<?php echo $lbmastog; ?>">LBMA 100 g: <?php echo $lbmastog; ?> zł</option>
            <option value="<?php echo $sztabkajednauncja; ?>">Sztabka 1 uncja: <?php echo $sztabkajednauncja; ?> zł</option>
            <option value="<?php echo $sztabkajednadrugauncji; ?>">Sztabka 1/2 uncji: <?php echo $sztabkajednadrugauncji; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="silverbars2">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz sztabkę...</label>
         <select id="sztabki2-srebrne" name="sztabki2-srebrne" class="select">
            <option value="<?php echo $sztabkastog; ?>">Sztabka 100g: <?php echo $sztabkastog; ?> zł</option>
            <option value="<?php echo $sztabkadziesiecg; ?>">Sztabka 10g: <?php echo $sztabkadziesiecg; ?> zł</option>
            <option value="<?php echo $sztabkatrzydziescig; ?>">Sztabka 30 g: <?php echo $sztabkatrzydziescig; ?> zł</option>
            <option value="<?php echo $sztabkapiecdziesiatg; ?>">Sztabka 50g: <?php echo $sztabkapiecdziesiatg; ?> zł</option>
         </select>
      </div>
      <div id="wartosc2" class="mt-3 row justify-content-center">
         <p style="font-size: 1.2rem;" class="text-center p-2 col-auto border border-danger font-weight-bold"><span>0</span> zł</p>
      </div>
      <button type="button" class="plus">+ dodaj kolejne</button>
      <button type="button" id="minus-kruszec2" class="minus">- usuń</button>
   </div>
   <div class="kruszec3 col-12 p-3 d-none">
      <input id="kruszec3-stan" name="kruszec3-stan" type="hidden" data-stan="0">
      <div class="">
         <p class="font-weight-bold">Wykaz sprzedawanych metali nr 3</p>
         <label  class="visually-hidden" for="inlineFormSelectPref">Wybierz kruszec...</label>
         <select id="kruszec3-rodzaj" name="kruszec3-rodzaj" class="select">
            <option value="gold">Złoto</option>
            <option value="silver">Srebro</option>
            <option value="coins">Monety złote</option>
            <option value="silvercoins">Monety srebrne</option>
            <option value="goldbars">Sztabki złote</option>
            <option value="silverbars">Sztabki srebrne</option>
         </select>
      </div>
      <div>
         <label class="mt-3 form-label" for="kruszec3-waga">Waga [g]</label>
         <input class="visually-hidden" type="number" id="kruszec3-waga" name="kruszec3-waga">
         <p id="pusta-waga3">Nie znasz wagi? Zostaw puste pole.</p>
      </div>
      <div class="" id="gold3">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz próbę...</label>
         <select id="kruszec3-zloto" name="kruszec3-zloto" class="select">
            <option value="<?php echo $gold999; ?>">Próba 999 - aktualna cena za 1 gram: <?php echo $gold999; ?> zł</option>
            <option value="<?php echo $gold986; ?>">Próba 986 - aktualna cena za 1 gram: <?php echo $gold986; ?> zł</option>
            <option value="<?php echo $gold916; ?>">Próba 916 - aktualna cena za 1 gram: <?php echo $gold916; ?> zł</option>
            <option value="<?php echo $gold900; ?>">Próba 900 - aktualna cena za 1 gram: <?php echo $gold900; ?> zł</option>
            <option value="<?php echo $gold750; ?>">Próba 750 - aktualna cena za 1 gram: <?php echo $gold750; ?> zł</option>
            <option value="<?php echo $gold585; ?>">Próba 585 - aktualna cena za 1 gram: <?php echo $gold585; ?> zł</option>
            <option value="<?php echo $gold375; ?>">Próba 375 - aktualna cena za 1 gram: <?php echo $gold375; ?> zł</option>
            <option value="<?php echo $gold333; ?>">Próba 333 - aktualna cena za 1 gram: <?php echo $gold333; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="silver3">
         <label class="visually-hidden" for="inlineFormSelectPref">Wybierz próbę...</label>
         <select id="kruszec3-srebro" name="kruszec3-srebro" class="select">
            <option value="<?php echo $silver999; ?>">Próba 999 - aktualna cena za 1 gram: <?php echo $silver999; ?> zł</option>
            <option value="<?php echo $silver925; ?>">Próba 925 - aktualna cena za 1 gram: <?php echo $silver925; ?> zł</option>
            <option value="<?php echo $silver830; ?>">Próba 830 - aktualna cena za 1 gram: <?php echo $silver830; ?> zł</option>
            <option value="<?php echo $silver800; ?>">Próba 800 - aktualna cena za 1 gram: <?php echo $silver800; ?> zł</option>
            <option value="<?php echo $silver750; ?>">Próba 750 - aktualna cena za 1 gram: <?php echo $silver750; ?> zł</option>
            <option value="<?php echo $silver700; ?>">Próba 700 - aktualna cena za 1 gram: <?php echo $silver700; ?> zł</option>
            <option value="<?php echo $silver625; ?>">Próba 625 - aktualna cena za 1 gram: <?php echo $silver625; ?> zł</option>
            <option value="<?php echo $silver600; ?>">Próba 600 - aktualna cena za 1 gram: <?php echo $silver600; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="coins3">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz monetę...</label>
         <select id="monety3-zlote" name="monety3-zlote" class="select">
            <option value="<?php echo $krugerrandjednauncja; ?>">Krugerrand 1 uncja: <?php echo $krugerrandjednauncja; ?> zł</option>
            <option value="<?php echo $krugerrandjednadrugauncji; ?>">Krugerrand 1/2 uncji: <?php echo $krugerrandjednadrugauncji; ?> zł</option>
            <option value="<?php echo $krugerrandjednaczwartauncji; ?>">Krugerrand 1/4 uncji: <?php echo $krugerrandjednaczwartauncji; ?> zł</option>
            <option value="<?php echo $dziesiecdolarowusa; ?>">10 Dolarów USA: <?php echo $dziesiecdolarowusa; ?> zł</option>
            <option value="<?php echo $dziesiecrublirosja; ?>">10 Rubli ( Rosja ): <?php echo $dziesiecrublirosja; ?> zł</option>
            <option value="<?php echo $pietnascierublirosja; ?>">15 Rubli ( Rosja ): <?php echo $pietnascierublirosja; ?> zł</option>
            <option value="<?php echo $dwadziesciadolarowusa; ?>">20 Dolarów USA: <?php echo $dwadziesciadolarowusa; ?> zł</option>
            <option value="<?php echo $piecrublirosja; ?>">5 Rubli ( Rosja ): <?php echo $piecrublirosja; ?> zł</option>
            <option value="<?php echo $australijskikangurjedenoz; ?>">Australijski Kangur 1 oz: <?php echo $australijskikangurjedenoz; ?> zł</option>
            <option value="<?php echo $australijskikangurjednadrugaoz; ?>">Australijski Kangur 1/2 oz: <?php echo $australijskikangurjednadrugaoz; ?> zł</option>
            <option value="<?php echo $britanniajedenoz; ?>">Britannia 1 oz.: <?php echo $britanniajedenoz; ?> zł</option>
            <option value="<?php echo $monetypr9991uncja; ?>">Monety pr. 999 1 Uncja: <?php echo $monetypr9991uncja; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="silvercoins3">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz monetę...</label>
         <select id="monety3-srebrne" name="monety3-srebrne" class="select">
            <option value="<?php echo $monetysrebrnepr99912uncji; ?>">Monety pr 999 1/2 Uncji: <?php echo $monetysrebrnepr99912uncji; ?> zł</option>
            <option value="<?php echo $monetysrebrnepr9991uncja; ?>">Monety pr. 999 1 Uncja: <?php echo $monetysrebrnepr9991uncja; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="goldbars3">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz sztabkę...</label>
         <select id="sztabki3-zlote" name="sztabki3-zlote" class="select">
            <option value="<?php echo $lbma1g; ?>">LBMA 1g: <?php echo $lbma1g; ?> zł</option>
            <option value="<?php echo $lbmadwag; ?>">LBMA 2g: <?php echo $lbmadwag; ?> zł</option>
            <option value="<?php echo $lbmadziesiecg; ?>">LBMA 10g: <?php echo $lbmadziesiecg; ?> zł</option>
            <option value="<?php echo $lbmapiecg; ?>">LBMA 5g: <?php echo $lbmapiecg; ?> zł</option>
            <option value="<?php echo $lbmadwadziesciag; ?>">LBMA 20g: <?php echo $lbmadwadziesciag; ?> zł</option>
            <option value="<?php echo $lbmapiecdziesiatg; ?>">LBMA 50g: <?php echo $lbmapiecdziesiatg; ?> zł</option>
            <option value="<?php echo $lbmastog; ?>">LBMA 100 g: <?php echo $lbmastog; ?> zł</option>
            <option value="<?php echo $sztabkajednauncja; ?>">Sztabka 1 uncja: <?php echo $sztabkajednauncja; ?> zł</option>
            <option value="<?php echo $sztabkajednadrugauncji; ?>">Sztabka 1/2 uncji: <?php echo $sztabkajednadrugauncji; ?> zł</option>
         </select>
      </div>
      <div style="display:none" id="silverbars3">
         <label class="mt-3 visually-hidden" for="inlineFormSelectPref">Wybierz sztabkę...</label>
         <select id="sztabki3-srebrne" name="sztabki3-srebrne" class="select">
            <option value="<?php echo $sztabkastog; ?>">Sztabka 100g: <?php echo $sztabkastog; ?> zł</option>
            <option value="<?php echo $sztabkadziesiecg; ?>">Sztabka 10g: <?php echo $sztabkadziesiecg; ?> zł</option>
            <option value="<?php echo $sztabkatrzydziescig; ?>">Sztabka 30 g: <?php echo $sztabkatrzydziescig; ?> zł</option>
            <option value="<?php echo $sztabkapiecdziesiatg; ?>">Sztabka 50g: <?php echo $sztabkapiecdziesiatg; ?> zł</option>
         </select>
      </div>
      <div id="wartosc3" class="mt-3 row justify-content-center">
         <p style="font-size: 1.2rem;" class="text-center p-2 col-auto border border-danger font-weight-bold"><span>0</span> zł</p>
      </div>
      <button type="button" id="minus-kruszec3" class="minus">- usuń</button>
   </div>
   <div id="podsumowanie" class="mt-5 row ml-auto">
      <p class="p-2 col-12 border border-danger"><span>Wartość zostanie podana po zważeniu metali ze wględu na brak podanej wagi. Poinformujemy Państwa o wycenie.</span></p>
   </div>
   <div class="row justify-content-center align-items-center">
      <div class="col-12">
         <input style="width:1rem" type="checkbox" name="zgoda1" id="zgoda1" required>
         <label style="width: 95%;" for="zgoda1">Zapoznałem się i akceptuję <a target="_blank" href="http://sezamgold.pl/regulamin/">Regulamin oraz Politykę prywatności</a>. Wyrażam zgodę na przetwarzanie i wykorzystywanie moich danych osobowych oraz umieszczenie ich w bazie danych firmy PUH SEZAM z siedzibą w Gorzowie Wlkp.  w celu realizacji umowy.</label>
      </div>
   </div>
   <div class="row justify-content-center align-items-center">
      <div class="col-12">
         <input style="width:1rem" type="checkbox" name="zgoda2" id="zgoda2" required>
         <label style="width: 95%;" for="zgoda2">Zgadzam się na kontakt telefoniczny właściciela witryny.</label>
      </div>
   </div>
   <div class="row justify-content-center align-items-center">
      <div class="col-12">
         <input style="width:1rem" type="checkbox" name="zgoda3" id="zgoda3" required>
         <label style="width: 95%;" for="zgoda3">Treść zgody nr 3 jasjaksjflsa asjlfjasofjsaijfas asjfliasf dsfsdfdsfdsf</label>
      </div>
   </div>
   <div class="row justify-content-center align-items-center">
      <div class="col-12">
         <input style="width:1rem" type="checkbox" name="zgoda4" id="zgoda4" required>
         <label style="width: 95%;" for="zgoda4">Treść zgody nr 4 jasjaksjflsa asjlfjasofjsaijfas asjfliasf dsfsdfdsfdsf</label>
      </div>
   </div>
   <div class="col-12">
      <input style="width: fit-content; transition: all 0.3s ease" id="submit" class="mt-5 mm-button" type="submit" name="submit" value="Wyślij">
   </div>
</form>
<script src="<?php echo get_template_directory_uri() ?>/formularz.js"></script>
