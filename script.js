let fetchData = document.getElementById("fetchData");

function fetchingData(){
console.log("button clicked");
promiseAPI1()
.then((result)=>{
    if(result){
        return promiseAPI2();
    }
})
.then((result)=>{
    if(result){
        return promiseAPI3();
    }
})
.then(()=>{
    console.log("all promises resolved");
}).catch((error)=>{
    console.log("error resolving promises",error)
})

}

function promiseAPI1(){
return new Promise((resolve,reject)=>{
console.log("starting...API-1");
setTimeout(() => {
    fetch("https://dummyjson.com/posts")
    .then((response)=>response.json())
    .then((data)=>{
        console.log("data-1",data);
        displayData("API-1",data)
        resolve(true)
    }).catch((error)=>{
        console.log("error fetching data",error)
        reject(error)
    })
}, 1000);
});
}


function promiseAPI2(){
 return new Promise((resolve, reject) => {
    console.log("starting...API-2")
    setTimeout(() => {
        fetch("https://dummyjson.com/products")
        .then((response)=>response.json())
        .then((data)=>{
            console.log("data-2",data);
            displayData("API-2",data);
            resolve(true);
        }).catch((error)=>{
            console.log("error fetching data",error);
            reject(error);
        })
    }, 2000);
 })   
}


function promiseAPI3(){
 return new Promise((resolve, reject) => {
 console.log("starting...API-3");
 setTimeout(() => {
    fetch("https://dummyjson.com/todos")
    .then((response)=> response.json())
    .then((data)=>{
        console.log("data-3",data);
        displayData("API-3",data);
        resolve(true);
    }).catch((error)=>{
        console.log("error fetching data",error);
        reject(error);
    })
 }, 3000);       
    })
}



function displayData(APIName,data){
    let display = document.getElementById("displayData");
    display.innerHTML += `<div><h3>${APIName}</h3><p>${JSON.stringify(data)}</p></div>`;
}