async function fetchData() {
    const pikachu_box = document.getElementsByClassName("pikachu-box");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-form/25/",{
      method: "GET"
    });

    const json = await response.json();
    
    let data ='';
    data = '<div class="detail">';
    data =`<img src=${json.sprites.front_default}>`;
    data +=`<br>id: ${json.id}`;
    data +=`<br>name: ${json.name}`;
    data +=`<br>type: ${json.types[0].type.name}<p>`;
    data +='</div>';

    document.getElementById("pikachu").innerHTML = data;
    pikachu_box[0].style.display = 'block';
  }

  const modal = document.querySelector('.pikachu-box');
  document.addEventListener('click', (e) => {
    let clickInside = modal.contains(e.target)
  
    if (!clickInside) {
      modal.style.display = 'none'
    }
  })