import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function TableHeading({
    name,
    sort_field = null,
    sort_direction = null,
    children,
    sortChanged = () => {},
}) {
    const sortable = name != null;
    return (
        <th onClick={(e) => (sortable ? sortChanged(name) : {})}>
            <div
                className={
                    "px-3 py-3 flex items-center justify-between gap-1" +
                    (sortable ? " cursor-pointer" : "")
                }
            >
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIcon
                            className={
                                "w-3 " +
                                (sort_field === name && sort_direction == "asc"
                                    ? "text-black"
                                    : "text-gray-400")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                "w-3 -mt-1 " +
                                (sort_field === name && sort_direction == "desc"
                                    ? "text-black"
                                    : "text-gray-400")
                            }
                        />
                    </div>
                )}
            </div>
        </th>
    );
}
