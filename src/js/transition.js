if(document.startViewTransition){
    window.navigation.addEventListener('navigate', (event) =>{
        const toUrl = new URL(event.destination.url)

        //Caso de que la url sea externa
        if (location.origin !== toUrl.origin) return

        //Si es el mismo dominio
        event.intercept({
            async handler (){
                //Cargamos la pagina de destino
                const response = await fetch(toUrl.pathname)
                const text = await response.text()

                //Nos quedamos solo con el contenido de la etiqueta body
                const [, data] = text.match(/<body>([\s\S]*)<\/body>/i)
                
                //Ultilazamos la API de View Transition
                document.startViewTransition(() => {
                    // el scroll hacia arriba del todo
                    document.body.innerHTML = data
                    document.documentElement.scrollTop = 0
                })
            }
        })
    })
}