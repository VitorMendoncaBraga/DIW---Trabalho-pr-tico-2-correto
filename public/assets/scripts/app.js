const token = "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"

// meu perfil
fetch("https://api.github.com/users/VitorMendoncaBraga",{

})
.then(function(response){
    return response.json()
})
.then(function(data){
    document.querySelector("#nome").innerHTML = data.name
    document.querySelector("#bio").innerHTML = data.bio
    document.querySelector("#loc").innerHTML = data.location
    document.querySelector("#minha_foto").src = data.avatar_url
    document.querySelector("#seguidores").innerHTML = data.followers
})

// colegas
fetch("https://back-end-diw.vercel.app/colegas")
.then(function(response){
    return response.json()
})
.then(function(data){
    for(var i = 0; i < 4; i++){
        document.querySelector(`#colega${i + 1}_nome`).innerHTML = data[i].nome
        document.querySelector(`#colega${i + 1}_foto`).src = data[i].foto
        document.querySelector(`#colega${i + 1}_link`).href = data[i].git
    }
})
// Projetos
fetch("https://back-end-diw.vercel.app/projetos")
.then(function(response){
   return response.json()
})
.then(function(data){
     for(var i = 0; i < 5; i++){
        document.querySelector(`#carrosel_foto${i + 1}`).src = data[i].foto
    }
})
// repositorios
fetch("https://api.github.com/users/VitorMendoncaBraga/repos", {
    
})
.then(function(response){
    return response.json()
})
.then(function(data){
    // repositorio 1
    document.querySelector("#nome_projeto1").innerHTML = data[5].name
    document.querySelector("#descricao_projeto1").innerHTML = data[5].description
    document.querySelector("#star1").innerHTML = data[5].stargazers_count
    document.querySelector("#person1").innerHTML = data[5].watchers_count

    //repositorio 2
    document.querySelector("#nome_projeto2").innerHTML = data[2].name
    document.querySelector("#descricao_projeto2").innerHTML = data[2].description
    document.querySelector("#star2").innerHTML = data[2].stargazers_count
    document.querySelector("#person2").innerHTML = data[2].watchers_count

    //repositorio 3
    document.querySelector("#nome_projeto3").innerHTML = data[0].name
    document.querySelector("#descricao_projeto3").innerHTML = data[0].description
    document.querySelector("#star3").innerHTML = data[0].stargazers_count
    document.querySelector("#person3").innerHTML = data[0].watchers_count

})

const card = document.querySelectorAll(".card")
    card.forEach(card => {
        card.addEventListener('click', () => {
            var repokey = card.getAttribute("data-repo")
            localStorage.setItem('selectedRepo', repokey);
            window.location.href = 'repositorio.html';
        });
    });