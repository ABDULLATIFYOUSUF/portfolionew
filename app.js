var moreBtn = document.querySelector(".Morebtn")
var btnOperate = document.querySelector(".btnOperate")
var lessBtn = document.querySelector(".Lessbtn")

function moreProject(){
    btnOperate.style.display = "flex"
    moreBtn.style.display = "none"
    lessBtn.style.display = "block"

}

function lessProject(){
    btnOperate.style.display = "none"
    moreBtn.style.display = "block"
    lessBtn.style.display = "none"
}