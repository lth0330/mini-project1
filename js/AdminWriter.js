
function productWrite(){
    const nameInput = document.querySelector('').value; // 제품명 << 추후에 추가
    const eventInput = document.querySelector('').value; // 이벤트 << 추후에 추가
    const eventdateInput = document.querySelector('').value; // 이벤트기간 << 추후에 추가
    const priceInput = document.querySelector('').value; // 가격 << 추후에 추가
    const dispriceInput = document.querySelector('').value; // 할인 가격 << 추후에 추가
    const stockInput = document.querySelector('').value; // 재고 << 추후에 추가
    const pTypeInput = document.querySelector('').value; // 카테고리(과자,음료) << 추후에 추가
    const image = document.querySelector('').value; //이미지 << 추후에 추가

    let img = "https://plcaehold.co/100x100"; // 샘플 이미지 설정

    if(image){
        img = URL.createObjectURL(image);
    }
    
    let productList = localStorage.getItem('productList');
    if( productList == null){ productList = []; }
    else{ productList = JSON.parse( productList ) } //로컬저장소에 있는 제품리스트 객체 가져오기

    let loginInfo = sessionStorage.getItem('loginInfo');
    if( loginInfo == null){ loginInfo = {}; }
    else{ loginInfo = JSON.parse( loginInfo ) } //세션저장소에 있는 로그인 변수 가져오기 << 로그인 시 이 객체에 저장되게

    let product = {pName : nameInput,
        event : eventInput,
        eventdate : eventdateInput,
        price : priceInput,
        disprice : dispriceInput,
        stock : stockInput,
        pType : pTypeInput,
        img : img};
    product.pNo = productList.length == 0 ? 1 : productList[productList.length-1].pNo+1; // 제품 등록 번호 제품 객체에 추가
    product.adminNo = loginInfo.adminNo; //추가하는 관리자번호 제품 객체에 추가

    productList.push(product);
    localStorage.setItem('productList', JSON.stringify(productList) );

    alert('제품 등록 성공!');
    location.href = "productView.html";
}