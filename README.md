## Lunaloid Maid AI
Lunaloid is an AI maid inspired by the Japanese maid profession. I created it because I felt lonely and had no one to talk to, and this idea came up as a solution.

## Installation
To install it is quite easy, first you must have Git installed on your computer. Once you have Git installed, clone this repository by using:
``` bash
git clone https://github.com/miruchigawa/lunaloid-ai
```
Next, we need to install some required modules using the command "yarn install" or "npm install".
``` bash
yarn install // or npm install
```
We also need an apikey from TryLeap. 

Click here to obtain the apikey.[click here.](https://www.tryleap.ai/)

Paste apikey to [src/config/config.json](/src/config/config.json)

We also need cookies for the login session to log in to our Facebook account, and use a cookie editor to obtain the session cookie. 

You can get the cookie editor from the Chrome web store.

Once you have it, paste the cookie into src/session/cookie.json.


## How To Use
To use it, you just need to type the command 'yarn start' or 'npm start' if you're using npm.

## Contributor
- [Miruchigawa](https://axuint.netlify.app)

## Q&A
* **Q:** Is it possible to generate lewd anime images?
* **A:** Of course not, that's ridiculous!


* **Q:** How old are you?
* **A:** 17 y'o, maybe?


* **Q:** Do you have girlfriend?
* **A:** Of course, i don't have. Why are you asking like this?

## Screenshot

<img src="/src/assets/ss.jpg" alt="Screenshot Lunaloid AI" />

## License
This project under License Apache 2.0 [Click here.](/LICENSE)

## Footer
If you have a problem, please open an issue or DM me

## Troubleshooting
If you got problem with cookies and using old version change all key with name "key" to "name"
For example {"key": "something"} becomes {"name": "something"} 

