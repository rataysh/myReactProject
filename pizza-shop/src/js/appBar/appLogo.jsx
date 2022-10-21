import React from "react";
import "./appBar.css";
// import ImgAsset from "../public";
import logoImg from "../../assets/images/appBarLogo.png";

const altDescription = "Shop logotype";

function AppLogo() {
    return (
        <div className="AppLogo">
            <img src={logoImg} alt={altDescription} className="LogoImgStyle" />
            <span className="LogoTextStyle">Pizza Shop</span>
        </div>
    );
}

export default AppLogo;

/* <span className="LogoTextStyle">Pizza Shoop</span> */

/* <div className='Frame4354_Frame4354'>
			<img className='margheritapizza2' src = {ImgAsset.Frame4354_margheritapizza2} />
			<div className='Rectangle3788'/>
			<div className='Rectangle3792'/>
			<div className='Frame4356'>
				<div className='Rectangle3784'/>
				<div className='Group4281'>
					<div className='Group4280'>
						<img className='Vector' src = {ImgAsset.Frame4354_Vector} />
						<img className='Vector_1' src = {ImgAsset.Frame4354_Vector_1} />
						<img className='Vector_2' src = {ImgAsset.Frame4354_Vector_2} />
						<img className='Vector_3' src = {ImgAsset.Frame4354_Vector_3} />
						<img className='Vector_4' src = {ImgAsset.Frame4354_Vector_4} />
						<img className='Vector_5' src = {ImgAsset.Frame4354_Vector_5} />
						<img className='Vector_6' src = {ImgAsset.Frame4354_Vector_6} />
						<img className='Vector_7' src = {ImgAsset.Frame4354_Vector_7} />
					</div>
				</div>
				<div className='Frame4354_1'>
					<span className='Home'>Home</span>
					<span className='Menu'>Menu</span>
					<span className='Delivery'>Delivery</span>
					<span className='About'>About</span>
					<span className='Blog'>Blog</span>
				</div>
				<div className='Frame4355'>
					<div className='noun_Search_24351811'>
						<img className='Vector_8' src = {ImgAsset.Frame4354_Vector_8} />
					</div>
					<div className='noun_cart_1206183'>
						<img className='Vector_9' src = {ImgAsset.Frame4354_Vector_9} />
						<img className='Vector_10' src = {ImgAsset.Frame4354_Vector_10} />
						<img className='Vector_11' src = {ImgAsset.Frame4354_Vector_11} />
						<div className='Ellipse3937'/>
					</div>
					<div className='Frame4347'>
						<span className='SIGNIN'>SIGN IN</span>
					</div>
				</div>
				<span className='PizzaShid'>Pizza Shid</span>
			</div>
			<span className='TrendingRecipes'>Trending Recipes</span>
			<div className='Rectangle17'/>
			<div className='Frame4367'>
				<div className='Frame4366'>
					<span className='WeHaveTheBestpizza'>We Have The Best pizza!</span>
					<span className='Timetoenjoyourdeliciouspizza'>Time to enjoy our delicious pizza.</span>
				</div>
				<div className='Frame4347_1'>
					<span className='ORDERONLINE'>ORDER ONLINE</span>
				</div>
			</div>
			<div className='Frame4291'>
				<div className='Frame4359'>
					<span className='CheeseLovers'>Cheese Lovers</span>
					<span className='CombinationofAlfredosauceandtwocheesesRomanoandParmesan'>Combination of Alfredo sauce and two cheeses – Romano, and Parmesan.</span>
				</div>
				<span className='_2000'>$20.00</span>
				<div className='Frame4364'>
					<div className='Frame4290'>
						<span className='Regular'>Regular</span>
						<div className='noun_Arrow_23331641'>
							<div className='Group'>
								<img className='Vector_12' src = {ImgAsset.Frame4354_Vector_12} />
							</div>
						</div>
					</div>
					<div className='Frame4358'>
						<span className='Addtocart'>Add to cart</span>
					</div>
				</div>
				<div className='Maskgroup'>
					<img className='Vector2' src = {ImgAsset.Frame4354_Vector2} />
					<img className='image1' src = {ImgAsset.Frame4354_image1} />
				</div>
			</div>
			<div className='Frame4294'>
				<div className='Frame4360'>
					<span className='PepperoniPizza'>Pepperoni Pizza</span>
					<span className='Pizzawithhomemadespicybeefsausage'>Pizza with homemade spicy beef sausage</span>
				</div>
				<span className='_2500'>$25.00</span>
				<div className='Frame4363'>
					<div className='Frame4290_1'>
						<span className='Regular_1'>Regular</span>
						<div className='noun_Arrow_23331641_1'>
							<div className='Group_1'>
								<img className='Vector_13' src = {ImgAsset.Frame4354_Vector_13} />
							</div>
						</div>
					</div>
					<div className='Frame4358_1'>
						<span className='Addtocart_1'>Add to cart</span>
					</div>
				</div>
				<div className='Maskgroup_1'>
					<img className='Vector2_1' src = {ImgAsset.Frame4354_Vector2_1} />
					<img className='image2' src = {ImgAsset.Frame4354_image2} />
				</div>
			</div>
			<div className='Frame4365'>
				<div className='Frame4368'>
				</div>
				<div className='Frame4361'>
					<span className='MargheritaPizza'>Margherita Pizza</span>
					<span className='MadewithSanMarzanotomatoesmozzarellacheeseandfreshbasil'>Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.</span>
				</div>
				<span className='_3500'>$35.00</span>
				<img className='Vector2_2' src = {ImgAsset.Frame4354_Vector2_2} />
				<div className='Maskgroup_2'>
					<img className='Vector2_3' src = {ImgAsset.Frame4354_Vector2_3} />
					<img className='image3' src = {ImgAsset.Frame4354_image3} />
				</div>
			</div>
			<div className='Frame4362'>
				<div className='Frame4290_2'>
					<span className='Regular_2'>Regular</span>
					<div className='noun_Arrow_23331641_2'>
						<div className='Group_2'>
							<img className='Vector_14' src = {ImgAsset.Frame4354_Vector_14} />
						</div>
					</div>
				</div>
				<div className='Frame4358_2'>
					<span className='Addtocart_2'>Add to cart</span>
				</div>
			</div>
		</div> */
