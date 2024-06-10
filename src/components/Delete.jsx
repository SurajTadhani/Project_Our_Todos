import { useListStore } from "../store/ToDoStore";
import PropTypes from "prop-types";

const Delete = ({ id }) => {
	const removeListItem = useListStore((state) => state.removeListItem);

	return (
		<>
			<button
				type="button"
				className="btn btn-square btn-error"
				onClick={() => document.getElementById("my_modal_5").showModal()}
			>
				<img
					src="/icons/delete.svg"
					alt="delete"
					className=" object-contain size-8"
				/>
			</button>
			<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-error">Are you Sure ?</h3>
					<p className="py-4 text-error-content">
						This action cannot be undone.
					</p>
					<div className="modal-action">
						<form method="dialog" onSubmit={() => removeListItem(id)}>
							<button type="submit" className="btn btn-error">
								Delete
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
};

Delete.propTypes = {
	id: PropTypes.number,
};

export default Delete;
