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
    console.log(input.value);
    var user = input.value;
    fetchUser(url + user);
});
function updateUI(data) {
    var user = data;
    userName.innerText = user.name;
    login.innerText = user.login;
    joined.innerText = user.created_at;
    bio.innerText = user.bio; //ojó acá
    repos.innerText = user.public_repos;
    followers.innerText = user.followers;
    following.innerText = user.following;
    loc.innerText = user.location;
    website.innerText = user.blog;
    twitter.innerHTML = user.twitter_username;
    company.innerText = user.company;
    avatar.src = user.avatar_url;
}
