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


