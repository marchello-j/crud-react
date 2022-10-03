import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {
	const data = [
		{ name: 'John Smith', salary: 1500, increase: false, id: 1},
		{ name: 'Alex Levin', salary: 1000, increase: false, id: 2},
		{ name: 'Bron Kann', salary: 800, increase: true, id: 3},
		{ name: 'Linda Forest', salary: 1200, increase: false, id: 4},
		{ name: 'Mary Morgan', salary: 900, increase: true, id: 5},
	];

	return (
		<div className='app'>
			<AppInfo />

			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployersList data={data} />

			<EmployersAddForm />
		</div>
	);
}

export default App;
