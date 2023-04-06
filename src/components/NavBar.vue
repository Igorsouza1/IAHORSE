  <template>
    <div class="navigation">
      <div class="navigation-icons">
        <div class="navigation-icon">
          <router-link to="/">
            <a class="icon-link" href="#">
              <font-awesome-icon class="icons" icon="house" />
              <p>Home</p>
            </a>
          </router-link>
        </div>
        <div class="navigation-icon">
          <router-link to="/classificador">
            <a class="icon-link" href="#">
              <font-awesome-icon class="icons" icon="horse-head" />
              <p>Classificador</p>
            </a>
          </router-link>
        </div>
        <div class="navigation-icon">
          <router-link to="/historico">
            <a class="icon-link" href="#">
              <font-awesome-icon class="icons" icon="file-waveform" />
              <p>Histórico</p>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'NavBar',
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @media (max-width: 749px) {
    .navigation {
      position: fixed;
      overflow: hidden;
      bottom: 0;
      width: 100%;
      height: 4.5rem;
      display: flex;
      justify-content: center;
      border: 1px solid rgba(0,0,0,20%);
      z-index: 10;
      box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.2);
      background-color: #fff;
    }

    .navigation-icons {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .logoCavalo img{
      display: none;
    }

    .navigation-icon {
      text-align: center;
      width: 33.33%;
      padding-top: 0.8rem;
      transition: all 0.3s ease;
      
    }

    .icons{
      font-size: 1.7rem;
    }


    .navigation-icon a{
      cursor: pointer;
      text-decoration: none;
      color: black;
      
    }

    .icon-link{
      letter-spacing: 1px;
      font-size: 14px;
    }
 
    .navigation-icon [aria-current="page"] .icons {
      transition: 0.4s;
      color: green;
      transform: scale(1.25);
    }
  }

  @media (min-width: 750px) {
    .navigation{
      height: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border: 1px solid rgba(22,22,22,0.5);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .logoCavalo img{
      width: 40px;
      height: 40px;
      margin-left: 2rem;
    }

    .navigation-icons{
      display: flex;
      justify-content: right;
      width: 100%;
      margin-top: 1rem;
    }

    .navigation-icon img{
      display: none;
    }

    .navigation-icon a p{
      margin-right: 2.5rem;
    }

    a{
      text-decoration: none;
      color: black;
      font-weight: 500;
    }

  }

  </style>
