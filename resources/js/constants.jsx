export const PROJECT_STATUS_CLASS_MAP = {
    pending: "bg-amber-500",
    in_progress: "bg-blue-500",
    completed: "bg-green-500",
    canceled: "bg-red-500",
};

export const PROJECT_STATUS_LABELS = {
    pending: "Pending",
    in_progress: "In Progress",
    completed: "Completed",
    canceled: "Canceled",
};

export const PROJECT_STATUS_OPTIONS = [
    { value: "pending", label: "Pending" },
    { value: "in_progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "canceled", label: "Canceled" },
];

export const TASK_STATUS_CLASS_MAP = {
    pending: "bg-amber-500",
    in_progress: "bg-blue-500",
    completed: "bg-green-500",
    canceled: "bg-red-500",
};

export const TASK_STATUS_LABELS = {
    pending: "Pending",
    in_progress: "In Progress",
    completed: "Completed",
    canceled: "Canceled",
};

export const TASK_STATUS_OPTIONS = [
    { value: "pending", label: "Pending" },
    { value: "in_progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "canceled", label: "Canceled" },
];

export const TASK_PRIORITY_CLASS_MAP = {
    low: "bg-gray-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
};

export const TASK_PRIORITY_LABELS = {
    low: "Low",
    medium: "Medium",
    high: "High",
};

export const TASK_PRIORITY_OPTIONS = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
];

// Users Roles 
export const USER_ROLES = [
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
    { value: "user", label: "User" },
];