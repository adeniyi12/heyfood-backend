import { model, Schema, Document } from 'mongoose';
import { Tag } from '@/interfaces/tag.interface';

const TagSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const TagModel = model<Tag & Document>('Tag', TagSchema);
