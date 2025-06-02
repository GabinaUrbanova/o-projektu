// čeká na načtení celého obsahu stránky
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('aboutUsButton');
  const projectButton = document.getElementById('aboutProjectBtn');
  const board = document.querySelector('.board');

  button.addEventListener('click', () => {
    board.innerHTML = `
    <div class="about-us">
    <h2>O nás</h2>
      <p>
      Jsme Gábina a Míša a společně tvoříme super tým!
      Mrkni na naše GitHuby:
      </p>
      <div class="icons-wrapper">
      
      <a href="https://github.com/GabinaUrbanova" 
      target="_blank" 
      rel="noopener noreferrer">
      <img src="/images/foto_G.jpeg" 
      alt="Gábina" 
      class="icon-button" />
    </a>
    
    <a href="https://github.com/MichaelaHeidlerova" 
    target="_blank" 
    rel="noopener noreferrer">
      <img src="/images/foto_M.jpg" 
      alt="Míša" 
      class="icon-button" />
    </a>
    </div>
    </div>
    `;
  });

  projectButton.addEventListener('click', () => {
    board.innerHTML = `
      <div class="container">
      <h2>O našem projektu</h2>
        <p>
          Známe to z praxe – rozdělování dětí do skupin, snaha o
          férovost, kreativitu i zapojení všech… a nakonec stejně není někdo
          spokojený. Proto bychom rády vytvořily RozToč – jednoduchý, ale šikovný
          nástroj, který obohatí výuku a zároveň učitelům usnadní a zajistí nejen
          náhodné losování a rozdělení žáků do skupin, ale také jim přidělí
          specifické role, které podněcují aktivní účast, zodpovědnost a
          spolupráci.
        </p>
        <p>
          Nicméně to nemusí být jen pedagogické prostředí, kde se dá náš projekt
          využít. Je možné ho aplikovat i do jiných oborů, protože týmová práce se
          objevuje skoro všude.
        </p>
        <p>
          Projekt by se mohl upravit i pro rozdělení do skupin podle věku,
          pracovní pozice a dalších pracovních předpokladů.
        </p>
      </div>
    `;
  });
});

