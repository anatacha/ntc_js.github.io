// function Sex(value){
//     alert(value);

// }
const ConFirm = document.getElementById('confirm');
const Clear=document.getElementById('clear');

function male(m_weight,m_height,m_age){
    let bmr;
    // bmr=10*parseInt(m_weight)+parseInt(m_height)
    bmr = 66+(13.7*parseInt(m_weight))+(5*parseInt(m_height))-(6.8*parseInt(m_age))
    return bmr
}
//
function female(f_weight,f_height,f_age){
    let bmr;
    bmr = 665+(9.6*parseInt(f_weight))+(1.8*parseInt(f_height))-(4.7*parseInt(f_age))
    return bmr
}

//getinfo
function getinfo(){
    // var gender =document.getElementById('gender').value
    var gender =document.querySelector('input[name="gender"]:checked').value
    var weight=document.getElementById('weight').value
    var height=document.getElementById('height').value
    var age=document.getElementById('age').value
    var Bmr
    
    //check gender
    if(gender=='male'){
       Bmr=male(weight,height,age)
    }else{
       Bmr=female(weight,height,age)
    }
    document.getElementById('show').innerHTML=Bmr.toFixed(2)

}
//clear
function clear(){
    document.getElementById('weight').value=""
    document.getElementById('height').value=""
    document.getElementById('age').value=""
    document.getElementById('show').innerHTML=""
}
//event
ConFirm.addEventListener('click',getinfo)
Clear.addEventListener('click',clear)