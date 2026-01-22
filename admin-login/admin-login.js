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

    // 추가 - sessionStorage에서 로그인 회원 정보 가져오기(0122)
    let loginInfo = sessionStorage.getItem('loginInfo');
    if (loginInfo == null) { loginInfo = {}; }
    else { loginInfo = JSON.parse(loginInfo) }
    
    // 로그인 성공 여부
    let Listsuccess=false;

    // 회원 리스트 확인하면서 입력한 정보랑 일치하는지  -> 수정 key값 변환 listid -> id 등등 (0122)
    for(let index=0; index<=AdminInfo.length-1;index++){
        const memberlist=AdminInfo[index];

        // 일치하는 경우
        if(memberlist.id==Listid&&memberlist.pw==Listpw){

            // 유저 객체
            const loginInfo={
                adminNo : memberlist.adminNo,
                id: memberlist.id,
                pw: memberlist.pw,
                brNum: memberlist.brNum,
                convName: memberlist.convName,
                location: memberlist.location,
                phone: memberlist.phone
            };

            // sessionStorage에 로그인된 상태 저장 -> 수정 loginInfo객체 새로 선언(0122)
            sessionStorage.setItem("loginInfo", JSON.stringify(loginInfo));

            alert("로그인 성공");
            location.href="../productView/productView.html"

            Listsuccess=true;
            return;
        }
    }
    if(!Listsuccess){alert("로그인 실패");}
}
