<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    // GET /api/projects
    // show many projects
    public function all_projects(Request $request) {
        return response()->json([
            'data' => ProjectResource::collection(Project::all())
        ],200);
    }

    // GET /api/projects/<id>  
    // show one  project
    public function project(Request $request, $id) {
        $project = Project::find($id);

       if ($project) {
        return response()->json([
            'data' => [
                'id' => $id,
                'name' => $project->name,
                'content' => json_decode($project->content, true) 
            ]
        ],200);
       } else {
        return response()->json([
            'errors' => [
                'project' => 'Project not found'
            ]
        ], 404);
       }
    }


    // POST /api/projects
    // Create a new project
    public function create_project(Request $request, ) {
        $user = Auth::user();

        if ($user) {
            $project = Project::create([
                'name' => $request->name,
                'user_id' => $user->id,
                'content' => json_encode($request->content)
            ]);
    
            return response()->json([
                'data' => [
                    'id' => $project->id,
                    'name' => $project->name,
                    'content' => json_decode($project->content, true) 
                ]
            ],201);
        }
    }

    public function update_project(Request $request, $id) {
        $project = Project::find($id);

       if ($project) {

        $project->name = $request->name;
        $project->content = json_encode($request->content);
        $project->save();

        return response()->json([
            'data' => [
                'id' => $id,
                'name' => $project->name,
                'content' => json_decode($project->content, true) 
            ]
        ],200);
       } else {
        return response()->json([
            'errors' => [
                'project' => 'Project not found'
            ]
        ], 404);
       }
    }
}
