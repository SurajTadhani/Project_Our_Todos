function Navigation() {
	return (
		<header className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl" href="/">
					To Do List
				</a>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-24 md:w-auto"
					/>
				</div>
				<div
					tabIndex={0}
					role="button"
					className="btn btn-ghost btn-circle avatar"
				>
					<a
						className="w-10 rounded-full"
						href="https://github.com/SurajTadhani/Project_Our_Todos"
						rel="noreferrer"
						target="_blank"
					>
						<img alt="github-link" src="/icons/github.svg" />
					</a>
				</div>
			</div>
		</header>
	);
}

export default Navigation;
