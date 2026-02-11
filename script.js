/* animated heart canvas */
const canvas=document.getElementById("c");
const ctx=canvas.getContext("2d");
function resize(){canvas.width=innerWidth; canvas.height=innerHeight;}
resize(); addEventListener("resize",resize);

let t=0;
const dots=Array.from({length:900},()=>({a:Math.random()*Math.PI*2,r:Math.random()}));
const hx=a=>16*Math.pow(Math.sin(a),3);
const hy=a=>13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a);

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const pulse=1+0.07*Math.sin(t);
    const s=Math.min(canvas.width,canvas.height)/36;
    dots.forEach(p=>{
        const x=hx(p.a)*p.r*s*pulse+canvas.width/2;
        const y=-hy(p.a)*p.r*s*pulse+canvas.height/2;
        ctx.fillStyle="rgba(255,120,170,0.85)";
        ctx.beginPath();
        ctx.arc(x,y,1.2,0,Math.PI*2);
        ctx.fill();
    });
    t+=0.03;
    requestAnimationFrame(draw);
}
draw();

/* floating cute hearts */
setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart-bg";
    h.innerHTML="💖";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(5+Math.random()*3)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),8000);
},500);

/* typewriter poem */
const lines=[
 "Some feelings arrive quietly,",
 "but stay forever.",
 "",
 "If moments had a heart,",
 "mine would beat your name."
];
let i=0,j=0;
const poem=document.getElementById("poem");
(function type(){
    if(i<lines.length){
        if(j<lines[i].length){
            poem.innerHTML+=lines[i][j++];
            setTimeout(type,40);
        }else{
            poem.innerHTML+="<br>";
            j=0; i++;
            setTimeout(type,350);
        }
    }
})();

/* buttons */
function yes(){
    document.getElementById("reply").style.opacity=1;
    document.getElementById("music").play();
}
function escapeNo(){
    const no=document.getElementById("noBtn");
    no.style.left=Math.random()*200+"px";
    no.style.top=Math.random()*60+"px";
}
