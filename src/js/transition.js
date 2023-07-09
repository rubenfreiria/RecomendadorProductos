/* if (document.startViewTransition) {
    window.navigation.addEventListener('navigate', async (event) => {
      const toUrl = new URL(event.destination.url);
  
      // Caso de que la URL sea externa
      if (location.origin !== toUrl.origin) return;
  
      // Si es el mismo dominio
      event.intercept({
        async handler() {
          // Cargamos la página de destino
          const response = await fetch(toUrl.pathname);
          const text = await response.text();
  
          // Extraemos el contenido de la etiqueta body utilizando DOMParser
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(text, 'text/html');
          const bodyContent = htmlDocument.querySelector('body').innerHTML;
  
          // Utilizamos la API de View Transition
          document.startViewTransition(() => {
            // Scrolleamos hacia arriba del todo
            document.documentElement.scrollTop = 0;
  
            // Reemplazamos el contenido del body con el nuevo contenido
            document.body.innerHTML = bodyContent;
          });
        },
      });
    });
  }
   */