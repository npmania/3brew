<script>
  import { resolveSystemIcon } from '../utils/common'
  import { translations, tt, setLanguage, LANGUAGE_LIST } from '../store/tt'

  const systems = [
    {
      name: 'system.aeropress',
      url: 'aeropress',
      icon: resolveSystemIcon('aeropress')
    },
    { name: 'system.v60', url: 'v_60', icon: resolveSystemIcon('v_60') },
    { name: 'system.moka', url: 'moka', icon: resolveSystemIcon('moka') },
    { name: 'system.wave', url: 'wave', icon: resolveSystemIcon('wave') },
    {
      name: 'system.frenchPress',
      url: 'frenchPress',
      icon: resolveSystemIcon('frenchPress')
    }
  ]
  const languages = LANGUAGE_LIST
  let selectedLang = $translations.language

  function toggleLang () {
    setLanguage(selectedLang)
  }
</script>

<nav>
  <div>
    {#each systems as item}
      <div class="item">
        <a
          class="system-button bh"
          href="#/{item.url}"
          title={tt($translations, item.name)}
        >
          <div class="system-icon">
            {@html item.icon}
          </div>
          <div class="system-name">{tt($translations, item.name)}</div>
        </a>
      </div>
    {/each}
  </div>
</nav>

<main>
  <div class="author-info">
    Have your own recipe? Just propose it in
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/npmania/3brew/issues">issues</a>!
    <br />
    Want to contribute?
    <br />
    Welcome to the repository:
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/npmania/3brew">github.com/npmania/3brew</a>.
  </div>
  <div class="cc-info">
    Kalita 185 icon by
    <a
      target="_blank"
      rel="noreferrer"
      href="https://thenounproject.com/masbay02/">masbay02</a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://creativecommons.org/licenses/by/2.0/">(CC-BY 2.0)</a>
  </div>
</main>

<select bind:value={selectedLang} class="lang bb" on:change={toggleLang}>
  {#each languages as language}
    <option value={language}>{language}</option>
  {/each}
</select>

<style>
  .item {
    width: 33.3%;
    box-sizing: border-box;
    padding: 10px 10px 10px 0;
    float: left;
    margin-top: 10px;
    position: relative;
  }
  .system-button {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
  }
  .system-icon {
    width: 12vh;
    margin: 14px;
    display: block;
  }
  .system-name {
    color: var(--default-text-color);
    text-align: center;
    display: block;
    font-size: 20px;
    padding: 15px 0;
  }
  .lang {
    display: none;
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    left: 20px;
    cursor: pointer;
    text-align: center;
    font-size: 17px;
    border: none;
  }
  .author-info, .cc-info {
    font-size: 70%;
    width: 100%;
    color: var(--second-text-color);
    margin-top: 30px;
    float: left;
  }
  .cc-info {
    font-size: 55%;
    margin-top: 10px;
  }
  .author-info a, .cc-info a {
    color: var(--water-color);
  }
</style>
