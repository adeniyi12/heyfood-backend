import { TagModel } from '@/models/tag.model';
import { Tag } from '@/interfaces/tag.interface';

export class TagService {
  public tagModel = TagModel;

  public async findAllTag(): Promise<Tag[]> {
    const tags: Tag[] = await this.tagModel.find();
    return tags;
  }
}
