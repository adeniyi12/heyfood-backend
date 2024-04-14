import { NextFunction, Request, Response } from 'express';
import { TagService } from '@/services/tag.service';
import { Tag } from '@/interfaces/tag.interface';

export class TagController {
  public tag = new TagService();

  public getTags = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllTagsData: Tag[] = await this.tag.findAllTag();
      res.status(200).json({ data: findAllTagsData, message: 'found all tags' });
    } catch (error) {
      next(error);
    }
  };
}
