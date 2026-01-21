function Listreg(){
    const ListidDom=document.querySelector(".Listid");
    const Listid=ListidDom.value;
    const ListpwdDom=document.querySelector(".Listpwd");
    const Listpw=ListpwdDom.value;

    let Listmember=localStorage.getItem("Listmember");
    if(Listmember==null){Listmember=[];}
    else{Listmember=JSON.parse(Listmember);}

    let Listno=Listmember.length>=1? Listmember[Listmember.length-1].Listno+1:1;
    let obj={Listno, Listid, Listpw};
    console.log(obj);
    Listmember.push(obj); alert("회원가입 성공");

    localStorage.setItem("Listmember",JSON.stringify(Listmember));

}

function Listcheck(){  // 260121 이연지 수정
    const inputId=document.querySelector(".Listid").value;

    let Listmember=localStorage.getItem("Listmember");
    Listmember=Listmember?JSON.parse(Listmember):[];

    let Listidcheck=false;
    for(let i=0; i<Listmember.length; i++) {
        if(Listmember[i].Listid==inputId) {
            Listidcheck=true; 
            break;
        }
    }

    if(Listidcheck==true){
        alert("사용 불가능한 아이디입니다.");
    } else{
        alert("사용 가능한 아이디입니다.");
    }
}
