<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
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
            'Dashboard',
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
