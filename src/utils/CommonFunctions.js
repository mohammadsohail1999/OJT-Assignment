function capitalizeFirstLetter(letter=""){
    if(!letter?.length) "";

    let capitalizeWord = letter[0]?.toUpperCase() +  letter?.slice(1);   
    return capitalizeWord;
    
}

function getBase64(file) {
    var reader = new FileReader();

    reader.readAsDataURL(file);


    return new Promise((res,rej)=>{

        reader.onload = function () {
            res(reader.result)
        };

        reader.onerror = function (error) {
            rej(error);
        };

    })

   
  
  
 }


export {
    capitalizeFirstLetter,
    getBase64
}