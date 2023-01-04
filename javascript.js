// var curDate = new Date();
//
// // Ngày hiện tại
// var curDay = curDate.getDate();
//
// // Tháng hiện tại
// var curMonth = curDate.getMonth() + 1;
//
// // Năm hiện tại
// var curYear = curDate.getFullYear();
//
// // Gán vào thẻ HTML
// let currentDate = document.querySelectorAll('.current-time')
// for (let i = 0; i < currentDate.length; i++) {
//     currentDate[1].innerHTML = curDay + "/" + curMonth + "/" + curYear;
// }

//switch light-dark mode
function switchLightMode() {
    const btn = document.querySelector('.btn-outline-danger')
    btn.addEventListener('click', function () {
        // THêm class dark cho body
        document.body.classList.toggle('dark-theme');
    });
}



//---------------Register-------------------
let username;
let password;
let rePassword;
let upPassword;
let checkValidate = false;
let listUser = JSON.parse(localStorage.getItem('list_user'));
if (listUser == null) {
    listUser = []
}
console.log('list User id--->', listUser)

function validate() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    rePassword = document.getElementById('re-password').value;
    if (username.trim() === '') {
        console.log('vao if user name ------>')
        document.getElementById('validate_username').innerHTML = '<label style="color: red">The name is required!</label>'
        checkValidate = false;
    } else {
        let checkExisted = false;
        for (let i = 0; i < listUser.length; i++) {
            if (username === listUser[i].username) {
                checkExisted = true;
                break
            }
        }
        if (checkExisted) {
            checkValidate = false;
            document.getElementById('validate_username').innerHTML = '<label style="color: red">The username existed!</label>'
        } else {
            document.getElementById('validate_username').innerHTML = ''
            checkValidate = true;
        }
    }
    if (password.trim() === '') {
        document.getElementById('validate-password').innerHTML = '<label style="color: red">The password is required!</label>'
        checkValidate = false;
    } else {
        if (rePassword !== password) {
            document.getElementById('validate-re').innerHTML = '<label style="color: red">The repeat password not match!</label>'
            checkValidate = false
        } else {
            document.getElementById('validate-password').innerHTML = ''
            document.getElementById('validate-re').innerHTML = ''
            checkValidate = true;
            // return;
        }
        // return;
    }
}

function register() {
    // validate();
    if (checkValidate) {
        // let listUser = localStorage.getItem('list_user');
        let id = 0;
        let user = new User(id, username, password)
        console.log('user --->', user)
        if (listUser.length == 0) {
            // listUser = [];
            id = 1;
            user.setId(id);
            listUser.push(user);
            console.log('listUser --->', listUser)
        } else {
            user.setId(listUser[listUser.length - 1].id + 1)
            listUser.push(user);
        }
        localStorage.removeItem('list_user')
        localStorage.setItem('list_user', JSON.stringify(listUser));
        location.href = 'index.html';
    }
}


//----------------------------LOGIN---------------------------------
function validate1() {
    username = document.getElementById('username1').value;
    if (username.trim() == "") {
        checkValidate = false;
        document.getElementById('validate_username1').innerHTML = "<label style='color: red'> tai khoan  de trong </label> "
    } else {
        checkValidate = true;
        document.getElementById('validate_username1').innerHTML = "";
    }
    password = document.getElementById('password1').value;
    if (password.trim() == "") {
        checkValidate = false;
        document.getElementById('validate-password1').innerHTML = "<label style='color: red'>mat khau de trong</label>"
    } else {
        checkValidate = true;
        document.getElementById('validate-password1').innerHTML = "";
    }
}

function findByUserName(username) {
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].username == username) {
            return listUser[i]
        }
    }
}

function login() {
    if (checkValidate) {
        let checkLogin = false;
        for (let i = 0; i < listUser.length; i++) {
            if (listUser[i].username == username && listUser[i].password == password) {
                console.log('i============', i)
                checkLogin = true;
                let username1 = findByUserName(username).username;
                localStorage.setItem("nameKey", username1)
                let id = findByUserName(username).id;
                localStorage.setItem("idKey", id)
                console.log(username1)
                break;
            } else {
                checkLogin = false;
            }
        }
        console.log(checkLogin)
        if (checkLogin) {
            location.href = "index.html"
        } else {
            document.getElementById('checklogin').innerHTML = 'tai khoan khong dung nhap lai nhe'
        }

    }
}

//---------------------------Đổi mật khẩu -----------------------------

let idKey = localStorage.getItem('idKey')

function findByPassword() {
        let updatePass
        for (let i = 0; i < listUser.length; i++) {
            if ( idKey == listUser[i].id) {
                updatePass = i;
                break
            }
}listUser[updatePass].password = document.getElementById('update_pass').value
    localStorage.removeItem('list_user')
    localStorage.setItem('list_user', JSON.stringify(listUser));
    location.reload()
}

