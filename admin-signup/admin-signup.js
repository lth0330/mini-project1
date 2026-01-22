// 260121 이연지 전체 수정

function Listcheck(){

    // 입력한 아이디 가져오기
    const inputId=document.querySelector(".Listid").value;

    // localStorage에서 전체 회원 정보 가져오기
    let AdminInfo=localStorage.getItem("AdminInfo");
    AdminInfo=AdminInfo?JSON.parse(AdminInfo):[];

    // 중복 여부 확인
    let Listidcheck=false;

    // 회원 리스트 확인하면서 입력한 정보랑 일치하는지
    for(let i=0; i<AdminInfo.length; i++){
        if(AdminInfo[i].id==inputId){ //수정 Listid -> id(0122)
            Listidcheck=true; 
            break;}
    }

    // 결과
    if(Listidcheck==true){alert("사용 불가능한 아이디입니다.");} 
    else{alert("사용 가능한 아이디입니다.");}
}

function Listreg(){

    // 입력한 객체 가져오기
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

    // localStorage에서 전체 회원 정보 가져오기
    let AdminInfo=localStorage.getItem("AdminInfo");
    if(AdminInfo==null){AdminInfo=[];}
    else{AdminInfo=JSON.parse(AdminInfo);}

    // 중복 여부 확인
    let Listconfirm=false;
    for (let i=0; i<AdminInfo.length;i++){
        if (AdminInfo[i].id==Listid){
            Listconfirm = true;
            break;
        }
    }

    // 중복이면 함수 종료
    if (Listconfirm==true){
        alert("이미 사용 중인 아이디입니다. 다른 아이디를 입력해주세요.");
        return;
    }

    // 고유 번호 생성
    let ListadminNo = AdminInfo.length >= 1 ? AdminInfo[AdminInfo.length-1].adminNo+1 : 1;
    
    // 입력 받은 정보로 (new) 배열 만들기
    let obj={
        adminNo : ListadminNo,
        id : Listid,
        pw : Listpw,
        brNum : ListbrNum,
        convName : ListconvName,
        location : Listlocation,
        phone : Listphone
    }; // 수정: 키-값 추가(0122)
    console.log(obj);
    AdminInfo.push(obj); alert("회원가입 성공");

    // (new) 배열 다시 localStorage에 저장
    localStorage.setItem("AdminInfo",JSON.stringify(AdminInfo));
    location.href="../admin-login/admin-login.html"; //수정: 폴더에 따른 로그인 페이지 이동(0122)
}