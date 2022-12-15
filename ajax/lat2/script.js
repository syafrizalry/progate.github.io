async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30",{
        method: "GET"
    });

    const json = await response.json();
    const results = json.results;

    let data ='';
    for ( i = 0; i < results.length; i++) {
        let resDetail = await fetch(results[i].url,{
            method: "GET"
        });
        let jsonDetail = await resDetail.json();
        let id = jsonDetail.id;
        let name = jsonDetail.name;
        let img = jsonDetail.sprites.front_default;

        let resColor = await fetch(jsonDetail.species.url,{
            method: "GET"
        });

        let jsonColor = await resColor.json();
        let color =  jsonColor.color.name;
        console.log(jsonColor);        

        data += `<div class="detail" style="background-color: ${color}">`;
        data += `<p>${id}. ${name}</p>`;
        data +=`<img src=${img}>`;
        data +=`<br>name: ${name}`;
        data +='</div>';
            
    }
    document.getElementById("pokemons").innerHTML = data;
}