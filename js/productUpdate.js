
productUpdatePrint();

function productUpdatePrint(){
    const updatearea = document.querySelector(''); //추후에 추가, HTML 넣을 장소

    let productList = localStorage.getItem('productList');
    if( productList == null){ productList = []; }
    else{ productList = JSON.parse( productList ) } //로컬저장소에 있는 제품리스트 객체 가져오기

    let loginInfo = sessionStorage.getItem('loginInfo');
    if( loginInfo == null){ loginInfo = []; }
    else{ loginInfo = JSON.parse( loginInfo ) } //세션저장소에 있는 로그인 변수 가져오기


    let html = ``;
    for(let index = 0; index <= productList.length-1; index++){
        for(let index2 = 0; index2<= AdminInfo.length-1; index2++){
            if (productList[index].adminNo == AdminInfo[index2].adminNo) { //지점명 가져오기
                let locate = AdminInfo[index2].convName; //해당 지점명을 locate 변수에 넣기
            }
        }
        if(loginInfo.adminNo == productList[index].adminNo){ //로그인한 AdminNo만 볼 수 있게
                html +=`
                
                `; //추후에 추가 pNo도 넣어줘야 함.
            }
    }
    updatearea.innerHTML = html; // update페이지에 추가
} //출력 함수

function productDelete(pNo){ //본인 제품만 보는 화면에서 삭제버튼 누를 시

    let productList = localStorage.getItem('productList');
    if( productList == null){ productList = []; }
    else{ productList = JSON.parse( productList ) } //객체 가져오기

    for(let index = 0; index <= productList.length-1; index++ ){
        if(pNo == productList[index].pNo){ //제품번호가 일치하면 삭제
            productList.splice(index, 1);
            localStorage.setItem('productList', JSON.stringify(productList) );
            alert('삭제 성공');
            productUpdatePrint();
            break;
        }
    }

    for(let index = 0; index <= productList.length-1; index++){
        productList[index].pNo = index+1;
    } //제품 번호 삭제 후 정렬

} //삭제 함수


function productModify(pNo){ //본인 제품만 보는 화면에서 수정버튼 누를 시

    let productList = localStorage.getItem('productList');
    if( productList == null){ productList = []; }
    else{ productList = JSON.parse( productList ) }

    for(let index = 0; index <= productList.length-1; index++ ){
        if(pNo == productList[index].pNo){ //제품번호가 일치하면 수정화면으로 이동
            location.href = `modifyScreen.html?no=${pNo}`;
            break;
        }
    }
} //수정함수