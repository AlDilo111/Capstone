import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
	return (
		<div>
			<h1>Featured Products</h1>
			<div className="products">
				{data.products.map((product) => (
					<div className="product" key={product.slug}>
						<Link to={`/produuct/${product.slug}`}>
							<img src={product.image} alt={product.name}></img>
						</Link>
						<div clssNamme="product-info">
							<Link to={`/produuct/${product.slug}`}>
								<p>{product.name}</p>
							</Link>
							<p>
								<strong>${product.price}</strong>
							</p>
							<butto>Add to cart</butto>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default HomeScreen;
