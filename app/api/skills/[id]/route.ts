import { NextResponse } from "next/server";
import {dbConnect} from "@/lib/dbConnect";
import Skill from "@/models/Skill";

// UPDATE SKILL
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const updateData = await req.json();
    const { id } = params;

    const updatedSkill = await Skill.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedSkill) {
      return NextResponse.json({ message: "Skill not found" }, { status: 404 });
    }

    return NextResponse.json(updatedSkill, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update skill" }, { status: 500 });
  }
}

// DELETE SKILL
export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const { id } = params;

    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return NextResponse.json({ message: "Skill not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Skill deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete skill" }, { status: 500 });
  }
}
