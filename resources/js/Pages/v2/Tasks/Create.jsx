import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import { TASK_PRIORITY_OPTIONS, TASK_STATUS_OPTIONS } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth , projects, users}) {
    const { data, setData, post, errors, reset } = useForm({
        image: "",
        name: "",
        status: "",
        description: "",
        due_date: "",
        priority: "",
        project_id: "",
        assigned_user_id : "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("tasks.store"));
    };

    console.log(projects);
    console.log(users);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Create a new task
                    </h2>
                </div>
            }
        >
            <Head title="Tasks" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
                        >
                            {/* Project */}
                            <div>
                                <InputLabel
                                    htmlFor="task_project_id"
                                    value="Project"
                                />
                                <SelectInput
                                    id="task_project_id"
                                    name="project_id"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("project_id", e.target.value)
                                    }
                                >
                                    <option value="">Select Project</option>
                                    {projects.data.map((project) => (
                                        <option
                                            key={project.id}
                                            value={project.id}
                                        >
                                            {project.name}
                                        </option>
                                    ))}
                                </SelectInput>
                                <InputError
                                    message={errors.project_id}
                                    className="mt-2"
                                />
                            </div>
                            {/* Image */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_image_path"
                                    value="Task Image"
                                />
                                <TextInput
                                    id="task_image_path"
                                    type="file"
                                    name="image"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                <InputError
                                    message={errors.image}
                                    className="mt-2"
                                />
                            </div>

                            {/* Name */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_name"
                                    value="Task Name"
                                />
                                <TextInput
                                    id="task_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            {/* Description */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_description"
                                    value="Task Description"
                                />
                                <TextAreaInput
                                    id="task_description"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>
                            {/* Deadline */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_due_date"
                                    value="Task Deadline"
                                />
                                <TextInput
                                    id="task_due_date"
                                    type="date"
                                    name="due_date"
                                    value={data.due_date}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("due_date", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.due_date}
                                    className="mt-2"
                                />
                            </div>
                            {/* Status */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_status"
                                    value="Task Status"
                                />
                                <SelectInput
                                    id="task_status"
                                    name="status"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value="">Select Status</option>
                                    {TASK_STATUS_OPTIONS.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </SelectInput>
                                <InputError
                                    message={errors.status}
                                    className="mt-2"
                                />
                            </div>
                            {/* Priority */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_priority"
                                    value="Task Priority"
                                />
                                <SelectInput
                                    id="task_priority"
                                    name="priority"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("priority", e.target.value)
                                    }
                                >
                                    <option value="">Select Priority</option>
                                    {TASK_PRIORITY_OPTIONS.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </SelectInput>
                                <InputError
                                    message={errors.priority}
                                    className="mt-2"
                                />
                            </div>
                            {/* Assigned User */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="task_assigned_user"
                                    value="Assigned User"
                                />
                                <SelectInput
                                    id="task_assigned_user"
                                    name="assigned_user_id"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData(
                                            "assigned_user_id",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">Select Assigned User</option>
                                    {users.data.map((user) => (
                                        <option
                                            key={user.id}
                                            value={user.id}
                                        >
                                            {user.name}
                                        </option>
                                    ))}
                                </SelectInput>
                                <InputError
                                    message={errors.assigned_user_id}
                                    className="mt-2"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 text-right">
                                {/* Cancel Button */}
                                <Link
                                    href={route("tasks.index")}
                                    className="bg-gray-400 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-500 mr-2"
                                >
                                    Cancel
                                </Link>
                                {/* Submit Button */}
                                <button
                                    onClick={onSubmit}
                                    className="bg-blue-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                            {/* END FORM */}
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
