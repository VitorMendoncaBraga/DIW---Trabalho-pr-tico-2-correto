const token = "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"
var repo = localStorage.getItem("selectedRepo")
fetch("https://api.github.com/users/VitorMendoncaBraga/repos", {
    headers: {
        'Authorization': `token ${token}`
    }
})
.then(response => response.json())
.then(data =>{
    document.querySelector("#nome-repo").innerHTML = data[repo].name
    document.querySelector("#descricao").innerHTML = data[repo].description
    document.querySelector("#data").innerHTML = data[repo].created_at
    document.querySelector("#language").innerHTML = data[repo].language
    document.querySelector("#link").innerHTML = data[repo].html_url
})