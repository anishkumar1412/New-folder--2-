require('dotenv').config()
const express = require('express')
const app = express()

const githubdata ={
    "login": "Anish1412",
    "id": 99349748,
    "node_id": "U_kgDOBev09A",
    "avatar_url": "https://avatars.githubusercontent.com/u/99349748?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Anish1412",
    "html_url": "https://github.com/Anish1412",
    "followers_url": "https://api.github.com/users/Anish1412/followers",
    "following_url": "https://api.github.com/users/Anish1412/following{/other_user}",
    "gists_url": "https://api.github.com/users/Anish1412/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Anish1412/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Anish1412/subscriptions",
    "organizations_url": "https://api.github.com/users/Anish1412/orgs",
    "repos_url": "https://api.github.com/users/Anish1412/repos",
    "events_url": "https://api.github.com/users/Anish1412/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Anish1412/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-02-09T16:16:16Z",
    "updated_at": "2024-01-09T07:26:23Z"
  }
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/twitter',(req,res)=>{
    res.send('<h1>hiteshdotcom</h2>')
})
app.get('/github',(req,res)=>{
    res.json(githubdata)
})
app.listen(process.env.PORT,() =>{
    console.log(`Example app listening on port ${process.env.PORT}`)
}) 