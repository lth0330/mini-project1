
modifyPrint();
function modifyPrint() {
    const url = new URLSearchParams(location.search);
    const select_pNo = url.get('no'); //url 해당 제품 정보 받기

    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) } //로컬저장소에 있는 제품리스트 객체 가져오기



    for (let index = 0; index <= productList.length - 1; index++) {
        const product = productList[index];
        if (select_pNo == productList[index].pNO) {
            document.querySelector('.Adminevent').value = product.event;
            document.querySelector('.Admincategory').value = product.pType;
            document.querySelector('.Adminstock').value = product.stock;
            document.querySelector('.Adminproduct').value = product.pName;
            document.querySelector('.Admindisday').value = product.eventdate;
            document.querySelector('.Adminprice').value = product.price;
            document.querySelector('.Admindiscount').value = product.disprice;
            document.querySelector('.Adminimg').value = product.img;
        }
    }
}



async function boardmodify() { //수정화면 수정 함수 버튼 클릭시
    const url = new URLSearchParams(location.search);
    const select_pNo = url.get('no'); //url 해당 제품 정보 받기


    let productList = localStorage.getItem('productList');
    if (productList == null) { productList = []; }
    else { productList = JSON.parse(productList) }


    for (let index = 0; index <= productList.length - 1; index++) {
        const product = productList[index];

        if (product.pNo == select_pNo) { //넘겨받은 no와 제품의pNO이 일치하면 수정
            product.event = document.querySelector('.Adminevent').value;
            product.stock = document.querySelector('.Adminstock').value;
            product.pType = document.querySelector('.Admincategory').value;
            product.pName = document.querySelector('.Adminproduct').value;
            product.eventdate = document.querySelector('.Admindisday').value;
            product.price = document.querySelector('.Adminprice').value;
            product.disprice = document.querySelector('.Admindiscount').value;
            const imgDom = document.querySelector('.Adminimg');
            

            let imgUrl = "https://placehold.co/100x100";
            const image = imgDom.files[0];

            if(image){
                imgUrl = await fileToDataURL(image);  // *페이지 전환시 저장 가능
                //imgUrl = URL.createObjectURL(image);    // *페이지 전환시 저장 불가능 
            }


            if (image) {
                imgUrl = URL.createObjectURL(image);
            }

            product.img = imgUrl;

            localStorage.setItem('productList', JSON.stringify(productList));
            alert('수정 완료');
            location.href = `../productUpdate/productUpdate.html`; //update 화면으로 이동
        }
    }
}
function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);     
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}


function menu() {            //메뉴 클릭
    let hide = document.querySelector(".hide");
    hide.classList.toggle("hide-none")
}
//html, css만 넘겨받으면 끝! -> productWriter만 되면 바로 테스트 가능