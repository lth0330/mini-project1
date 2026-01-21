function Adminreg(){

    // 입력한 객체 가져오기
    const AdminproductDom=document.querySelector(".Adminproduct");
    const Adminproduct=AdminproductDom.value;
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

    // localStorage에서 전체 제품 정보 가져오기
    let product=localStorage.getItem("product");
    if(product==null){product=[];}
    else{product=JSON.parse(product);}
    
    // 고유 번호 생성
    let productNo=product.length>=1? product[product.length-1].productNo+1:1;
    
    // 입력 받은 정보로 (new) 배열 만들기
    let obj={productNo, Adminproduct, Adminevent, Adminprice, Admindiscount, Adminstock, Admindisday};
    console.log(obj);
    product.push(obj); alert("등록 성공");

    // (new) 배열 다시 localStorage에 저장
    localStorage.setItem("product",JSON.stringify(product));
    location.href="productUpdate.html" // 등록 누르면 productUpdate.html에 추가 열 생성해야됨..
}