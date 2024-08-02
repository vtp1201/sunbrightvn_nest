import { Injectable } from '@nestjs/common';

import { FileService } from '@modules/file/file.service';

import { file } from '@prisma/client';

import { AbstractService } from '@abstracts';

import { NoteRepository } from './note.repository';

import { MODEL_NAME, NOTE_TYPE, QUESTION_GROUP } from '@utilities';

@Injectable()
export class NoteService extends AbstractService<MODEL_NAME.NOTE, NoteRepository> {
  constructor(
    repository: NoteRepository,
    private readonly fileService: FileService,
  ) {
    super(repository);
  }

  async createNoteCDC(param: any, userId: number) {
    const note = await this.create({ data: param });
    if (param?.files && param.files.length > 0) {
      const filesCreate: file[] = param.files.map((file: file) => {
        return {
          ...file,
          userId,
          companyMemberId: param.companyMemberId ?? null,
          questionGroupId:
            param.noteTypeId === NOTE_TYPE.NOTE_REFERENCE_CUSTOMER
              ? QUESTION_GROUP.CUSTOMER_RISK_FORM
              : null,
        };
      });
      if (filesCreate.length > 0) {
        const files = await this.fileService.createMany({
          data: filesCreate,
        });
        return {
          ...note,
          files,
        };
      }
    }
    return note;
  }

  async createNote(param: any, userId: number) {
    const note = await this.create({ data: param });
    if (param?.files && param.files.length > 0) {
      const filesCreate: file[] = param.files.map((file: file) => {
        return {
          ...file,
          userId,
          companyMemberId: param.companyMemberId ?? null,
          questionGroupId:
            param.noteTypeId === NOTE_TYPE.NOTE_REFERENCE_CUSTOMER
              ? QUESTION_GROUP.CUSTOMER_RISK_FORM
              : null,
        };
      });
      if (filesCreate.length > 0) {
        const files = await this.fileService.createMany({
          data: filesCreate,
        });
        return {
          ...note,
          files,
        };
      }
    }
    return note;
  }
}
