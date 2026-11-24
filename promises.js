const foodOrder = new Promise((resolve,reject)=>{
     let foodReady = false;
     if(foodReady){
         resolve("Food is ready");
     }else{
         reject("Food is not ready");
     }
})
foodOrder
    .then((result)=>console.log(result))//works if foodReady is true
    .catch((error)=>console.log(error))//works if foodReady is false

async function getUsers(){
    console.log("Fetching users...");
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    const emails=data.map((n)=>n.email);
    console.log(emails);
}    
getUsers();

const getUsers1=async()=>{
    console.log("Fetching users...");
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    const emails=data.map((n)=>n.email);
    console.log(emails);
    
}
getUsers1();

