import { useListStore } from "../store/ToDoStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ListFormSchema } from "../config/validationSchemas";

const Add = () => {
	const addListItem = useListStore((state) => state.addListItem);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(ListFormSchema),
	});

	const onSubmit = (data) => {
		const id = Math.floor(Math.random() * 100);
		addListItem({ ...data, id: id });
	};

	return (
		<>
			<button
				type="button"
				className="btn btn-square btn-neutral btn-lg"
				onClick={() => document.getElementById("my_modal_7").showModal()}
			>
				<img
					src="/icons/add.svg"
					alt="add"
					className=" object-contain size-8"
				/>
			</button>
			<dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-primary">New Task</h3>
					<p className="py-4 text-primary">
						Please Fill the details to create a new task
					</p>
					<form
						method="dialog"
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<label className="form-control w-full max-w-xs">
							<div className="label">
								<span className="label-text">Title</span>
							</div>
							<input
								type="text"
								{...register("title")}
								className={`input input-bordered w-full max-w-xs ${
									errors.title ? "input-error" : "input-primary"
								}`}
								placeholder="title"
							/>
							{errors.title && (
								<div className="label">
									<span className="label-text-alt text-error">
										{errors.title.message}
									</span>
								</div>
							)}
						</label>
						<label htmlFor="description" className="form-control">
							<div className="label">
								<span className="label-text">Description</span>
							</div>
							<textarea
								className={`textarea textarea-bordered textarea-lg w-full max-w-xs ${
									errors.description ? "textarea-error" : "textarea-primary"
								}`}
								placeholder="description"
								{...register("description")}
							/>
							{errors.description && (
								<div className="label">
									<span className="label-text-alt text-error">
										{errors.description.message}
									</span>
								</div>
							)}
						</label>
						<div className="modal-action">
							<button type="submit" className="btn btn-primary">
								Add
							</button>
						</div>
					</form>
				</div>
			</dialog>
		</>
	);
};

export default Add;
