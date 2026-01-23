
productViewPrint(); //1회 출력

/*초반 객체 추가 함수 밑에 주석 처리를 한 번 풀고
 다시 하시면 됩니다. 다시 주석 처리 안하면 계속 로컬저장소에 추가되요!
*/
// Add();
function Add(){
    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) } //제품 로컬 객체 가져오기

    let product1 ={
        pNo : 1,
        adminNo : 1,
        event : "1+1",
        stock : 10,
        eventdate : "2026-01-01~2026-02-01",
        pName : "두쫀쿠",
        pType : "과자", 
        price : 1500,
        disprice : 1500, 
        img : "https://placehold.co/100x100"
    };
    let product2 ={
        pNo : 2,
        adminNo : 1,
        event : "1+1",
        stock : 10,
        eventdate : "2026-01-01~2026-04-01",
        pName : "이로하스",
        pType : "음료수", 
        price : 2500, 
        disprice : 2500, 
        img : "https://placehold.co/100x100"
    };
    let product3 ={
        pNo : 3,
        adminNo : 2,
        event : "500원 할인",
        stock : 10,
        eventdate : "2026-01-21~2026-03-21",
        pName : "허니버터칩",
        pType : "과자", 
        price : 1500,
        disprice : 1000, 
        img : "https://placehold.co/100x100"
    };
    productList.push(product1);
    productList.push(product2);
    productList.push(product3);

    localStorage.setItem('productList', JSON.stringify(productList));
}

function productViewPrint() { //출력 함수
    const productArea = document.querySelector('.view-tbody'); //추후에 추가, HTML 넣을 장소 가져오기
    const category = document.querySelector('.select');

    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) } //제품 로컬 객체 가져오기

    let AdminInfo = localStorage.getItem('AdminInfo');
    if (AdminInfo == null) { AdminInfo = []; }
    else { AdminInfo = JSON.parse(AdminInfo) } //회원 로컬 객체 가져오기

    let loginInfo = sessionStorage.getItem('loginInfo');
    if (loginInfo == null) { loginInfo = {}; }
    else { loginInfo = JSON.parse(loginInfo) } // 로그인 세션 객체 가져오기

    let droptable = `<option value=""> 카테고리를 선택하세요 </option>`;
    let categories = [];

    for (let index = 0; index <= productList.length - 1; index++) { // 카테고리 생성
        if (!categories.includes(productList[index].pType)) { //카테고리가 존재안하면
            droptable += `
                <option> ${productList[index].pType} </option>
                 `;
            categories.push(productList[index].pType); //카테고리 배열에 추가;
        }
    } // 카테고리 생성 end
    category.innerHTML = droptable; // 카테고리 HTML 생성

    let html = ``;
    for (let index = 0; index <= productList.length - 1; index++) {
        if(index == 0){ console.log("HTML for문 실행"); }
        const product = productList[index];

        let locate = '';
        for (let index2 = 0; index2 <= AdminInfo.length - 1; index2++) {
            if (productList[index].adminNo == AdminInfo[index2].adminNo) {
                locate = AdminInfo[index2].convName; //해당 지점명을 locate 변수에 넣기
            }
        } console.log(locate);

        html += `
                <tr>
                  <td>${locate}</td><td><img src=${product.img}/></td><td>${product.pName}</td>
                  <td>${product.price}</td><td>${product.stock}</td>
                  <td>${product.event}</td><td>${product.eventdate}</td>
                </tr> 
            `;
    }
    productArea.innerHTML = html;
} //출력 함수 end



