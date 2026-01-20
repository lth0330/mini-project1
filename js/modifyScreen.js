
modifyPrint();
function modifyPrint(){
    const url = new URLSearchParams(location.search);
    const select_pNo = url.get('no'); //url 해당 제품 정보 받기

    let productList = localStorage.getItem('productList');
    if( productList == null){ productList = []; }
    else{ productList = JSON.parse( productList ) } //로컬저장소에 있는 제품리스트 객체 가져오기



    for(let index = 0; index <= productList.length-1; index++){
        const product = productList[index];
        if(select_pNo == productList[index].pNO){
            document.querySelector('').value = product.event; //추후에 추가, 이벤트명 넣기
            document.querySelector('').value = product.stock; //추후에 추가, 재고량 넣기
            document.querySelector('').value = product.pName; //추후에 추가, 제품명 넣기
            document.querySelector('').value = product.eventdate; //추후에 추가, 이벤트 기간 넣기
            document.querySelector('').value = product.price;// 추후에 추가, 가격 넣기
            document.querySelector('').value = product.disprice;// 추후에 추가, 할인 가격 넣기
        }
    }

}



function boardmodify(){ //수정화면 수정 함수 버튼 클릭시
    const url = new URLSearchParams(location.search);
    const select_pNo = url.get('no'); //url 해당 제품 정보 받기

    let productList = localStorage.getItem('productList');
    if( productList == null){ productList = []; }
    else{ productList = JSON.parse( productList ) }

    for(let index = 0; index <= productList.length-1; index++ ){
        const product = productList[index];

        if(product.pNo == select_pNo){ //넘겨받은 no와 제품의pNO이 일치하면 수정
            product.event = document.querySelector('').value; //추후에 추가, 이벤트명 수정
            product.stock = document.querySelector('').value; //추후에 추가, 재고량 수정
            product.pName = document.querySelector('').value; //추후에 추가, 제품명 수정
            product.eventdate = document.querySelector('').value; //추후에 추가, 이벤트 기간 수정
            product.price = document.querySelector('').value;// 추후에 추가, 가격 수정
            product.disprice = document.querySelector('').value;// 추후에 추가, 할인 가격 수정

            localStorage.setItem('productList', JSON.stringify(productList) );
            alert('수정 완료');
            location.href=`productUpdate.html`; //update 화면으로 이동
        }
    }
}