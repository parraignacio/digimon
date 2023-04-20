const url = "https://digimon-api.vercel.app/api/digimon";

const contenido = {
  Training: document.querySelector("#contenidoTraining"),
  Rookie: document.querySelector("#contenidoRookie"),
  Champion: document.querySelector("#contenidoChampion"),
  Ultimate: document.querySelector("#contenidoUltimate"),
  Armor: document.querySelector("#contenidoArmor"),
  Mega: document.querySelector("#contenidoMega"),
};

const btn = {
  Training: document.querySelector("#btn-training"),
  Rookie: document.querySelector("#btn-rookie"),
  Champion: document.querySelector("#btn-champion"),
  Ultimate: document.querySelector("#btn-ultimate"),
  Armor: document.querySelector("#btn-armor"),
  Mega: document.querySelector("#btn-mega"),
};

const fetchAndShowData = (level) => {
  let contador = 1;
  contenido[level].innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((datos) => {
      for (const item of datos) {
        const regex = /(Training|In Training)$/;
        if (regex.test(item.level) && level === "Training") {
          contenido[level].innerHTML += `
            <div class="tarjeta" data-bs-toggle="modal" data-bs-target="#modal${level}${contador}">
              <div class="card w-100">
                <img src="${item.img}" class="card-img-top" alt="...">
                <div class="card-body col-sm">
                  <h5 class="card-title w-100">${item.name}</h5>
                  <p class="card-text">${item.level}</p>
                </div>
              </div>
            </div>
            <div class="modal fade" id="modal${level}${contador}" tabindex="-1" aria-labelledby="modal${level}${contador}Label" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modalTraining1Label">${item.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src="${item.img}" class="card-img-top" alt="...">
                    <p>${item.level}</p>
                  </div>
                </div>
              </div>
            </div>
          `;
          contador++;
        } else if (item.level === level && level !== "Training") {
          contenido[level].innerHTML += `
          <div class="tarjeta" data-bs-toggle="modal" data-bs-target="#modal${level}${contador}">
          <div class="card w-100">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body col-sm">
              <h5 class="card-title w-100">${item.name}</h5>
              <p class="card-text">${item.level}</p>
            </div>
          </div>
        </div>
        <div class="modal fade" id="modal${level}${contador}" tabindex="-1" aria-labelledby="modal${level}${contador}Label" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalTraining1Label">${item.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img src="${item.img}" class="card-img-top" alt="...">
                <p>${item.level}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      contador++;
        }
      }
    });
};

const addModalToTarjetas = () => {
  const tarjetas = document.querySelectorAll(".tarjeta");
  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
      const modalId = tarjeta.dataset.target;
      const modal = document.querySelector(modalId);
      const img = tarjeta.querySelector("img").getAttribute("src");
      const name = tarjeta.querySelector(".card-title").textContent;
      const level = tarjeta.querySelector(".card-text").textContent;
      modal.querySelector(".modal-title").textContent = name;
      modal.querySelector("img").setAttribute("src", img);
      modal.querySelector("p").textContent = level;
      new bootstrap.Modal(modal).show();
    });
  });
};



btn.Training.addEventListener("click", () => fetchAndShowData("Training"));
btn.Rookie.addEventListener("click", () => fetchAndShowData("Rookie"));
btn.Champion.addEventListener("click", () => fetchAndShowData("Champion"));
btn.Ultimate.addEventListener("click", () => fetchAndShowData("Ultimate"));
btn.Armor.addEventListener("click", () => fetchAndShowData("Armor"));
btn.Mega.addEventListener("click", () => fetchAndShowData("Mega"));

btn.Training.addEventListener("click", () => {
  fetchAndShowData("Training");
  addModalToTarjetas();
});
btn.Rookie.addEventListener("click", () => {
  fetchAndShowData("Rookie");
  addModalToTarjetas();
});
btn.Champion.addEventListener("click", () => {
  fetchAndShowData("Champion");
  addModalToTarjetas();
});
btn.Ultimate.addEventListener("click", () => {
  fetchAndShowData("Ultimate");
  addModalToTarjetas();
});
btn.Armor.addEventListener("click", () => {
  fetchAndShowData("Armor");
  addModalToTarjetas();
});
btn.Mega.addEventListener("click", () => {
  fetchAndShowData("Mega");
  addModalToTarjetas();
});
























/* 
var url = "https://digimon-api.vercel.app/api/digimon" 
var contenidoMega = document.querySelector("#contenidoMega")
var btnMega = document.querySelector("#btn-mega");

fetch(url)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
        if (item.level == "Mega") {
            contenidoMega.innerHTML +=  `
            <div class="tarjeta">
              <div class="card w-100">
                <img src="${item.img}" class="card-img-top" alt="...">
                <div class="card-body col-sm">
                  <h5 class="card-title w-100">${item.name}</h5>
                  <p class="card-text">${item.level}</p>
                  <a href="#" class="btn btn-primary">Link</a>
                </div>
              </div>
            </div>
            `
        }
    }
})

btnMega.addEventListener("click", () => {
    contenidoMega.innerHTML = "";
    fetch(url)
    .then(response => response.json())
    .then(datos => {
        for (item of datos) {
            if (item.level == "Mega") {
                contenidoMega.innerHTML +=  `
                <div class="tarjeta">
                <div class="card w-100">
                <img src="${item.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title w-100">${item.name}</h5>
                  <p class="card-text">${item.level}</p>
                  <a href="#" class="btn btn-primary">Link</a>
                </div>
                </div>
                </div>
                `
            }
        }
    })
}) */














/* var url = "https://digimon-api.vercel.app/api/digimon" 
var contenido = document.querySelector("#contenido")

fetch(url)
.then(response => response.json())
.then(datos => {
    for (item of datos) {
        
            contenido.innerHTML +=  `
            <div class="tarjeta">
            <div class="card">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.level}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            `
            if (item.id == 5) {break;}
        }
    
}) */




/*

        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
*/