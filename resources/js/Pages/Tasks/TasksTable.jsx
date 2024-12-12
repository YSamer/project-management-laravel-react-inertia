import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import {
    TASK_STATUS_CLASS_MAP,
    TASK_STATUS_LABELS,
    TASK_STATUS_OPTIONS,
} from "@/constants";
import { Link, router } from "@inertiajs/react";

export default function TasksTable({
    tasks,
    queryParams = null,
    showProjectName = true,
}) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route("tasks.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            queryParams.sort_direction =
                queryParams.sort_direction === "asc" ? "desc" : "asc";
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("tasks.index"), queryParams);
    };

    return (
        <>
            <div className=" overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                        <tr className="text-nowrap">
                            <TableHeading
                                name="id"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                ID
                            </TableHeading>
                            <TableHeading>Image</TableHeading>
                            {showProjectName && (
                                <TableHeading>Project Name</TableHeading>
                            )}
                            <TableHeading
                                name="name"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Name
                            </TableHeading>
                            <TableHeading
                                name="status"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Status
                            </TableHeading>
                            <TableHeading
                                name="created_at"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Created Data
                            </TableHeading>
                            <TableHeading
                                name="due_date"
                                sort_field={queryParams.sort_field}
                                sort_direction={queryParams.sort_direction}
                                sortChanged={sortChanged}
                            >
                                Due Data
                            </TableHeading>
                            <TableHeading>Created By</TableHeading>
                            <TableHeading>Actions</TableHeading>
                        </tr>
                    </thead>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                        <tr className="text-nowrap">
                            <th className="px-3 py-3"></th>
                            <th className="px-3 py-3"></th>
                            {showProjectName && <th className="px-3 py-3"></th>}
                            <th className="px-3 py-3">
                                <TextInput
                                    className="w-full"
                                    placeholder="Task Name"
                                    defaultValue={queryParams.name}
                                    onBlur={(e) =>
                                        searchFieldChanged(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    onKeyPress={(e) => onKeyPress("name", e)}
                                />
                            </th>
                            <th className="px-3 py-3">
                                <SelectInput
                                    className="w-full"
                                    defaultValue={queryParams.status}
                                    onChange={(e) =>
                                        searchFieldChanged(
                                            "status",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">All</option>
                                    {TASK_STATUS_OPTIONS.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </SelectInput>
                            </th>
                            <th className="px-3 py-3"></th>
                            <th className="px-3 py-3"></th>
                            <th className="px-3 py-3"></th>
                            <th className="px-3 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.data.map((task) => (
                            <tr className="bg-white border-b" key={task.id}>
                                <td className="px-3 py-2">{task.id}</td>
                                <td className="px-3 py-2">
                                    <img
                                        className="h-20 w-48 object-cover rounded-sm"
                                        src={task.image_path}
                                        alt=""
                                    />
                                </td>
                                {showProjectName && (
                                    <th className="px-3 py-2 text-nowrap text-black hover:underline">
                                        <Link
                                            href={route(
                                                "projects.show",
                                                task.project.id
                                            )}
                                        >
                                            {task.project.name}
                                        </Link>
                                    </th>
                                )}
                                <th className="px-3 py-2 text-nowrap text-black hover:underline">
                                    <Link href={route("tasks.show", task.id)}>
                                        {task.name}
                                    </Link>
                                </th>
                                <td className="px-3 py-2">
                                    <span
                                        className={
                                            "px-2 py-1 text-nowrap rounded text-white " +
                                            TASK_STATUS_CLASS_MAP[task.status]
                                        }
                                    >
                                        {TASK_STATUS_LABELS[task.status]}
                                    </span>
                                </td>
                                <td className="px-3 py-2 text-nowrap">
                                    {task.created_at}
                                </td>
                                <td className="px-3 py-2 text-nowrap">
                                    {task.due_date}
                                </td>
                                <td className="px-3 py-2">
                                    {task.createdBy.name}
                                </td>
                                <td className="px-3 py-2">
                                    <Link
                                        href={route("tasks.edit", task.id)}
                                        className="font-medium text-blue-600 hover:underline mx-1"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route("tasks.destroy", task.id)}
                                        className="font-medium text-red-600 hover:underline mx-1"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination links={tasks.meta.links} />
        </>
    );
}
