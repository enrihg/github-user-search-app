var themeSwitcher = document.getElementById('theme-switcher');
var lightDark = document.getElementById('light-dark');
var lighDarkIcon = document.getElementById('light-dark-icon');
var avatar = document.getElementById('avatar');
var userName = document.getElementById('name');
var login = document.getElementById('login');
var joined = document.getElementById('joined');
var bio = document.getElementById('bio');
var repos = document.getElementById('repos');
var followers = document.getElementById('followers');
var following = document.getElementById('following');
var loc = document.getElementById('location');
var website = document.getElementById('website');
var twitter = document.getElementById('twitter');
var company = document.getElementById('company');
var input = document.getElementById('input');
var form = document.querySelector('.form');
var error = document.getElementById('error');
var url = 'https://api.github.com/users/';
themeSwitcher === null || themeSwitcher === void 0 ? void 0 : themeSwitcher.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        lightDark.innerText = 'LIGHT';
        lighDarkIcon.src = './src/assets/images/icon-sun.svg';
    }
    else {
        lightDark.innerText = 'DARK';
        lighDarkIcon.src = './src/assets/images/icon-moon.svg';
    }
});
function fetchUser(url) {
    fetch(url)
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        data.message === 'Not Found' ? showErrorMessage('No results') : updateUI(data);
    });
}
fetchUser(url + 'octocat');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    var user;
    e.preventDefault();
    error.classList.add('hidden');
    if (input.value === '') {
        showErrorMessage('Username can\'t be empty');
    }
    else {
        user = input.value;
        fetchUser(url + user);
    }
});
function updateUI(data) {
    var user = data;
    userName.innerText = user.name;
    login.innerText = "@".concat(user.login);
    var date = new Date(user.created_at);
    joined.innerText = "Joined ".concat(date.getDate(), " ").concat(new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date), " ").concat(date.getFullYear());
    user.bio === null ? bio.innerText = 'This profile has no bio' : bio.innerText = user.bio;
    repos.innerText = user.public_repos;
    followers.innerText = user.followers;
    following.innerText = user.following;
    user.location === null ? loc.innerText = 'Not Available' : loc.innerText = user.location;
    user.blog === '' ? (website.href = '#') && (website.innerText = 'Not Available') : (website.href = user.blog) && (website.innerText = user.blog);
    user.twitter_username === null ? twitter.innerText = 'Not Available' : twitter.innerText = user.twitter_username;
    user.company === null ? company.innerText = 'Not Available' : company.innerText = user.company;
    avatar.src = user.avatar_url;
}
function showErrorMessage(msg) {
    error.innerText = msg;
    error.classList.remove('hidden');
}
