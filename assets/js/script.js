
/*Fetch para digimons nivel Fresh*/
let tarjetas = document.querySelector("#tarjetas")

fetch("https://digimon-api.vercel.app/api/digimon/level/fresh")
    .then(response => response.json())
    .then(datos =>{
        for(let temp of datos){
            tarjetas.innerHTML += `<div class="tarjeta col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <img class="digifoto" src="${temp.img}" alt="">
                                    <p class="diginombre"><b>${temp.name}</b></p>
                                    <p>${temp.level}</p>
                                    </div>`
        }})

/*Fetch para digimons nivel In-training */
let trainin = document.querySelector("#trainin")

fetch("https://digimon-api.vercel.app/api/digimon/level/training")
     .then(response => response.json())
     .then(datos =>{
          for(let temp of datos){
             trainin.innerHTML += `<div class="tarjeta col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                     <img class="digifoto" src="${temp.img}" alt="">
                                    <p class="diginombre"><b>${temp.name}</b></p>
                                    <p>${temp.level}</p>
                                    </div>`
        }})

fetch("https://digimon-api.vercel.app/api/digimon/level/intraining")
        .then(response => response.json())
        .then(datos =>{
             for(let temp of datos){
                trainin.innerHTML += `<div class="tarjeta col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                        <img class="digifoto" src="${temp.img}" alt="">
                                       <p class="diginombre"><b>${temp.name}</b></p>
                                       <p>${temp.level}</p>
                                       </div>`
           }})


/*Fetch para digimon nivel Champion */
let champion = document.querySelector("#champion")          
           
fetch("https://digimon-api.vercel.app/api/digimon/level/champion")
    .then(response => response.json())
    .then(datos =>{
        for(let temp of datos){
            champion.innerHTML += `<div class="tarjeta col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <img class="digifoto" src="${temp.img}" alt="">
                                    <p class="diginombre"><b>${temp.name}</b></p>
                                    <p>${temp.level}</p>
                                </div>`
    }})



/*Fetch para digimon nivel Ultimate */
let ultimate = document.querySelector("#ultimate")          
       
fetch("https://digimon-api.vercel.app/api/digimon/level/ultimate")
     .then(response => response.json())
    .then(datos =>{
        for(let temp of datos){
            ultimate.innerHTML += `<div class="tarjeta col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <img class="digifoto" src="${temp.img}" alt="">
                                    <p class="diginombre"><b>${temp.name}</b></p>
                                    <p>${temp.level}</p>
                                </div>`
    }})


/*Fetch para digimon nivel Mega */
let mega = document.querySelector("#mega")          
   
fetch("https://digimon-api.vercel.app/api/digimon/level/mega")
     .then(response => response.json())
    .then(datos =>{
        for(let temp of datos){
            mega.innerHTML += `<div class="tarjeta col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <img class="digifoto" src="${temp.img}" alt="">
                                    <p class="diginombre"><b>${temp.name}</b></p>
                                    <p>${temp.level}</p>
                                </div>`
    }})


/*Ir a la wiki */
function irAPaginaWeb() {
    window.location.href = "https://wikimon.net/Main_Page";
}
/*Karaoke 1*/
function irAKaraoke1() {
    window.location.href = "https://www.youtube.com/watch?v=E1NX4mWf0Os";
}
/*Karaoke 2*/
function irAKaraoke2() {
    window.location.href = "https://www.youtube.com/watch?v=gu9CJKKw6GE";
}
/*Karaoke 3*/
function irAKaraoke3() {
    window.location.href = "https://www.youtube.com/watch?v=Qc46nOi2cMY";
}
/*Karaoke 4*/
function irAKaraoke4() {
    window.location.href = "https://www.youtube.com/watch?v=viNQNUqUyJk";
}