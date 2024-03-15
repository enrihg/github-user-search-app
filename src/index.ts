const avatar = document.getElementById('avatar')! as HTMLImageElement;
const userName = document.getElementById('name')!; //se usó el non-null assertion operator, le decimos a Typescript 'tranqui esta variable nunca será nula'
const login = document.getElementById('login')!;
const joined = document.getElementById('joined')!;
const bio = document.getElementById('bio')!;
const repos = document.getElementById('repos')!;
const followers = document.getElementById('followers')!;
const following = document.getElementById('following')!;
const loc = document.getElementById('location')!;
const website = document.getElementById('website')!;
const twitter = document.getElementById('twitter')!;
const company = document.getElementById('company')!;
const input = document.getElementById('input')! as HTMLInputElement;  //type assertion, leer más
const form = document.querySelector('.form');
let url:string = 'https://api.github.com/users/'

type User = {
    avatar_url: string,
    name: string,
    login: string,
    created_at: string, //esto se tiene que pasar a fecha después.
    bio: string,       
    public_repos: string, //si le pongo tipo number me larga error, ver eso.
    followers: string,  //si le pongo tipo number me larga error, ver eso.
    following: string,  //si le pongo tipo number me larga error, ver eso.
    location: string,
    blog: string,
    twitter_username: string,
    company: string
}

function fetchUser(url: string):void {
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            updateUI(data);
        })
}

fetchUser(url+'octocat');

form?.addEventListener('submit', function (e): void {
    e.preventDefault();
    let user = input.value
    fetchUser(url+user);
});

function updateUI(data: any): void {
    const user: User = data;
    userName.innerText = user.name;
    login.innerText = user.login;
    joined.innerText = user.created_at;
    user.bio === null ? bio.innerText = 'Bio hasn\'t been updated yet :)' : bio.innerText = user.bio; //fdsadfdsadsff
    repos.innerText = user.public_repos;
    followers.innerText = user.followers;
    following.innerText = user.following;
    user.location === null ? loc.innerText = 'Not Available' : loc.innerText = user.location;
    user.blog === '' ? website.innerText= 'Not Available' : website.innerText = user.blog;
    user.twitter_username === null ? twitter.innerText= 'Not Available' : twitter.innerText = user.twitter_username;
    user.company === null ?  company.innerText= 'Not Available' : company.innerText = user.company;
    avatar.src = user.avatar_url;
}

