let Username
function start() {
    Username=document.getElementById('user').value
    let user_regex=/^[a-zA-Z]{6,}$/
    if (user.value=='') {
        alert('Username required')
        return;
    }
    if (!user_regex.test(Username)) {
        alert('Input more than six characters')
        return;
    }
    if (user_regex.test(Username)) {
        window.location.href ="./game.html";
    }
}