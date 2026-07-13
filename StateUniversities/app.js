let url = "http://universities.hipolabs.com/search?country=India&name=";
let list = document.querySelector("#list");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let country = "India";

async function getColleges(stateName){
    try{
        let res = await axios.get(url + stateName);
        console.log(res);
        return res.data
    }
    catch(err){
        console.log(err);
        return [];
    }
}

btn.addEventListener("click", async () => {
    let state = inp.value;
    let colArr = await getColleges(state);
    show(colArr);
});

function show(colArr){
    list.innerText = "";
    for (col of colArr){
        let li = document.createElement("li");
        console.log(col.name)
        li.textContent = col.name;
        list.appendChild(li);
    }
}