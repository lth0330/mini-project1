
productViewPrint(); //1회 출력

function productViewPrint() { //출력 함수
    const productArea = document.querySelector('.view-tbody'); //추후에 추가, HTML 넣을 장소 가져오기
    const category = document.querySelector('.select');
    const searchWord = document.querySelector('.검색');

    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) } //제품 로컬 객체 가져오기

    let loginInfo = sessionStorage.getItem('loginInfo');
    if (loginInfo == null) { loginInfo = {}; }
    else { loginInfo = JSON.parse(loginInfo) } // 로그인 세션 객체 가져오기

    let product = {
        pNo: 1,
        adminNo: 1,
        pName: "두바이음료",
        event: "1+1",
        eventdate: "2026-01-01~2026-02-01",
        price: 1500,
        disprice: 1500,
        stock: 17,
        pType: "음료수",
        img: "https://plcaehold.co/100x100"
    };



    let droptable = `<option value=""> 카테고리를 선택하세요 </option>`;
    let categories = [];

    for (let index = 0; index <= productList.length - 1; index++) { // 카테고리 생성
        if(!categories.includes(productList[index].pType)){ //카테고리가 존재안하면
            droptable += `
                <option> ${productList[index].pType} </option>
                 `;
                categories.push(productList[index].pType); //카테고리 배열에 추가;
        }
    } // 카테고리 생성 end
    category.innerHTML = droptable; // 카테고리 HTML 생성

    let html = ``;
    for (let index = 0; index <= productList.length - 1; index++) {
        const product = productList[index];

        for (let index2 = 0; index2 <= product.length; index2++) {
            if (productList[index].adminNo == AdminInfo[index2].adminNo) {
                let locate = AdminInfo[index2].convName; //해당 지점명을 locate 변수에 넣기
            }
        } // 추후에 관리자 회원 리스트 배열을 가져와서 수정해야함!

        if (searchWord) { //검색어가 있다면
            if (category.value == "") { //카테고리가 없을 때
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
                    html += `
                <tr>
                  <td>${locate}}</td><td>${product.pName}</td>
                  <td>${product.price}</td><td>${product.stock}</td>
                  <td>${product.event}</td><td>${product.eventdate}</td>
                </tr> 
            `; //추후에 추가
                }else{
                    continue; //카테고리가 있는데 일치 안하면 다음으로;
                }
            }
        } else {
            console.log("검색어없음");//검색어가 없다면
            html += `
                <tr>
                  <td>${loginInfo.convName}}</td><td>${product.pName}</td>
                  <td>${product.price}</td><td>${product.stock}</td>
                  <td>${product.event}</td><td>${product.eventdate}</td>
                </tr> 
                `; //추후에 추가
        }
    }
    productArea.innerHTML = html;
} //출력 함수 end

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
//         img: "https://plcaehold.co/100x100"
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
//         img: "https://plcaehold.co/100x100"
//     };

//     productList.push(product1);
//     productList.push(product2);
//     localStorage.setItem('productList', JSON.stringify(productList));
// }
