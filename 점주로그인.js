// 260121 이연지 전체 수정

function ListLogin(){
    
    // 입력한 아이디, 비밀번호 가져오기
    const ListnewidDom=document.querySelector(".Listid");
    const Listid=ListnewidDom.value;
    const ListpwDom=document.querySelector(".Listpw");
    const Listpw=ListpwDom.value;

    // localStorage에서 전체 회원 정보 가져오기
    let AdminInfo=localStorage.getItem("AdminInfo");
    if(AdminInfo==null){AdminInfo=[];}
    else{AdminInfo=JSON.parse(AdminInfo);}
    
    // 로그인 성공 여부
    let Listsuccess=false;

    // 회원 리스트 확인하면서 입력한 정보랑 일치하는지
    for(let index=0; index<=AdminInfo.length-1;index++){
        const memberlist=AdminInfo[index];

        // 일치하는 경우
        if(memberlist.Listid==Listid&&memberlist.Listpw==Listpw){

            // 유저 객체
            const AdminInfo={Listid: memberlist.Listid, Listpw: memberlist.Listpw,
            ListbrNum: memberlist.ListbrNum, ListconvName: memberlist.ListconvName,
            Listlocation: memberlist.Listlocation, Listphone: memberlist.Listphone}

            // sessionStorage에 로그인된 상태 저장
            sessionStorage.setItem("AdminInfo", JSON.stringify(AdminInfo));

            alert("로그인 성공");
            location.href="productView.html"

            Listsuccess=true;
            return;
        }
    }
    if(!Listsuccess){alert("로그인 실패");}
}
