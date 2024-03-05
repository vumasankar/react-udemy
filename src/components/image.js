import one from "../assets/images/sales.jpeg"


function SaleImage(){
    
    return(
    <div class="sale__image">
    <img src= {one} alt="saleimage"></img>
    <div class="sale__image__offer">
        <h2>
            Udemy Flash sale! 224mhours to save.
        </h2>
        <p>Get the top courses for just 499. Just one day to save but a lifetime to learn</p>
    </div>
</div>)
}
export default SaleImage