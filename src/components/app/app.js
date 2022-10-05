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
				{ name: 'John Smith', salary: 1500, increase: false, id: 1 },
				{ name: 'Alex Levin', salary: 1000, increase: false, id: 2 },
				{ name: 'Bron Kann', salary: 800, increase: true, id: 3 },
				{ name: 'Linda Forest', salary: 1200, increase: false, id: 4 },
				{ name: 'Mary Morgan', salary: 900, increase: true, id: 5 },
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
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
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

				<EmployersList data={data} onDelete={this.deleteItem} />

				<EmployersAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
