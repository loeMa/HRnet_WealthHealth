
const controlAge = (date) =>{
    const age = new Date() - new Date(date);
    const result= Math.floor(age/1000/60/60/24/365);
    let errorMsg = document.querySelector('.error');

    if(result > 18 && result < 70){
        errorMsg.innerHTML= ''
        return true
    }else{
        errorMsg.innerHTML= 'Vous avez pas le bon age!'
        return false
    }
}
export {controlAge};