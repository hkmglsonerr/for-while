/*
for döngüsü belirli bir başlangıç noktasından başlayarak belirli
bir koşul sağlandığı sürece bir dizi adımı tekrar etmek için kullanılır
üç ana bileşen içerir
*/

//? for(başlangıç;koşul;adım)
//? genelde i,j,k harfleri kullanılır evrenseldir

//!ÖRNEK 
//? i sıfırdan başlayıp 5 e kadar olan sayıları yazdırsın

for(let i=0;i<5;i++){
    console.log(i);
}

/////////////////////////////////////////////////////////

//!ÖRNEK
//? for döngüsü ile 5 er 5 er arttırma 50 e kadar

for(let i=0;i<=50;i+=5){
    console.log(i);
}


/////////////////////////////////////////////////////////

//!ÖRNEK
//? i 5 den başlayıp 20 ye kadar olan sayıları ve "merhaba" kelimesiniz yazdır

for(let i=5;i<=20;i++){
    console.log(i,"Merhaba");
}

//başlangıç değeri 5 olan i değişkeni kullanılır 20 den küçük olduğu sürece çalışır
//her adımda i yi ve merhaba kelimesini yazdırır

/////////////////////////////////////////////////////////

/*
while döngüsü:belirli bir koşul sağlandığı sürece çalışır
başlangıç değeri ve artış gibi parametreler kullanılmaz
bu nedenle döngü koşulu döngünün içinde güncellenmelidir
aksi taktirde sonsuz döngü olabilir
*/


//!ÖRNEK
//?WHİLE DÖNGÜSÜ
//? i 20 den küçük olduğu sürece i yi çalıştır

let i=0
while(i<20){
    console.log(i++);
}

//başlangıç değeri sıfır olan i değişkeni kullanılır
//20 den küçük olduğu sürece çalışır
//her adımda i yi yazdırır ve bir sonraki adımda i yi bir arttırır



/////////////////////////////////////////////////////////


//!ÖRNEK
//?While döngüsü ile 5 er 5er arttırma yapın

let k =0
while(k<=50){
    console.log(k);
    k+=5
}


/////////////////////////////////////////////////////////


//!ÖRNEK
//?While döngüsü ile 5 er 5 er azaltma yapın

let sayi=50
while(sayi>=0){
    console.log(sayi);
    sayi-=5
}

//sayı sıfırdan büyük veya eşit olduğu sürece döngü çalışır
//sayıyı 5 er 5 er azaltır 50 den - 0 a kadar


/////////////////////////////////////////////////////////

//!ÖRNEK
//? For döngüsü ile 20 den geriye sayma

for(let i=20;i>0;i--){
    console.log(i);
}

//başlangıç değeri 20 olan i değişkeni kullanılır
//0 dan büyük olduğu sürece çalışır
//her adımda i yi geriye doğru yazdırır


/////////////////////////////////////////////////////////


//!ÖRNEK
//? while döngüsü ile 30 den geriye sayma

let j =30
while(j>10){
    console.log(j--);
}

//başlangıç değeri 30 olan j değişkeni kullanılır
//10 dan büyük olduğu sürece çalışır
//her adımda j yi geriye doğru yazdırır ve bir sonraki adımda j yi bir azaltır


/////////////////////////////////////////////////////////


//!ÖRNEK
//?Array ile for döngüsü
//? Her meyvenin baş harfini büyük yaparak yazdır

let meyveler =["armut","karpuz","erik","elma","muz","mandalina"]
for(let i=0;i<meyveler.length;i++){
    console.log(meyveler[i].charAt(0).toUpperCase()+ meyveler[i].slice(1));
}

//for döngüsü başlatılır ve i değişkeni 0 ayarlanır
/*
döngü i değişkeninin 0 dan başlayıp meyveler dizisinin uzunluğundan
küçük olduğu sürece devam eder dizideki her meyve için döngünün
çalışacağı anlamına gelir

her döngü adımında meyveler[i] ifadesi kullanarak meyveler dizisinden
bir meyve alınır

charAt(0) metodu kullanılarak meyvenin ilk harfi alınır

touppercase() yöntemi ile ilk harf büyük harfe dönüştü

slice(1) metodu ile de meyvenin ilk harfi kesildi ve kalan kısmı yazdırıldı
*/



/////////////////////////////////////////////////////////


//!ÖRNEK
//? while döngüsü ile meyveleri sıralama

j=0
while(j<meyveler.length){
    console.log(meyveler[j++]);
}



/////////////////////////////////////////////////////////

//!ÖRNEK
//?foreach yöntemi ile meyveleri sıralama

meyveler.forEach((meyve)=>{
   console.log(meyve); 
})


/////////////////////////////////////////////////////////

//!ÖRNEK (0)
//kullanıcıdan bir başlangıç değeri alın
//kullanıcıdan bir bitiş değeri alın
//başlangıçtan bitişe kadar olan sayıları yazdırın
//for döngüsü ile yapın

// let baslangic=Number(prompt("hangi sayıdan başlasın"))
// let bitis=Number(prompt("hangi sayıyla bitsin"))

// for(let i=baslangic;i<bitis;i++){
//     console.log(i);
// }



/////////////////////////////////////////////////////////

//!ÖRNEK
//?yukarıdaki örneğin arttırma ve azaltmalı hali

// let baslangic=Number(prompt("hangi sayıdan başlasın"))
// let bitis=Number(prompt("hangi sayıyla bitsin"))

// if(baslangic<bitis){
//     for(let i=baslangic;i<bitis;i++){
//         console.log(i);
//     }
// }else if(baslangic>bitis){
//     for(let i=baslangic;i>bitis;i--){
//         console.log(i);
//     }
// }


/////////////////////////////////////////////////////////

//!ÖRNEK (0)
//? while döngüsü ile 2 üstteki örneği yaptık

// i=baslangic
// while(i<bitis){
//     console.log(i);
//     i++
// }


/////////////////////////////////////////////////////////

//!ÖRNEK
//? 0 dan 100 e kadar olan sayıların toplamını for döngüsü ile hesapla

let toplam=0
for(let sayi=0;sayi<=100;sayi++){
    toplam+=sayi
}
console.log("0 dan 100 e kadar olan sayıların toplamı: "+toplam);


/////////////////////////////////////////////////////////

//!ÖRNEK
//? 0 dan 100 e kadar olan tek sayıların toplamı

toplam=0
for(let sayi=1;sayi<=100;sayi+=2){
    toplam+=sayi
}
console.log("0 dan 100 e kadar tek sayıların toplamı: " + toplam);


/////////////////////////////////////////////////////////


//?break ve continue
//? break: o koşul sağlandığında döngüyü sonlandırır
//? continue: o koşul sağlandığında döngü sırası atlar ve devam eder

//!ÖRNEK
//?5 e gelindiğinde döngü sonlansın

for(let i=0;i<10;i++){
    if(i==5){
        break
    }
    console.log(i);
}


/////////////////////////////////////////////////////////

//!ÖRNEK
//? continue kullanarak 2 yi atlat

i=0
while(i<=5){
    if(i==2){
        i++
        continue
    }
    console.log(i++);
}


/////////////////////////////////////////////////////////
