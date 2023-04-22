const marvel = {
  render: () => {
    ///16e35d72c1e6e7c974e66d34a9dc5cd79d824e9829624a508d5ffbe7b46a64a1bde7b3f0a
    //--https://gateway.marvel.com:443/v1/public/characters?apikey=9624a508d5ffbe7b46a64a1bde7b3f0a
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9624a508d5ffbe7b46a64a1bde7b3f0a&hash=39c1e6ee580c6371a6e853d7422e285b';
  
    const container = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            
          <div class="first hero">
            <a href="${urlHero}" target="_blank">
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail"></a>
            <div class="text"></div>
            
            <div class="main-text">
              <p><h2 class="title">${hero.name}</h2></p>
            </div>
            <div class="date">
              <p><h2>MarvelComics APP</h2>cards contenido dinamico</p>
            </div>
            <div class="hero-btn">
              <a href="${urlHero}">Leer Mas..</a>
            </div>
          </div> `;


        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();