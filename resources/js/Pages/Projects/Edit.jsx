import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import { PROJECT_STATUS_OPTIONS } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, project }) {
    console.log(project);
    const { data, setData, post, errors, reset } = useForm({
        image: "",
        name: project.name || "",
        status: project.status || "",
        description: project.description || "",
        due_date: project.due_date || "",
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("projects.update", project.id));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Edit project {project.name || ""}
                    </h2>
                </div>
            }
        >
            <Head title="Projects" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
                        >
                            {/* Preview Image */}
                            {project.image_path && (
                                <div className="mb-4">
                                    <img
                                        src={project.image_path}
                                        className="w-64"
                                    />
                                </div>
                            )}
                            {/* Image */}
                            <div>
                                <InputLabel
                                    htmlFor="project_image_path"
                                    value="Project Image"
                                />
                                <TextInput
                                    id="project_image_path"
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
                                    htmlFor="project_name"
                                    value="Project Name"
                                />
                                <TextInput
                                    id="project_name"
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
                                    htmlFor="project_description"
                                    value="Project Description"
                                />
                                <TextAreaInput
                                    id="project_description"
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
                                    htmlFor="project_due_date"
                                    value="Project Deadline"
                                />
                                <TextInput
                                    id="project_due_date"
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
                                    htmlFor="project_status"
                                    value="Project Status"
                                />
                                <SelectInput
                                    id="project_status"
                                    name="status"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value="">Select Status</option>
                                    {PROJECT_STATUS_OPTIONS.map((option) => (
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
                                {/* Buttons */}
                                <div className="mt-4 text-right">
                                    {/* Cancel Button */}
                                    <Link
                                        href={route("projects.index")}
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
                            </div>
                            {/* END FORM */}
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}