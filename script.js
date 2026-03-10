document.getElementById("btnBuscar").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(usuario => {

        const jsonApiFormat = {
            data:{
                type: "user",
                id: usuario.id,
                attributes:{
                    nomeDoUsuario:usuario.name,
                    emailDoUsuario: usuario.email,
                    username: usuario. usrname
                }
            }
        };
        document.getElementById("saida").textContent =
        JSON.stringify(jsonApiFormat, null, 4);
    });
});