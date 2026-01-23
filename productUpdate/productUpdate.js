
productUpdatePrint();

function productUpdatePrint() {
    const updatearea = document.querySelector('.update-tbody');

    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) }

    let loginInfo = sessionStorage.getItem('loginInfo');
    if (loginInfo == null) { loginInfo = {}; }
    else { loginInfo = JSON.parse(loginInfo) }


    let html = ``;
    for (let index = 0; index <= productList.length - 1; index++) {
        const product = productList[index];
        if (loginInfo.adminNo == productList[index].adminNo) {
            html += `
                <tr>
                  <td>${loginInfo.convName}</td><td><img src="${product.img}"/></td><td>${product.pName}</td>
                  <td>${product.price}</td><td>${product.stock}</td>
                  <td>${product.event}</td><td>${product.eventdate}</td>
                  <td><button class="remove" onclick="productDelete(${product.pNo})">삭제</button></td>
                  <td><button class="update" onclick="productModify(${product.pNo})">수정</button></td>
                </tr> 
                `;
        }
    }
    updatearea.innerHTML = html;
}

function productDelete(pNo) { //본인 제품만 보는 화면에서 삭제버튼 누를 시

    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) } //객체 가져오기

    for (let index = 0; index <= productList.length - 1; index++) {
        if (pNo == productList[index].pNo) { //제품번호가 일치하면 삭제
            productList.splice(index, 1); //삭제

            for (let index = 0; index <= productList.length - 1; index++) {
                productList[index].pNo = index + 1;
            } //제품 번호 삭제 후 정렬

            localStorage.setItem('productList', JSON.stringify(productList)); //로컬 스토리지에 현재 상태 저장
            alert('삭제 성공');
            productUpdatePrint();
            break;
        }
    }
} //삭제 함수


function productModify(pNo) { //본인 제품만 보는 화면에서 수정버튼 누를 시

    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) }

    for (let index = 0; index <= productList.length - 1; index++) {
        if (pNo == productList[index].pNo) { //제품번호가 일치하면 수정화면으로 이동
            location.href = `../modifyScreen/modifyScreen.html?no=${pNo}`;
            break;
        }
    }

} 
//수정함수
function menu() {            //메뉴 클릭
    let hide = document.querySelector(".hide");
    hide.classList.toggle("hide-none")
}
