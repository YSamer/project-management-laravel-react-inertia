import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import TasksTable from "./TasksTable";

export default function Index({
    auth,
    success,
    tasks,
    queryParams = null,
    currentRoute = "tasks.index",
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Tasks
                    </h2>
                    <Link
                        href={route("tasks.create")}
                        className="bg-blue-500 px-3 py-1 rounded shadow text-white transition-all hover:bg-blue-600"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Tasks" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-2 text-gray-900">
                            <TasksTable
                                tasks={tasks}
                                success={success}
                                queryParams={queryParams}
                                currentRoute={currentRoute}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
