// import data from external data file
import { deals } from "./data";

function Deals() {
	// using map we can loop through each pair in the relevant object to get each unique component
	const aDeal = deals.map((deals) => (
		<li className="col-md-12">
			<div className="image">
				<a href="blog-detail.html" />
				{/* might need to change the image to a source in data.js but this works for now */}
				<img alt="" src="http://placehold.it/100x100" />
			</div>
			<ul className="top-info">
				<li>
					<i className="fa fa-calendar" />
					{/* get the availability from the data file */}
					Available {deals.availability}
				</li>
			</ul>
			<h4>
				{/* get the name of the deal from the data file */}
				<a href="blog-detail.html">{deals.title}</a>
				{/* had to change from p to label to make w3cvalidator happy and play with some css but this looks identical and is correct */}
				<label>{deals.region}</label>
			</h4>
		</li>
	));
	// render each deal
	return <>{aDeal}</>;
}

// send the deal to the main components
export default Deals;
