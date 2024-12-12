import { NextResponse } from 'next/server';
import Skill from '@/models/Skill'; 
import { dbConnect } from '@/lib/dbConnect';

export async function GET() {
  try {
    await dbConnect();
    const skills = await Skill.find({});
    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json({ message: 'Failed to fetch skills' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const newSkill = new Skill({
      title: data.title,
      img: data.img,
    });
    await newSkill.save();
    return NextResponse.json(newSkill, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create skill' }, { status: 500 });
  }
}
