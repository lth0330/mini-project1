
productViewPrint(); //1회 출력

function productViewPrint() { //출력 함수
    const productarea = document.querySelector(''); //추후에 추가, HTML 넣을 장소 가져오기
    const searchWord = document.querySelector('').value; // 추후에 추가, 검색어 밸류 가져오기 1차 if
    const category = document.querySelector('').value; // 추후에 추가, 카테고리 밸류 가져오기 2차 if

    let productList = localStorage.getItem('productList');
    if( productList == null){ productList = []; }
    else{ productList = JSON.parse( productList ) } //객체 가져오기

    let html = ``;
    for (let index = 0; index <= productList.length - 1; index++) {
        const product = productList[index];

        for (let index2 = 0; index2 <= product.length; index2++) {
            if (productList[index].adminNo == AdminInfo[index2].adminNo) {
                let locate = AdminInfo[index2].convName; //해당 지점명을 locate 변수에 넣기
            }
        }

        if (searchWord == null || searchWord == product.pName) { //검색어와 일치하거나 검색어가 비어있어야 통과
            if (category == null || category == product.pType) { //카테고리가 비어있거나 카테고리와 일치한다면
                html += `
                
            `; //추후에 추가
            }
            else { //카테고리가 비어있지도 않고, 일치도 안하면 다음 index로
                continue;
            }
        }
        else{ //검색어가 비어있지도 않고, 일치도 안하면 다음 index로
            continue;
        }
    }
    productarea.innerHTML = html;
} //출력 함수 end