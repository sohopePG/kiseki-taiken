{
    const kiseki = document.getElementById("kiseki");
    const button = document.getElementById("button");
    const rebutton = document.getElementById("rebutton");
    const kt = ["奇","跡","体","験"];
    const anbiri = ["ア","ン","ビ","リ","バ","ボ"];
    const rk =[];
    const ra =[];

    function createnum(){
        for(let i =0;i<4;i++){
            let n = Math.floor(Math.random()*4);
            rk.push(n);
        }
        for(let i =0;i<6;i++){
            let n = Math.floor(Math.random()*6);
            ra.push(n);
        }
    }
        button.addEventListener("click",()=>{
            if(rk.length ===0){
                createnum();
                kiseki.textContent = kt[rk[0]] + kt[rk[1]] + kt [rk[2]] + kt[rk[3]] +"!"+ anbiri[ra[0]]+"ン"+anbiri[ra[2]]+anbiri[ra[3]]+anbiri[ra[4]]+anbiri[ra[5]]+"ー";
                rk.length =0
                ra.length =0
            }
        })
}