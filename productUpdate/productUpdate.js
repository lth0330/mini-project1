
productUpdatePrint();

function productUpdatePrint() {
    const updatearea = document.querySelector('.update-tbody'); //추후에 추가, HTML 넣을 장소 update-tbody로 바꾸기

    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) }

    let loginInfo = sessionStorage.getItem('loginInfo');
    if (loginInfo == null) { loginInfo = {}; }
    else { loginInfo = JSON.parse(loginInfo) }


    let html = ``;
    for (let index = 0; index <= productList.length - 1; index++) {
        const product = productList[index];
        if (loginInfo.adminNo == productList[index].adminNo) { //로그인한 AdminNo만 볼 수 있게
            html += `
                <tr>
                  <td>${loginInfo.convName}</td><td>${product.pName}</td>
                  <td>${product.price}</td><td>${product.stock}</td>
                  <td>${product.event}</td><td>${product.eventdate}</td>
                  <td><button class="remove" onclick="productDelete(${product.pNo})">삭제</button></td>
                  <td><button class="update" onclick="productModify(${product.pNo})">수정</button></td>
                </tr> 
                `; //추후에 추가 pNo도 넣어줘야 함.
        }
    }
    updatearea.innerHTML = html; // update페이지에 추가
} //출력 함수

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
            location.href = `modifyScreen.html?no=${pNo}`;
            break;
        }
    }
} //수정함수
function menu() {            //메뉴 클릭
    let hide = document.querySelector(".hide");
    hide.classList.toggle("hide-none")
}

// loginAdd(); //로그인 객체 생성
// function loginAdd(){

//     let loginInfo = sessionStorage.getItem('loginInfo');
//     if (loginInfo == null) { loginInfo = {}; }
//     else { loginInfo = JSON.parse(loginInfo) } // 로그인 세션 객체 가져오기

//     login = {
//         adminNo : 1,
//         id : "a01",
//         pw : "123",
//         brNum : "112233",
//         convName : "명학역 GS25",
//         location : "명학역",
//         phone : "000-0000"
//     }

//     loginInfo = login;
//     sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
// }