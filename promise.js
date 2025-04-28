function buyChocolates(chocolatesToBuy){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let available_chocolates = Math.floor(Math.random() * 30);
            if (available_chocolates >= chocolatesToBuy){
                resolve();
            }
            else{
                reject();
            }
        },4000);
    });
}
buyChocolates(Math.floor(Math.random() * 30)).then(()=>{
    console.log("I like chocolates");
}).catch(()=>{
    console.log("I don't like chocolates");
});


async function purchase(){
    try{
        await buyChocolates(Math.floor(Math.random() * 30));
        console.log("I like chocolates");
    }
    catch(error){
        console.log("I don't like chocolates");
    }
}
purchase();



