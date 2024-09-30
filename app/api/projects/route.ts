import { NextResponse } from 'next/server';
import Project from '@/models/Project'; // Import your Project model
import { dbConnect } from '@/lib/dbConnect'; // Import the MongoDB connection

export async function GET() {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all projects from the database
    const projects = await Project.find({});

    // Return the projects in the response
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ message: 'Failed to fetch projects' }, { status: 500 });
  }
}
