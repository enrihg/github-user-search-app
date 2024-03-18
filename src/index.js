var avatar = document.getElementById('avatar');
var userName = document.getElementById('name'); //se usó el non-null assertion operator, le decimos a Typescript 'tranqui esta variable nunca será nula'
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
var input = document.getElementById('input'); //type assertion, leer más
var form = document.querySelector('.form');
var url = 'https://api.github.com/users/';
function fetchUser(url) {
    fetch(url)
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        updateUI(data);
    });
}
fetchUser(url + 'octocat');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    var user = input.value;
    fetchUser(url + user);
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
    user.blog === '' ? website.innerText = 'Not Available' : website.innerText = user.blog;
    user.twitter_username === null ? twitter.innerText = 'Not Available' : twitter.innerText = user.twitter_username;
    user.company === null ? company.innerText = 'Not Available' : company.innerText = user.company;
    avatar.src = user.avatar_url;
}