function searchbtn() { //검색 버튼
    const productArea = document.querySelector('.view-tbody'); //추후에 추가, HTML 넣을 장소 가져오기
    const category = document.querySelector('.select'); // 카테고리 값 가져오기
    const searchWord = document.querySelector('.search'); // 검색값 가져오기

    console.log(searchWord);

    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) } //제품 로컬 객체 가져오기

    let AdminInfo = localStorage.getItem('AdminInfo');
    if (AdminInfo == null) { AdminInfo = []; }
    else { AdminInfo = JSON.parse(AdminInfo) } //회원 로컬 객체 가져오기

    let loginInfo = sessionStorage.getItem('loginInfo');
    if (loginInfo == null) { loginInfo = {}; }
    else { loginInfo = JSON.parse(loginInfo) } // 로그인 세션 객체 가져오기

    let html = ``;
    for (let index = 0; index <= productList.length - 1; index++) {
        const product = productList[index];

        let locate = '';
        for (let index2 = 0; index2 <= AdminInfo.length - 1; index2++) {
            if (productList[index].adminNo == AdminInfo[index2].adminNo) {
                locate = AdminInfo[index2].convName; //해당 지점명을 locate 변수에 넣기
            }
        }

        if (searchWord.value != "") { //검색어가 있을 때
            if (category.value == "" && searchWord.value == product.pName) { //카테고리가 없을 때 검색어와 일치하면
                console.log("카테고리 없고 검색어 있음");
                html += `
                <tr>
                  <td>${locate}</td><td>${product.pName}</td>
                  <td>${product.price}</td><td>${product.stock}</td>
                  <td>${product.event}</td><td>${product.eventdate}</td>
                </tr> 
            `;
            }
            else { //카테고리가 있을 때
                if (category.value == product.pType && searchWord.value == product.pName) { // 카테고리와 검색어가 일치하는 것만 출력
                    console.log("카테고리 있고 검색어 있음");
                    html += `
                <tr>
                  <td>${locate}</td><td>${product.pName}</td>
                  <td>${product.price}</td><td>${product.stock}</td>
                  <td>${product.event}</td><td>${product.eventdate}</td>
                </tr> 
            `; //추후에 추가
                } else {
                    continue; //카테고리가 있는데 일치 안하면 다음으로; }
                }
            }
        } else { //검색어가 없을 때
            if (category.value == "") { //카테고리가 없을 때
                console.log("카테고리 없고 검색어 없음");
                html += `
                <tr>
                  <td>${locate}</td><td>${product.pName}</td>
                  <td>${product.price}</td><td>${product.stock}</td>
                  <td>${product.event}</td><td>${product.eventdate}</td>
                </tr> 
            `;
            }
            else { //카테고리가 있을 때
                if (category.value == product.pType) { // 카테고리와 일치하는 것만 출력
                    console.log("카테고리 있고 검색어 없음");
                    html += `
                <tr>
                  <td>${locate}</td><td>${product.pName}</td>
                  <td>${product.price}</td><td>${product.stock}</td>
                  <td>${product.event}</td><td>${product.eventdate}</td>
                </tr> 
            `; //추후에 추가
                } else {
                    continue; //카테고리가 있는데 일치 안하면 다음으로; }
                }
            }
        }
    }
     productArea.innerHTML = html; console.log(html);
}

function menu() {            //메뉴 클릭
    let hide = document.querySelector(".hide");
    hide.classList.toggle("hide-none")
}

//loginAdd(); 로그인 객체 생성
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

// productAdd();
// function productAdd(){
//     let productList = localStorage.getItem('productList');
//     if (productList == null) { productList = []; }
//     else { productList = JSON.parse(productList) } //제품 로컬 객체 가져오기

//     let product1 = {
//         pNo: 1,
//         adminNo: 1,
//         pName: "두바이음료",
//         event: "1+1",
//         eventdate: "2026-01-01~2026-02-01",
//         price: 1500,
//         disprice: 1500,
//         stock: 17,
//         pType: "음료수",
//         img: "https://placehold.co/100x100"
//     };

//     let product2 = {
//         pNo: 2,
//         adminNo: 2,
//         pName: "두바이음료",
//         event: "1+1",
//         eventdate: "2026-01-01~2026-02-01",
//         price: 1500,
//         disprice: 1500,
//         stock: 17,
//         pType: "음료수",
//         img: "https://placehold.co/100x100"
//     };

//     productList.push(product1);
//     productList.push(product2);
//     localStorage.setItem('productList', JSON.stringify(productList));
// }
