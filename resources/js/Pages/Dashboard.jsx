import { TASK_STATUS_CLASS_MAP, TASK_STATUS_LABELS } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
    auth,
    totalMyPendingTasks,
    totalPendingTasks,
    totalMyInProgressTasks,
    totalInProgressTasks,
    totalMyCompletedTasks,
    totalCompletedTasks,
    totalMyCanceledTasks,
    totalCanceledTasks,
    activeTasks,
}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-4 lg:px-6 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                    <div className="overflow-hidden bg-white shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-amber-500 text-xl font-semibold">
                                Pending Tasks
                            </h3>
                            <p className="text-xl mt-4">
                                <span className="mr-2">
                                    {totalMyPendingTasks}
                                </span>
                                /
                                <span className="ml-2">
                                    {totalPendingTasks}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-blue-500 text-xl font-semibold">
                                In Progress Tasks
                            </h3>
                            <p className="text-xl mt-4">
                                <span className="mr-2">
                                    {totalMyInProgressTasks}
                                </span>
                                /
                                <span className="ml-2">
                                    {totalInProgressTasks}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-green-500 text-xl font-semibold">
                                Complete Tasks
                            </h3>
                            <p className="text-xl mt-4">
                                <span className="mr-2">
                                    {totalMyCompletedTasks}
                                </span>
                                /
                                <span className="ml-2">
                                    {totalCompletedTasks}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-red-500 text-xl font-semibold">
                                Canceled Tasks
                            </h3>
                            <p className="text-xl mt-4">
                                <span className="mr-2">
                                    {totalMyCanceledTasks}
                                </span>
                                /
                                <span className="ml-2">
                                    {totalCanceledTasks}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-4 lg:px-6 mt-4">
                    <div className="overflow-hidden bg-white shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-gray-800 text-2xl font-semibold">
                                My Active Tasks
                            </h3>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-4">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                                    <th className="px-3 py-3">ID</th>
                                    <th className="px-3 py-3">Project Name</th>
                                    <th className="px-3 py-3">Name</th>
                                    <th className="px-3 py-3">Status</th>
                                    <th className="px-3 py-3">Due Date</th>
                                </thead>
                                <tbody>
                                    {activeTasks.data.map((task) => (
                                        <tr key={task.id}>
                                            <td className="px-3 py-2">
                                                {task.id}
                                            </td>
                                            <th className="px-3 py-2 text-black hover:underline">
                                                <Link
                                                    href={route(
                                                        "projects.show",
                                                        task.project.id
                                                    )}
                                                >
                                                    {task.project.name}
                                                </Link>
                                            </th>
                                            <th className="px-3 py-2 text-black hover:underline">
                                                <Link
                                                    href={route(
                                                        "tasks.show",
                                                        task.id
                                                    )}
                                                >
                                                    {task.name}
                                                </Link>
                                            </th>
                                            <td className="px-3 py-2">
                                                <span
                                                    className={
                                                        "px-2 py-1 text-nowrap rounded text-white " +
                                                        TASK_STATUS_CLASS_MAP[
                                                            task.status
                                                        ]
                                                    }
                                                >
                                                    {
                                                        TASK_STATUS_LABELS[
                                                            task.status
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-3 py-2">
                                                {task.due_date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
