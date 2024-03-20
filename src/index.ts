const themeSwitcher = document.getElementById('theme-switcher')! as HTMLButtonElement;
const lightDark = document.getElementById('light-dark')!;
const lighDarkIcon = document.getElementById('light-dark-icon')! as HTMLImageElement;
const avatar = document.getElementById('avatar')! as HTMLImageElement;
const userName = document.getElementById('name')!;
const login = document.getElementById('login')!;
const joined = document.getElementById('joined')!;
const bio = document.getElementById('bio')!;
const repos = document.getElementById('repos')!;
const followers = document.getElementById('followers')!;
const following = document.getElementById('following')!;
const loc = document.getElementById('location')!;
const website = document.getElementById('website')! as HTMLAnchorElement;
const twitter = document.getElementById('twitter')!;
const company = document.getElementById('company')!;
const input = document.getElementById('input')! as HTMLInputElement;
const form = document.querySelector('.form')!;
const error = document.getElementById('error')!;
let url: string = 'https://api.github.com/users/'

type User = {
    avatar_url: string,
    name: string,
    login: string,
    created_at: string,
    bio: string,
    public_repos: string,
    followers: string,
    following: string,
    location: string,
    blog: string,
    twitter_username: string,
    company: string
}

themeSwitcher?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
        lightDark.innerText = 'LIGHT';
        lighDarkIcon.src = './src/assets/images/icon-sun.svg';
    } else {
        lightDark.innerText = 'DARK';
        lighDarkIcon.src = './src/assets/images/icon-moon.svg';
    }
})

function fetchUser(url: string): void {
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.message === 'Not Found' ? showErrorMessage('No results') : updateUI(data);
        })
}

fetchUser(url + 'octocat');

form?.addEventListener('submit', function (e): void {
    let user;
    e.preventDefault();
    error.classList.add('hidden');
    if (input.value === '') {
        showErrorMessage('Username can\'t be empty')
    }
    else {
        user = input.value;
        fetchUser(url + user)
    }
});

function updateUI(data: any): void {
    const user: User = data;
    userName.innerText = user.name;
    login.innerText = `@${user.login}`;
    const date = new Date(user.created_at);
    joined.innerText = `Joined ${date.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)} ${date.getFullYear()}`;
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

function showErrorMessage(msg: string) {
    error.innerText = msg;
    error.classList.remove('hidden');
}