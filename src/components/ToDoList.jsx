import { useListStore } from "../store/ToDoStore";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";

const ToDoList = () => {
	const list = useListStore((state) => state.list);

	return list.length === 0 ? (
		<div className="space-y-6 text-center">
			<img
				src="/images/noData.png"
				loading="eager"
				alt="no-data-found"
				className=" object-contain size-full"
			/>
			<h1>Oops!! There is no Data. Get Started with Creating a List</h1>
			<Add />
		</div>
	) : (
		<div className="overflow-x-auto space-y-6">
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th>Title</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{list.map((item) => (
						<tr key={item.id}>
							<td>{item.title}</td>
							<td>
                                <Update id={item.id} />
                            </td>
							<td>
								<Delete id={item.id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Add />
		</div>
	);
};

export default ToDoList;
