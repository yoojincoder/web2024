function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}


function updateUI() {
    let user = getCookie('user');
    if(user) {
        document.querySelector('.login-signup a[href="login.html"]').style.display = 'none';
        document.querySelector('.login-signup a[href="login.html"]').nextElementSibling.style.display = 'none';
        document.querySelector('#logout-btn').style.display = 'block';
    } else {
        document.querySelector('.login-signup a[href="login.html"]').style.display = 'block';
        document.querySelector('.login-signup a[href="login.html"]').nextElementSibling.style.display = 'block';
        document.querySelector('#logout-btn').style.display = 'none';
    }
}


document.querySelector('#logout-btn').addEventListener('click', function(e) {
    e.preventDefault();
    eraseCookie('user');
    alert('로그아웃 성공');
    updateUI();
});

window.onload = function() {
    updateUI();
}
