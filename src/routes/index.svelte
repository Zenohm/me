<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
    text-align: center;
  }

  figcaption {
    font-size: .8em;
    font-style: italic;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>Zenohm</title>
  <meta name="Description" content="Zenohm's blog and portfolio of public projects." />
  <link rel="apple-touch-icon" href="/coloringknot.svg">
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Hello, I'm Zenohm</h1>
    <p>I'm a fullstack developer and consultant.</p>
  </div>

  <figure>
    <img alt='A man standing under a tree waiting for another man who is approaching.' src='undraw_Waiting__for_you_ldha.svg'>
    <figcaption>Illustration thanks to <a rel="noreferrer" href="https://undraw.co/" target="_blank">Undraw</a></figcaption>
  </figure>
</div>
