function Adminreg(){

    // 입력한 객체 가져오기
    const AdminimgDom=document.querySelector(".Adminimg"); // 260122 수정
    const Adminimg=AdminimgDom.value; // 260122 수정
    const AdminproductDom=document.querySelector(".Adminproduct");
    const Adminproduct=AdminproductDom.value;
    const AdmincategoryDom=document.querySelector(".Admincategory"); // 260122 수정
    const Admincategory=AdmincategoryDom.value; // 260122 수정
    const AdmineventDom=document.querySelector(".Adminevent");
    const Adminevent=AdmineventDom.value;
    const AdminpriceDom=document.querySelector(".Adminprice");
    const Adminprice=AdminpriceDom.value;
    const AdmindiscountDom=document.querySelector(".Admindiscount");
    const Admindiscount=AdmindiscountDom.value;
    const AdminstockDom=document.querySelector(".Adminstock");
    const Adminstock=AdminstockDom.value;
    const AdmindisdayDom=document.querySelector(".Admindisday");
    const Admindisday=AdmindisdayDom.value;
    
    const image = Adminimg.files[0];

    if(image){
        imgUrl = URL.createObjectURL(image);
    }

    let imgUrl = "https://plcaehold.co/100x100";

    // localStorage에서 전체 제품 정보 가져오기
    let productList=localStorage.getItem("productList");
    if(productList==null){productList=[];}
    else{productList=JSON.parse(productList);}

    //추가 로그인한 정보 가져오기
    let loginInfo = sessionStorage.getItem('loginInfo');
    if (loginInfo == null) { loginInfo = {}; }
    else { loginInfo = JSON.parse(loginInfo) }
    
    // 고유 번호 생성
    let pNo=productList.length>=1? productList[productList.length-1].productListNo+1:1;
    
    // 입력 받은 정보로 (new) 배열 만들기 -> 수정된 객체에 맞춰서(0122)
    let obj={
        pNo : pNo,
        adminNo : loginInfo.adminNo,
        event : Adminevent,
        stock : Adminstock,
        eventdate : Admindisday,
        pName : Adminproduct,
        pType : Admincategory, 
        price : Adminprice, // 260122 수정
        disprice : Admindiscount, 
        img : imgUrl
    };
    console.log(obj);
    productList.push(obj); alert("등록 성공");

    // (new) 배열 다시 localStorage에 저장
    localStorage.setItem("productList",JSON.stringify(productList));
    location.href="/productView/productView.html" // 등록 누르면 productView페이지로 이동 (수정 0122)
}