// search for Manga
function searchManga(){
    let searchMg = document.getElementById('search').value;
    let bookName = document.querySelectorAll(".grid_item");
    console.log(bookName)
    for (let index = 0; index < bookName.length; index++) {
        if(bookName[index].innerText.toLowerCase().includes(searchMg.toLowerCase())){
            bookName[index].style.display = "block";
        }else{
            bookName[index].style.display = "none"}
    }
}
//--------------------------


let index;

function showMangaInfo(id) {

    for (let i = 0; i < listManga.length; i++) {
        if ( id == listManga[i].id) {
            index = i
            break
        }

        let  drawInfor = listManga.reduce(function (drawInfo,manga) {
            return  drawInfo +`<div class="div_middle1" style="height: auto !important;width: 1200px;margin: 0 auto">
        <div class="main" style="height: auto !important;padding-bottom: 100px;">
            <div style="display: flex">
            <h2 class="truyen_tranh"><a href="" style="color: #3f94d5">Truyện tranh</a></h2>
            <h2 class="truyen_tranh" style="margin-left: 5px"> > </h2>
            <h2 class="truyen_tranh"><a href="" style="color: #3f94d5">${manga.mangaName}</a></h2>
        </div>

            <div class="book-detail">
                <div class="book_info" style="padding: 15px; position: relative">
                    <div class="book_avarta" >
                        <img src="${manga.image}" style="height: 100%;width: auto">
                    </div>
                    <div class="book_other">
                        <p class="name" style=""> ${manga.mangaName}</p>
                        <div class="kind">
                            <p class="p"><a class="a-kind" href="">Action</a></p>
                            <p class="p"><a class="a-kind" href="">Fantasy</a></p>
                            <p class="p"><a class="a-kind" href="">Manhua</a></p>
                            <p class="p"><a class="a-kind" href="">Shounen</a></p>
                            <p class="p"><a class="a-kind" href="">Supernatural</a></p>
                        </div>
                        <div class="book_info_detail">
                            <table style="width: 280px;text-align: left;border-collapse: collapse;border-spacing: 0">
                                <tbody>
                                <tr>
                                    <td><i class="bi bi-rss" >Tình trạng</i></td>
                                    <td>Đang tiến hành</td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-arrow-repeat">Cập nhật</i></td>
                                    <td>10h trước</td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-eye-fill">Lượt xem</i></td>
                                    <td>27,806,485</td>
                                </tr>
                                <tr>
                                    <td><i class="bi bi-bookmark-fill">Lượt theo dõi</i></td>
                                    <td>13,744</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="book_button"style="margin-top: 10px">
                            <button class="btn btn-success" ><i class="bi bi-book"></i>Đọc từ đầu</button>
                            <button class="btn btn-warning" ><a href="readManga.html" style="color: #f0f0f0"><i class="bi bi-book"></i>Đọc tiếp</a></button>
                            <button class="btn btn-danger"><i class="bi bi-bookmark-fill"></i>Theo dõi</button>
                            <button class="btn btn-secondary" onclick="baoLoi()"><i class="bi bi-exclamation-triangle"></i>Báo lỗi</button>
                            <button class="btn btn-primary" ><a class="bi bi-facebook" style="color: #f0f0f0" href="https://cmangaac.com/"></a>Share</button>
                        </div>
                    </div>
                </div>

                    <h3><i class="bi bi-info-circle-fill" style="margin-right: 5px"></i>Giới thiệu</h3>
                <p><a href="" style="color: #3f94d5">Võ Luyện Đỉnh Phong</a> được cập nhật nhanh nhất và đầy đủ nhất tại Cmangavip.com . Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ Cmanga ra các chương mới nhất của truyện Võ Luyện Đỉnh Phong nhé.</p>
                <h3>
                    <i class="bi bi-list-ul" style="margin-right: 5px"></i>
                    Danh sách chương
                </h3>
                <div class="list_chapter">
                    <table id="table_list">
                        <thead>
                        <tr style="border-bottom: 1px solid #eaeaea">
                            <td style="width: 35%">Chapter</td>
                            <td style="width: 33%;text-align: center">Cập nhật</td>
                            <td style="width: 22%;text-align: center">Lượt xem</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style="width: 35%"><a href="readManga.html">Chapter ${manga.chapter_number}</a></td>
                            <td style="width: 33%;text-align: center;color: #888888">29 phút trước</td>
                            <td style="width: 22%;text-align: center;color: #888888">172</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h3><i class="bi bi-chat-fill" style="margin-right: 5px"></i><span style="margin-right: 5px">16,308</span>Bình luận</h3>
                <div class="book_comment" style="margin-bottom: 40px">
                    <div class="comment_text" style="position: relative;display: flex">
                        <textarea class="comment_text_value" placeholder="Nội dung bình luận..."></textarea>
                        <i class="bi bi-send" onclick=""></i>
                    </div>
                    <div class="comment-list">

                    </div>
                </div>
            </div>
        </div>
    </div>`
        },'')
        document.getElementById('mangaInfo').innerHTML= drawInfor;
    }
    console.log(listManga[index])
}
