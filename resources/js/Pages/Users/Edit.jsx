import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, user }) {
    console.log(user);
    const { data, setData, post, errors, reset } = useForm({
        name: user.name || "",
        email: user.email || "",
        password: "",
        password_confirmation: "",
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("users.update", user.id));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Edit user {user.name || ""}
                    </h2>
                </div>
            }
        >
            <Head title="Users" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
                        >
                            {/* Name */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="user_name"
                                    value="User Name"
                                />
                                <TextInput
                                    id="user_name"
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
                            {/* Email */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="user_email"
                                    value="User Email"
                                />
                                <TextInput
                                    id="user_email"
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            {/* Password */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="user_password"
                                    value="Password"
                                />
                                <TextInput
                                    id="user_password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            {/* Password Confirmation */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="user_password_confirmation"
                                    value="Confirm Password"
                                />
                                <TextInput
                                    id="user_password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            {/* Buttons */}
                            <div className="mt-4 text-right">
                                {/* Cancel Button */}
                                <Link
                                    href={route("users.index")}
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