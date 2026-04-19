
setTimeout(()=>{
document.getElementById("loadingScreen").style.display="none";
document.getElementById("app").style.display="block";
},3000);

document.getElementById("applyBtn").onclick=()=>{
setTimeout(()=>{
document.getElementById("app").style.display="none";
document.getElementById("finalScreen").style.display="flex";
},500);
};

document.getElementById("themeToggle").onchange=(e)=>{
if(e.target.checked){
document.documentElement.style.setProperty('--bg','#fff');
document.documentElement.style.setProperty('--card','#eee');
document.documentElement.style.setProperty('--text','#000');
document.documentElement.style.setProperty('--accent','#7a1cff');
}else{
document.documentElement.style.setProperty('--bg','#120012');
document.documentElement.style.setProperty('--card','#240d29');
document.documentElement.style.setProperty('--text','#fff');
document.documentElement.style.setProperty('--accent','#c143da');
}
};
