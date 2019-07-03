
let  para=document.getElementById('temp').innerHTML;
function getData() {
    let place=document.getElementById('place').value;

  // alert(place);
    // let location=place.innerText;
    let a='http://api.openweathermap.org/data/2.5/weather?q='+place+'&APPID=d74d6767a30fc497ade7171876c1005a';
     console.log(a);
    let fs=fetch(a);

    fs.then((data)=>{
        data.json().then((data)=>{
            let t=data.main.temp;
            console.log(data.main.temp);
            // document.createElement('p').innerHTML=data.main.temp;
            document.getElementById('temp').innerHTML=data.main.temp;

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
