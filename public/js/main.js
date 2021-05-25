
const upToDate = document.getElementById("upToDate");
const vac = document.getElementById("vac");
const statepol = document.getElementById("statepol");



const conTotal = document.getElementById("contotal");
const condelta = document.getElementById("condelta");

const acttotal = document.getElementById("acttotal");
const actdelta = document.getElementById("actdelta");

const rectotal = document.getElementById("rectotal");
const recdelta = document.getElementById("recdelta");

const dectotal = document.getElementById("dectotal");
const decdelta = document.getElementById("decdelta");



const visitor = document.getElementById("visitor");
// const condelta = document.getElementById("condelta")


const dataHide =document.querySelectorAll(".data_hide");
// const dataHide1 =document.querySelector(".data_hide");


const printHelloWorld = async() => {
  

  try{
    let url = "https://api.covid19india.org/v4/min/data.min.json"
    const response = await fetch(url);
    const data = await response.json();
    const arrData = [data];
    // console.log(arrData[0].MH.districts);

    var i;
    for (i = 0; i < dataHide.length; i++) {
      dataHide[i].style.display = "inline";
      }

    upToDate.innerText =`Last Updated on  ${arrData[0].MH.meta.last_updated}`
    const vacci =parseInt(arrData[0].MH.total.vaccinated).toLocaleString('en-IN');
    vac.innerText =vacci;

    const popu =parseInt(arrData[0].MH.meta.population).toLocaleString('en-IN');
    statepol.innerText =`Population : ${popu}`;
    
        const A =parseInt(arrData[0].MH.total.confirmed).toLocaleString('en-IN');

      const B =parseInt(`${arrData[0].MH.total.confirmed - arrData[0].MH.total.recovered - arrData[0].MH.total.deceased - arrData[0].MH.total.other}`).toLocaleString('en-IN');

        const C =parseInt(arrData[0].MH.total.recovered).toLocaleString('en-IN');

        const D =parseInt(arrData[0].MH.total.deceased).toLocaleString('en-IN');

    conTotal.innerText=A;
    acttotal.innerText= B;
    rectotal.innerText=C;
    dectotal.innerText=D;


    const delta = `${arrData[0].MH.delta}`;
    // console.log(delta);
    // console.log(arrData[0].MH.total.vaccinated);
    if(delta !== "undefined"){

     const E =  parseInt(arrData[0].MH.delta.confirmed).toLocaleString('en-IN');
     const F = parseInt(arrData[0].MH.delta.recovered).toLocaleString('en-IN');
     const G = parseInt(arrData[0].MH.delta.deceased).toLocaleString('en-IN');
      
     
     condelta.innerText=E;
      recdelta.innerText=F;
      decdelta.innerText=G;


      
      // console.log(F);
    }else{
      var i;
    for (i = 0; i < dataHide.length; i++) {
      dataHide[i].style.display = "none";
      }
      // console.log(error);
    }
    

  }catch{
    // dist_name.innerText =`Please enter the dist name properly`;
    // dataHide.classList.add("data_hide");
    var i;
    for (i = 0; i < dataHide.length; i++) {
      dataHide[i].style.display = "none";
      }
  }

};




const count = async()=>{
  const response = await fetch('https://api.countapi.xyz/update/covid19/c5079aff-9875-44af-b1c0-f24ac2a72e98/?amount=1');
  const data = await response.json();
  const arrData = [data];
  // console.log(arrData[0].value);
  visitor.innerText = `visitor : ${arrData[0].value}`;
}
count();


printHelloWorld();


// https://api.countapi.xyz/create?namespace=covid19&sanket27&value=0
// {
//   "namespace": "covid19",
//   "key": "c5079aff-9875-44af-b1c0-f24ac2a72e98",
//   "value": 0
//   }


//   https://api.countapi.xyz/get/covid19/c5079aff-9875-44af-b1c0-f24ac2a72e98

//   https://api.countapi.xyz/update/covid19/c5079aff-9875-44af-b1c0-f24ac2a72e98/?amount=1