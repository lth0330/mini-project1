// 260121 이연지 전체 수정

function Listcheck(){
    const inputId=document.querySelector(".Listid").value;

    let AdminInfo=localStorage.getItem("AdminInfo");
    AdminInfo=AdminInfo?JSON.parse(AdminInfo):[];

    let Listidcheck=false;
    for(let i=0; i<AdminInfo.length; i++){
        if(AdminInfo[i].Listid==inputId){
            Listidcheck=true; 
            break;}
    }

    if(Listidcheck==true){alert("사용 불가능한 아이디입니다.");} 
    else{alert("사용 가능한 아이디입니다.");}
}

function Listreg(){
    const ListidDom=document.querySelector(".Listid");
    const Listid=ListidDom.value;
    const ListpwDom=document.querySelector(".Listpw");
    const Listpw=ListpwDom.value;
    const ListbrNumDom=document.querySelector(".ListbrNum");
    const ListbrNum=ListbrNumDom.value;
    const ListconvNameDom=document.querySelector(".ListconvName");
    const ListconvName=ListconvNameDom.value;
    const ListlocationDom=document.querySelector(".Listlocation");
    const Listlocation=ListlocationDom.value;
    const ListphoneDom=document.querySelector(".Listphone");
    const Listphone=ListphoneDom.value;

    let AdminInfo=localStorage.getItem("AdminInfo");
    if(AdminInfo==null){AdminInfo=[];}
    else{AdminInfo=JSON.parse(AdminInfo);}

    let Listconfirm=false;
    for (let i=0; i<AdminInfo.length;i++){
        if (AdminInfo[i].Listid==Listid){
            Listconfirm = true;
            break;
        }
    }

    if (Listconfirm==true){
        alert("이미 사용 중인 아이디입니다. 다른 아이디를 입력해주세요.");
        return;
    }

    let ListadminNo=AdminInfo.length>=1? AdminInfo[AdminInfo.length-1].ListadminNo+1:1;
    let obj={ListadminNo, Listid, Listpw, ListbrNum, ListconvName, Listlocation,Listphone};
    console.log(obj);
    AdminInfo.push(obj); alert("회원가입 성공");

    localStorage.setItem("AdminInfo",JSON.stringify(AdminInfo));
    location.href="점주로그인.html"
}