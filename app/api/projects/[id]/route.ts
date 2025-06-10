import { NextResponse } from "next/server";
import { dbConnect } from '@/lib/dbConnect'; 
import Project from "@/models/Project";

// UPDATE PROJECT
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const updateData = await req.json();
    const { id } = params;

    const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedProject) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update project" }, { status: 500 });
  }
}

// DELETE PROJECT
export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const { id } = params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete project" }, { status: 500 });
  }
}
