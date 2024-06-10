import ToDoList from "./ToDoList";

const Hero = () => {
	return (
		<section
			className="hero min-h-screen"
			style={{ backgroundImage: "url(/images/hero.webp)" }}
		>
			<div className="hero-overlay bg-opacity-60" />
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<ToDoList />
				</div>
			</div>
		</section>
	);
};

export default Hero;
