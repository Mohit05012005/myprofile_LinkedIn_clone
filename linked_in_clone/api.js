// const url = new URL('https://pokeapi.co/api/v2/pokemon?limit=50&offset=50');
// console.log(url);

// let namep;
// // let api = fetch(url);
// // console.log(api);
// let i = 0;
// let sut = 0;

// async function api_fetch(){
//     let api = await fetch(url);
//     let data = await api.json();
//     console.log(data);
//     // console.log(data.stats)
//     // console.log(data.stats[0])
//     console.log(data.results);
//     console.log(data.results[2].name);
//       semahedar(data.results);
//     // console.log(data.results[2].url);
//     // let rum = data.results[2].url;
//     // ability(rum);
//     // after();
// }
// api_fetch();

// function semahedar(arr){
//     setInterval(()=>{
//         let mm = `${sut}`;
//         // console.log(mm);
//        console.log(arr[mm].name);
//        let n = arr[mm].name;
//        const div = document.createElement("div");
//        const head = document.createElement("h1");
//        head.textContent = n;
//        const img = document.createElement("img");
//        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${mm}.svg`;
//        img.alt = "pokimage";
//        div.appendChild(head);
//        div.appendChild(img);
//        document.body.appendChild(div);
//        sut += 1;

//     },1000)
// }
// // async function ability(r){
// //       const apii = await fetch(r);
// //       console.log(apii);
// //       const data  = await apii.json();
// //       console.log(data);

// // }
// // function after(){
// //     setInterval(create_html,1000);
// // }

// // //now i just have to make sure ki pokemon ka nam or uski photo anhi chiye

// // function create_html(){
// //     const div = document.createElement("div");
// //     const heading = document.createElement("h1");
// //     const img = document.createElement("img");
// //     img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`;
// //     img.alt = "pokemon";
// //     i += 5;
// //     heading.textContent = `${namep}`;
// //     div.appendChild(heading);
// //     div.appendChild(img);
// //     div.className = "poki_mon";
// //     document.body.appendChild(div);



// now use of api

const url = new URL('https://pokeapi.co/api/v2/pokemon?limit=100&offset=100');

let xi = 101;
let pokemons = [];        // here we can store pokemon array.......

async function api_fetch(){
   let ans = await fetch(url);
   let data = await ans.json();
//    console.log(data);
   pokemons = data.results;
   console.log(pokemons);
   // console.log(data.results[0].name);
//    let poki_name = data.results[0].name;
//    let inner_url  = data.results[0].url;
   // console.log(inner_url);
//    ability(inner_url);


function capitalizeFirstLetter(name) {
   return name.charAt(0).toUpperCase() + name.slice(1);
}
    
pokemons.forEach((pokemon)=>{
    // console.log("hello");
    console.log(pokemon);
    let namet = pokemon.name;
   //  let nam = namet.capitalize();
   //    console.log(nam);
    // console.log(namet);
  
  let nam = capitalizeFirstLetter(namet);

  
    let box_third = document.querySelector(".box_third");
    var box_third_1 = document.createElement("div");
    box_third_1.className = "box_t_1";
    box_third_1.innerHTML = `
    
    <div class = "js_main">
   
            <div class ="js_inner">
                   <div class="poki_h">
                         <img class="pokilogo" src="https://image.pngaaa.com/194/96194-middle.png" alt="pokilogo">
                         <p class="poki_name">${nam}</p>
                   </div>
                   <div class = "poki_info">
                         <p class = "poki_describe"></p>
                   </div>
                   <div class = "poki_image">
                           <img class= "p_i" src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${xi}.svg" alt = "">
                   </div>
                 
                   <div class="describe_poki">
   
                          <div class = "like">
                               <button class = "poki_btn">
                                  <img class = "img_l liket" src = "like.svg" alt = "like karo">
                                  <p>like</p>
                               </button>
                          </div>
   
                          <div class = "comment">
                               <button class = "poki_btn">
                                     <img class = "img_1" src = "comment.svg" alt = "commentkaro">
                                     <p>comment</p>
                               </button>
                          </div>
   
                          <div class = "share">
                                <button class = "poki_btn">
                                    <img class = "img_1" src = "share.svg" alt = "sharekaro">
                                    <p>share</p>
                                </button>
                          </div>
                          
                   </div>
            </div>
                           
    </div>
     `
   xi += 1;
   box_third.appendChild(box_third_1);
})
}


api_fetch();

// async function ability(urrl){
//      let ans2 = await fetch(urrl);
//      let data2 = await ans2.json();
//      console.log(data2);

// }


// image and name start from 101....

 