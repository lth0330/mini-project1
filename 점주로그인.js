// 260121 이연지 전체 수정

function ListLogin(){
    const ListnewidDom=document.querySelector(".Listid");
    const Listid=ListnewidDom.value;
    const ListpwDom=document.querySelector(".Listpw");
    const Listpw=ListpwDom.value;

    let AdminInfo=localStorage.getItem("AdminInfo");
    if(AdminInfo==null){AdminInfo=[];}
    else{AdminInfo=JSON.parse(AdminInfo);}
    
    let Listsuccess=false;

    for(let index=0; index<=AdminInfo.length-1;index++){
        const memberlist=AdminInfo[index];
        if(memberlist.Listid==Listid&&memberlist.Listpw==Listpw){
            const AdminInfo={Listid: memberlist.Listid, Listpw: memberlist.Listpw,
            ListbrNum: memberlist.ListbrNum, ListconvName: memberlist.ListconvName,
            Listlocation: memberlist.Listlocation, Listphone: memberlist.Listphone}

            sessionStorage.setItem("AdminInfo", JSON.stringify(AdminInfo));

            alert("로그인 성공");
            location.href="productView.html"

            Listsuccess=true;
            return;
        }
    }
    if(!Listsuccess){alert("로그인 실패");}
}
