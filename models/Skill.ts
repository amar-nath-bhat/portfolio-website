import mongoose, { Schema, model, models } from 'mongoose';

const SkillSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Skill = models.Skill || model('Skill', SkillSchema);
export default Skill;
