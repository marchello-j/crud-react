import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: 'John Smith',
					salary: 1500,
					increase: false,
					rise: true,
					id: 1,
				},
				{
					name: 'Alex Levin',
					salary: 1000,
					increase: false,
					rise: false,
					id: 2,
				},
				{
					name: 'Bron Kannaman',
					salary: 800,
					increase: true,
					rise: false,
					id: 3,
				},
				{
					name: 'Linda Forest',
					salary: 1200,
					increase: false,
					rise: false,
					id: 4,
				},
				{
					name: 'Mary Morgan',
					salary: 900,
					increase: true,
					rise: false,
					id: 5,
				},
			],
		};
		this.maxId = 6;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((elem) => elem.id !== id),
			};
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name: name,
			salary: salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onToggleIncrease = (id) => {
		// this.setState(({ data }) => {
		// 	const index = data.findIndex((elem) => elem.id === id);

		// 	const old = data[index];
		// 	const newItem = { ...old, increase: !old.increase };
		// 	const newArr = [
		// 		...data.slice(0, index),
		// 		newItem,
		// 		...data.slice(index + 1),
		// 	];

		// 	return {
		// 		data: newArr,
		// 	};
		// });

		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, increase: !item.increase };
				}
				return item;
			}),
		}));
	};

	onToggleRise = (id) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, rise: !item.rise };
				}
				return item;
			}),
		}));
	};

	render() {
		const { data } = this.state;
		return (
			<div className='app'>
				<AppInfo />

				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployersList
					data={data}
					onDelete={this.deleteItem}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise}
				/>

				<EmployersAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
