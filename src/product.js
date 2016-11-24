import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Store from "./store";

import Choicer from "./components/choicer";
import StudentsList from "./components/students-list";
import ProductTest from "./components/product-test";

//import $ from "jquery"; 加入後檔案較大，但可以用最新的jquery

//$("html").append("<div id='product2'>hi</div>");

window.onload = function () {
	ReactDOM.render(
		<Provider store={Store}>
			<div>
				<Choicer />
				<StudentsList />
				hello product<br />
				<ProductTest />
			</div>
		</Provider>,
		document.getElementById("product")
	);
	console.log("1");
};
