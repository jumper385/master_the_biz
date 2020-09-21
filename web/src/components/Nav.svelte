<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    padding: 12pt 64pt;
    box-sizing: border-box;
    width: 100vw;
    z-index: 100;
    display: grid;
    grid-template-columns: 1fr 4fr;
    background: #1a1a2e;
    color: white;
    height: 72pt;
  }
  .top {
    text-align: right;
    height: 18pt;
    margin-bottom: 12pt;
  }
  .bottom {
    text-align: right;
    height: 18pt;
    font-weight: bold;
  }
  .logo {
    font-weight: bold;
    font-size: 1.2em;
    display: flex;
    align-items: center;
  }
  .link {
    text-decoration: none;
    margin-left: 12pt;
  }

  @media only screen and (max-width: 800px) {
    nav {
      all:unset;
      padding:6pt 0;
      margin:0;
      display:grid;
      background:pink;
      grid-template-columns: 1fr;
      grid-template-rows: 2fr 1fr;
      background: #1a1a2e;
      color:white;
    }
    .logo {
      all:none;
      display:flex;
      align-items: center;
      justify-content: center;
      width:100%;
    }
    .bottom {
      all:none;
      text-align:center;
    }
    .top {
      all:none;
      margin: 0;
      display:none;
    }

  }
</style>

<nav>
  <p class="logo">LOGO</p>
  <div class="context">
    <div class="top">
      <div class="quick_contact">
        <span style="margin-right:24pt;">email: email@emailserver.net.au</span>
        <span>phone: +61 453 890 678</span>
      </div>
    </div>
    <div class="bottom">
      <a class="link" href=".">Home</a>
      <a class="link" href="about">About</a>
      <a class="link" href="services">Services</a>
      <a style="color:#28DF99" class="link" href="contact">Contact</a>
    </div>
  </div>
</nav>
