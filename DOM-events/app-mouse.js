
// const btn = document.querySelector("#btnDeleteAll");
// const ul = document.querySelector("#task-list");

// function eventHandler(event){
//     console.log(`event type :  ${event.type}`);

// }


//****click */
// btn.addEventListener("click",eventHandler);
// ul.addEventListener("click",eventHandler);

//****dblclick == double click */

// btn.addEventListener("dblclick",eventHandler);
// ul.addEventListener("dblclick",eventHandler);

//*****mouse down */
// btn.addEventListener("mousedown",eventHandler);
// ul.addEventListener("mousedown",eventHandler);


//*****mouse up */
// btn.addEventListener("mouseup",eventHandler);
// ul.addEventListener("mouseup",eventHandler);


//*****mouse enter *
// ul.addEventListener("mouseenter",eventHandler);



//****mouse leave */
// ul.addEventListener("mouseleave",eventHandler);

//*****mouse over */
// ul.addEventListener("mouseover",eventHandler);


//*****mouse out */
// ul.addEventListener("mouseout",eventHandler);

//***UYARI: mouseover -leaver daha kapsayıcıdır ; bütün child elementleri kapsar
// ama mouse over-our tag'in içerisinde başka bir child elemente geçtiğinde mouse out olur.

//****** mousemove */

const h5=document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);

function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent=`Mouse X : ${event.offsetX } Mouse Y : ${event.offsetY }`;

}