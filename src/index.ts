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
    console.log(input.value);
    let user = input.value
    fetchUser(url+user);
});

function updateUI(data: any): void {
    const user: User = data;
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

