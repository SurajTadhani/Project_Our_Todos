import { useListStore } from "../store/ToDoStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ListFormSchema } from "../config/validationSchemas";
import PropTypes from "prop-types";

const Update = ({ id }) => {
	const list = useListStore((state) => state.list);
	const currentItem = list.find((obj) => obj.id === id);
	const updateListItem = useListStore((state) => state.updateListItem);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(ListFormSchema),
	});
	const onSubmit = (data) => {
		updateListItem(data);
	};
	return (
		<>
			<button
				type="button"
				className="btn btn-square btn-secondary"
				onClick={() => document.getElementById("my_modal_6").showModal()}
			>
				<img
					src="/icons/edit.svg"
					alt="delete"
					className=" object-contain size-8"
				/>
			</button>
			<dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-primary">
						Update List!! (id : {id})
					</h3>
					<p className="py-4 text-primary-content">
						Please Update the list item below
					</p>
					<form
						method="dialog"
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<label className="form-control w-full">
							<div className="label">
								<span className="label-text">Title</span>
							</div>
							<input
								type="text"
								{...register("title")}
								className={`input input-bordered w-full max-w-xs ${
									errors.title ? "input-error" : "input-secondary"
								}`}
								placeholder={currentItem.title}
							/>
							{errors.title && (
								<div className="label">
									<span className="label-text-alt text-error">
										{errors.title.message}
									</span>
								</div>
							)}
						</label>
						<label htmlFor="description" className="form-control w-full">
							<div className="label">
								<span className="label-text">Description</span>
							</div>
							<textarea
								placeholder={currentItem.description}
								className={`textarea textarea-bordered textarea-lg w-full max-w-xs ${
									errors.description ? "textarea-error" : "textarea-secondary"
								}`}
								{...register("description")}
							/>
							{errors.description && (
								<div className="label">
									<span className="label-text-alt text-error">
										{errors.title.message}
									</span>
								</div>
							)}
						</label>
						<div className="modal-action">
							<button type="submit" className="btn btn-secondary">
								Update
							</button>
						</div>
					</form>
				</div>
			</dialog>
		</>
	);
};

Update.propTypes = {
	id: PropTypes.number,
};

export default Update;
