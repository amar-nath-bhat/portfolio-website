import { NextResponse } from 'next/server';
import Project from '@/models/Project';
import { dbConnect } from '@/lib/dbConnect'; 

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({});
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ message: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const newProject = new Project({
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      liveUrl: data.liveUrl,
      sourceCodeUrl: data.sourceCodeUrl,
    });
    await newProject.save();
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create project' }, { status: 500 });
  }
}
