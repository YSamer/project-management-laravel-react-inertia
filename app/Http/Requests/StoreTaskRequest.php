<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'project_id' => ['required', 'exists:projects,id'],
            'assigned_user_id' => ['nullable', 'exists:users,id'],
            // 'created_by' => ['required', 'exists:users,id'],
            // 'updated_by' => ['required', 'exists:users,id'],
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'image' => ['nullable', 'image'],
            'status' => ['nullable', 'in:pending,in_progress,completed,cancelled'],
            'due_date' => ['nullable', 'date'],
            'priority' => ['nullable', 'in:low,medium,high'],
        ];
    }
}
