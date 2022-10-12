let Username
let getName=localStorage.getItem('userName')
function store() {
    if (getName) {
        ar=JSON.parse(getName)
    }
    // start()
}
function start() {
    myName=document.getElementById('user').value
    Username=[{name:myName}]
    // console.log(Username[0].name);
    let user_regex=/^[a-zA-Z]{6,}$/
    if (user.value=='') {
        alert('Username required')
        return;
    }
    if (!user_regex.test(Username[0].name)) {
        alert('Input should be more than six letters')
        return;
    }
    if (user_regex.test(Username[0].name)) {
        window.location.href ="./game.html";
        myName=''
    }
    user.value=''
    localStorage.setItem('userName', JSON.stringify(Username))
    
}
