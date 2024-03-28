function capitalizeFirstLetter(letter=""){

    if(!letter?.length) "";

    let capitalizeWord = letter[0]?.toUpperCase() +  letter?.slice(1);   
    return capitalizeWord;

}



export {
    capitalizeFirstLetter
}