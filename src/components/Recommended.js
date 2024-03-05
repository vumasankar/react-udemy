import cone from"../assets/images/c1.jpeg"
import ctwo from "../assets/images/c2.jpeg"
import cthree from "../assets/images/c3.jpeg"
import cfour from "../assets/images/c4.jpeg"


function Recommended(){
    return(
    <div class="Recommended">
    <h1>Recommended for you</h1>
    <p> Top Picks for you</p>
    <div class="Recommended__container">
        <div Class="course">
          <img src={cone} alt="Course pic"></img>
          <h3>2023 Python data visulations</h3>
          <p>col Steel</p>
         <p>4.9🌟🌟🌟🌟</p>
         <p>449<del>4990</del></p>
        </div>
    
       <div Class="course">
        <img src={ctwo} alt="Course pic"></img>
         <h3>2023 Web development Bootcamp</h3>
         <p>col Steel</p>
         <p>4.9🌟🌟🌟</p>
         <p>449<del>4990</del></p>
        </div>
        <div Class="course">
         <img src={cthree} alt="Course pic"></img>
          <h3>2023 MAster your Bootstrap</h3>
         <p>col Steel</p>
         <p>4.9🌟🌟🌟🌟</p>
         <p>449<del>4990</del></p>
        </div>
       <div Class="course">
         <img src={cfour} alt="Course pic"></img>
         <h3>2023PHP Web Development Programming</h3>
         <p>col Steel</p>
         <p>4.9🌟🌟🌟🌟</p>
         <p>449 <del>4990</del></p>
        </div>
     </div>
 </div>

)
}
export default Recommended