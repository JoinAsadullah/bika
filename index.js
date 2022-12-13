if ((window.innerWidth/window.innerHeight) < 1.5 ){
    document.querySelector('#view').classList.remove('view');
}
if ((window.innerWidth/window.innerHeight) > 1.5){
    document.querySelector('#view').classList.add('view');
}
function reSize(){
if ((window.innerWidth/window.innerHeight) < 1.5 ){
    document.querySelector('#view').classList.remove('view');
}
if ((window.innerWidth/window.innerHeight) > 1.5){
    document.querySelector('#view').classList.add('view');
}
}
//foldable nav---------------------------------------------------

document.getElementById('menuu').addEventListener('click',()=>{
    document.querySelector('.nav').classList.add('show');
    document.getElementById('menuu').classList.add('none');
    document.getElementById('crs').classList.remove('none');
})
document.getElementById('crs').addEventListener('click',()=>{
    document.querySelector('.nav').classList.remove('show');
   document.getElementById('menuu').classList.remove('none');
   document.getElementById('crs').classList.add('none');
})
//-------------------------------------------------------------------
