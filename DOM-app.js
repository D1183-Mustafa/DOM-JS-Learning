// let x ;

// x = window.document;
// x = document.URL;
// x = document.domain;
// x = document.images;
// x = document.title;
// x = document.forms;
// x = document.forms[0].id;
// x = document.forms[0].method;
// x = document.forms[0].action;
// x = document.scripts;

// console.log(x);


// eleman seçme

//********************TEK ELEMAN SEÇME*******************

// let y = document.getElementById("header");
// // y = y.id;

// y.style.fontSize = "45px";
// y.style.color='red';
// y.style.fontWeight= 900;

// y.innerText = "Mustafa"
// console.log(y);


// let x = document.querySelector("#header");  //burada classlar veya tagler de kullanılabilir. bu yöntem kullanılırken
// //aranan ilk ifade getirilir.
// x.style.fontSize = "50px"
// x.style.color = "blue"
// x.innerText = "Mustafa"

// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li").style.color = "orange"
// document.querySelector("li:nth-child(2)").style.color = "green"
// document.querySelector("li:nth-child(3)").textContent = "Altaş";
// // document.querySelector("li").className = ""; // burada da ilgili element'de class name'ni değiştirir.
// // document.querySelector("li").classList.add("classname"); --->  var olan class üzerine yeni bir class ekler.
// console.log(x);




//************************ÇOKLU ELEMAN SEÇME*********************

// let x = document.getElementsByClassName("list-group-item");
// console.log(x);
// console.log(x[0]);  // colection içinde 0 index numaralı elemanı almak için yazıldı.
// x[0].style.color = "red"
// x[1].style.color = "blue"

// let x;
// x = document.getElementsByTagName("a");  //collection olarak çıktı verir.


// let y = document.getElementById("task-list");
// y = y.getElementsByTagName("a");  // yukarıda id ile seçilen y değişkeninden a taglerinin collection olarak çıktı alıyoruz.
// console.log(y);
// console.log(x);


// let x = document.querySelectorAll("li");//Nodelist çıktısı verir.

// x.forEach(function(item,index) {
//     item.textContent = `${index}- Hello`;
// })

// let x = document.querySelectorAll("li:nth-child(odd");

// x.forEach(function(item) {
//     item.style.background = "#ccc"
// })

// html collection üzerinde forEach methodu kullanılmıyor .
// console.log(x);



//**********DOM ELEMENTLERİ ÜZERİNDE GEZİNME *************/

// let x;

// let list = document.querySelector(".list-group");

// x = list;

// x  = list.childNodes[1].textContent = "Mustafa";
// x = list.childNodes[0];
// x = list.childNodes[0].nodeName;
// x = list.childNodes[0].nodeType;


// x = list.children[1];
// x = list.firstChild;  //ilk child'ı veriyor 
// x = list.firstElementChild;  // ilk elemanı veriyor .

// x = list.lastChild;
// x = list.lastElementChild;

// x = list.childElementCount; // kaç eleman olduğunu gösterir.

// x = list.parentNode;  // parent'nı gösteriyor .
// // x = list.parentElement;

// x = list.children;
// x = list.children[0].nextSibling;  // bir sonraki
// x = list.children[0].nextElementSibling;  //bir sonraki
// x = list.children[1].previousSibling;  // bir önceki
// x = list.children[1].previousElementSibling;  // bir önceki
// console.log(x);


//************ELEMENT OLUŞTURMA *******************/


//Element oluşturma

// const li = document.createElement("li");



// //class ekleme

// li.className = "list-group-item list-group-item-secondary"


// li.setAttribute("title" , "New İtem")
// li.setAttribute("data-id" , "5")

// // text node oluşturma

// const text = document.createTextNode("New İtem")

// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.className = "delete-item float-right"
// a.innerHTML = '<i class="fas fa-times"></i>';

// // a , li'ye eklendi
// li.appendChild(a)
// console.log(li);

// //li, ul'ye eklendi.

// const ul = document.querySelector("#task-list").appendChild(li);

//**************ELEMENT SİLME VE GÜNCELLEME */

//elemen silme

//const taskList = document.querySelector("#task-list");

// taskList.remove();
// taskList.childNodes[1].remove();
// taskList.childNodes[2].remove();
// taskList.removeChild(taskList.children[1]);


// attribute silme .

// taskList.children[1].removeAttribute("class");
// console.log(taskList);



// element güncelleme

// const cardHeader = document.querySelector(".card-header");
// const h2 = document.createElement("h2");
// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("Mustafa"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2,cardHeader);

// const taskList = document.querySelector("#task-list");

// let val;

// link = taskList.children[0].children[0];
// link.classList.add('new');
// link.classList.remove('new');

// // Attributes
// val = link.getAttribute('data-id');
// val = link.getAttribute('href');
// val = link.setAttribute('href','http://sadikturan.com');
// val = link.hasAttribute('data-val');


// console.log(val);

