var f1 = fetch("https://restcountries.com/v3.1/all");
console.log(f1);
var res = f1.then((data) => data.json());
console.log(res);

res.then((data1) => foo(data1));
/*res.then((data1) => {
  for (var i = 0; i < data1.length; i++) {
    //console.log(data1[i].name.common);
  }
});*/

var f2 = fetch("https://data.covid19india.org/v4/min/data.min.json");
var result = f2
  .then((data) => data.json())
  .then((data1) => {
    console.log(data1);
  });

console.log(result);

var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";

function foo(data) {
  for (var i = 0; i < data.length; i++) {
    var col = document.createElement("div");
    col.className = "col-sm-4";
    col.innerHTML += `
    <div class="card border primary mb-3" style="max-width: 18rem;">
  <img src="${data[i].flags.png}" class="card-img-top" alt="country image">
  <div class="card-body">
    <h5 class="card-title">Country Name :${data[i].name.common}</h5>
    <h6 class="card-title">Capital: ${data[i].capital}</h6>
   </div>
</div>
    `;
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}
