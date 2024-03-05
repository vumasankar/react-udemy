function Navbar(){
    return(
      <div class="Navbar">
          <div class="Navbar__left">
              <h1 class="Navbar__left__title">Udemy</h1>
          </div>
          <div class="Navbar__center">
              <i class="fa-regular fa-magnifying-glass"></i>
              <input class="Navbar__input" placeholder="search for anything here"></input>
          </div>
          <div class="Navbar__Right">
              <p>courses</p>
              <div class="Learning">
                  <p >My Learning</p>
                  <div class="Learning__popup">
                      <p>You did not purchase anything yet</p>
                  </div>
              </div>
             
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-bell"></i>
              <i class="fa-solid fa-user"></i>
  
          </div>
      </div>
    )
  }
 export default Navbar  