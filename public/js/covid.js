const distpol = document.getElementById("distpol");
const update = document.getElementById("update");
const distcon = document.getElementById("distcon");
const ddcon = document.getElementById("ddcon");

const distact = document.getElementById("distact");
const ddact = document.getElementById("ddact");

const distrec = document.getElementById("distrec");
const ddrec = document.getElementById("ddrec");

const distdec = document.getElementById("distdec");
const dddec = document.getElementById("dddec");

const distoth = document.getElementById("distoth");
const ddoth = document.getElementById("ddoth");

const distvac = document.getElementById("distvac");
const ddvac = document.getElementById("ddvac");


const distName = document.getElementById("distName")
const submitBtn = document.getElementById("submitBtn");
const dist_name = document.getElementById("dist_name");
const confirmed = document.getElementById("confirmed");
const death = document.getElementById("death");
const today_date1 = document.getElementById("today_date");
const dataHide1 = document.querySelectorAll(".data_hide1");
const dataHide2 = document.querySelectorAll(".data_hide2");
// var x = document.querySelectorAll("p");

var i;
for (i = 0; i < dataHide1.length; i++) {
    dataHide1[i].style.display = "none";
}

const getInfo = async (event) => {
    event.preventDefault();

    //    let url = "https://api.covid19india.org/v4/min/data.min.json"
    const distVal = distName.value.toLowerCase();
 
    
   const currentDist= distVal.replace(/\b\w/g, function (l) { return l.toUpperCase() });

    if (currentDist == "") {
        update.innerText = `Please write the district name before search`;
        // update.innerText = `Try Again`;
        var i;
        for (i = 0; i < dataHide1.length; i++) {
            dataHide1[i].style.display = "none";
        }
    } else {
        try {
            let url = "https://api.covid19india.org/v4/min/data.min.json"
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            var j;
            for (j = 0; j < dataHide1.length; j++) {
                dataHide1[j].style.display = "inline";
            }

            const value = arrData[0].MH.districts;

            const newdata = value[currentDist];



            console.log(newdata.meta.population);

            dist_name.innerText = currentDist;
            update.innerText = `Last Updated on  ${arrData[0].MH.meta.last_updated}`
            const distpopu = parseInt(newdata.meta.population).toLocaleString('en-IN');
            distpol.innerText = `Population : ${distpopu}`;




            const H = parseInt(newdata.total.confirmed).toLocaleString('en-IN');

            const I = parseInt(`${newdata.total.confirmed - newdata.total.recovered - newdata.total.deceased - newdata.total.other}`).toLocaleString('en-IN');

            const J = parseInt(newdata.total.recovered).toLocaleString('en-IN');

            const K = parseInt(newdata.total.deceased).toLocaleString('en-IN');
            const L = parseInt(newdata.total.other).toLocaleString('en-IN');
            const M = parseInt(newdata.total.vaccinated).toLocaleString('en-IN');
            distcon.innerText = H;
            distact.innerText = I;
            distrec.innerText = J;
            distdec.innerText = K;
            distoth.innerText = L;
            distvac.innerText = M;

            const distdelta = `${newdata.delta}`;




            console.log("distdelta");

            if (distdelta !== "undefined"){
                const N = parseInt(newdata.delta.confirmed).toLocaleString('en-IN');

                // const O =parseInt(`${newdata.total.confirmed - newdata.total.recovered - newdata.total.deceased - newdata.total.other}`).toLocaleString('en-IN');

                const O = parseInt(newdata.delta.recovered).toLocaleString('en-IN');

                const P = parseInt(newdata.delta.deceased).toLocaleString('en-IN');
                const Q = parseInt(newdata.delta.other).toLocaleString('en-IN');
                const R = parseInt(newdata.delta.vaccinated).toLocaleString('en-IN');
                ddcon.innerText = N;
                ddrec.innerText = O;
                dddec.innerText = P;
                ddoth.innerText = Q;
                ddvac.innerText = R;
console.log("dab")
                var p;
                for (p = 0; p < dataHide2.length; p++) {
                    dataHide2[p].style.display = "inline";
                }

            }else{
                console.log("error");
                var k;
                for (k = 0; k < dataHide2.length; k++) {
                    dataHide2[k].style.display = "none";
                }
            }


        }catch {
            update.innerText = `Please enter the dist name properly`;
            var i;
            for (i = 0; i < dataHide1.length; i++) {
                dataHide1[i].style.display = "none";
            }

        }

    }


}



submitBtn.addEventListener("click", getInfo);