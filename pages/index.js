import Link from 'next/link';

const users = [
	{
		id: 1,
		name: 'Eduardo',
		age: 20,
	},
	{
		id: 2,
		name: 'Cinthya',
		age: 30,
	},
];

function Home() {
	return (
		<ul>
			{users.map((user) => {
				return (
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							{user.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

class MyFetchError extends Error {
	constructor({statusCode, statusText}) {
		
		super(statusText)
		this.name = 'MyFetchError'
		this.statusCode = statusCode
	}
} 

export const getServerSideProps = async (context) => {
	const res = await fetch('http://localhost:3000/api/401')
	if(!res.ok) {
		throw new MyFetchError({statusCode: res.status, statusText: res.statusText})
	}

	return { props: {} }
}

export default Home;
