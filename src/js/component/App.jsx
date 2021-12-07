import React, { useState } from "react";

const api = {
	key: "9b3c6dedfc4e64d022ed01fdf4a86c81",
	base: "https://api.openweathermap.org/data/2.5/",
};

//create your first component
const App = () => {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});

	const search = (checklocation) => {
		if (checklocation === "Enter") {
			fetch(
				`${api.base}weather?q=${query}&units=metrics&APPID=${api.key}`
			)
				.then((res) => res.json())
				.then((result) => setWeather(result));
			setQuery("");
			console.log(result);
		}
	};

	const dateBuilder = (dateV) => {
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];

		let day = days[dateV.getDay()];
		let date = dateV.getDate();
		let month = months[dateV.getMonth()];
		let year = dateV.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};

	return (
		<div className="app">
			<main>
				<div className="search-box">
					<input
						type="text"
						className="search-bar"
						placeholder="Search..."
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						onKeyPress={search}
					/>
				</div>
				{typeof weather.main != "undefined"}
				<div className="location-box">
					<div className="location">
						{weather.name}, {weather.sys.country}
					</div>
					<div className="date">{dateBuilder(new Date())}</div>
				</div>
				<div className="weather-box">
					<div className="temperature">35°C</div>
					<div className="weather"> Sunny </div>
				</div>
			</main>
		</div>
	);
};

export default App;
