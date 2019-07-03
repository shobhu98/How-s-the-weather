
let  para=document.getElementById('temp').innerHTML;
function getData() {
    let place=document.getElementById('place').value;

  // alert(place);
    // let location=place.innerText;
    let a='https://api.openweathermap.org/data/2.5/weather?q='+place+'&APPID=d74d6767a30fc497ade7171876c1005a';
     console.log(a);
    let fs=fetch(a);

    fs.then((data)=>{
        data.json().then((data)=>{
            let t=data.main.temp;
            console.log(data.main.temp);
            // document.createElement('p').innerHTML=data.main.temp;
         let x =Math.round(data.main.temp_min-273.99999999999999999999999999);
         let y=Math.round(data.main.temp_max-273);
            document.getElementById('min').innerHTML=x;
            document.getElementById('max').innerHTML=y;
        })
    });


}
// xyx=32;
// function update() {
//     // var  x=document.createElement('p');
//     // x.innerHTML=xyx;
//     document.getElementById('temp').innerHTML=xyx;
//
//
//
//
//
// }
// update();
