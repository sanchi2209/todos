import React from "react";
import "./../styles/App.css";
import Todo from "./Todo";
// import Todo from "./Todo";
function App() 
{
	return (
	<div id="main" className="bg-pink">
	{/* //Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component. */}
	<Todo/>
	</div>
	);
}


export default App;
