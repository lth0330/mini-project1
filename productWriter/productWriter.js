async function Adminreg(){

    // 입력한 객체 가져오기
    const AdminimgDom=document.querySelector(".Adminimg");
    const AdminproductDom=document.querySelector(".Adminproduct");
    const Adminproduct=AdminproductDom.value;
    const AdmincategoryDom=document.querySelector(".Admincategory");
    const Admincategory=AdmincategoryDom.value;
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


    let imgUrl = "https://placehold.co/100x100";
    const image = AdminimgDom.files[0];

    if(image){
        imgUrl = await fileToDataURL(image);  // *페이지 전환시 저장 가능
        //imgUrl = URL.createObjectURL(image);    // *페이지 전환시 저장 불가능 
    }

    // localStorage에서 전체 제품 정보 가져오기
    let productList=localStorage.getItem("productList");
    if(productList==null){productList=[];}
    else{productList=JSON.parse(productList);}

    //추가 로그인한 정보 가져오기
    let loginInfo = sessionStorage.getItem('loginInfo');
    if (loginInfo == null) { loginInfo = {}; }
    else { loginInfo = JSON.parse(loginInfo) }
    
    // 고유 번호 생성
    let pNo=productList.length >= 1 ? productList[productList.length-1].pNo+1:1;
    
    let obj={
        pNo : pNo,
        adminNo : loginInfo.adminNo,
        event : Adminevent,
        stock : Adminstock,
        eventdate : Admindisday,
        pName : Adminproduct,
        pType : Admincategory, 
        price : Adminprice,
        disprice : Admindiscount, 
        img : imgUrl
    };
    console.log(obj);
    productList.push(obj); alert("등록 성공");

    // (new) 배열 다시 localStorage에 저장
    localStorage.setItem("productList",JSON.stringify(productList));
    location.href="/productView/productView.html"
}

function menu() {            //메뉴 클릭
    let hide = document.querySelector(".hide");
    hide.classList.toggle("hide-none")
}

// 파일을 base64(dataURL)로 (바이트)변환
function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);     
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}