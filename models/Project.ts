import mongoose, { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  liveUrl: {
    type: String,
  },
  sourceCodeUrl: {
    type: String,
  },
}, {
  timestamps: true,
});

const Project = models.Project || model('Project', ProjectSchema);
export default Project;
