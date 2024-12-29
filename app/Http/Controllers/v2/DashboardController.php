<?php

namespace App\Http\Controllers\v2;

use App\Http\Controllers\Controller;
use App\Http\Resources\v2\TaskResource;
use App\Models\v2\Task;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalPendingTasks = Task::query()
            ->where('status', 'pending')
            ->count();
        $totalMyPendingTasks = Task::query()
            ->where('status', 'pending')
            ->where('assigned_user_id', Auth::id())
            ->count();

        $totalInProgressTasks = Task::query()
            ->where('status', 'in_progress')
            ->count();
        $totalMyInProgressTasks = Task::query()
            ->where('status', 'in_progress')
            ->where('assigned_user_id', Auth::id())
            ->count();
        $totalCompletedTasks = Task::query()
            ->where('status', 'completed')
            ->count();
        $totalMyCompletedTasks = Task::query()
            ->where('status', 'completed')
            ->where('assigned_user_id', Auth::id())
            ->count();
        $totalCanceledTasks = Task::query()
            ->where('status', 'canceled')
            ->count();
        $totalMyCanceledTasks = Task::query()
            ->where('status', 'canceled')
            ->where('assigned_user_id', Auth::id())
            ->count();
        $activeTasks = Task::query()
            ->whereIn('status', ['pending', 'in_progress'])
            ->where('assigned_user_id', Auth::id())
            ->limit(10)->get();
        $activeTasks = TaskResource::collection($activeTasks);

        return Inertia::render(
            'v2/Dashboard',
            compact(
                'totalPendingTasks',
                'totalMyPendingTasks',
                'totalInProgressTasks',
                'totalMyInProgressTasks',
                'totalCompletedTasks',
                'totalMyCompletedTasks',
                'totalCanceledTasks',
                'totalMyCanceledTasks',
                'activeTasks',
            )
        );
    }
}
