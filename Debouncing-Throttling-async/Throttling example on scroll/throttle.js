let x = 0;
function normalscrolll() {
    document.getElementById("normalscroll").innerHTML = x += 1;
}

let y = 0;
let isscrolling = true;
function normalscroll() {
    normalscrolll();
    if (isscrolling === true) {
        document.getElementById("normalscrolll").innerHTML = y += 1;
        isscrolling=false;
        setTimeout(()=>
        {
            isscrolling=true;
        },3000);
    }
}

