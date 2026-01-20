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

/*
function Listcheck(){
    const url=new URLSearchParams(location.search);
    const selectNo=url.get("Listno");
    

    let Listmember=localStorage.getItem("Listmember");
    if(Listmember==null){Listmember=[];}
    else{Listmember=JSON.parse(Listmember);}

    for(let i=0; i<Listmember.length; i++){
        const obj=Listmember[i];
        if(obj.Listno==selectNo){
            const confirm=alert("사용 가능한 아이디")
        }
        else{alert("사용 불가능한 아이디")}
    }
}
    */