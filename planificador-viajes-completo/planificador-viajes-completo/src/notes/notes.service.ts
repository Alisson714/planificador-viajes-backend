import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteEntity } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NoteEntity)
    private notesRepository: Repository<NoteEntity>,
  ) {}

  async findAll(): Promise<NoteEntity[]> {
    return this.notesRepository.find({ relations: ['user', 'route', 'activity'] });
  }

  async findOne(id: string): Promise<NoteEntity> {
    const note = await this.notesRepository.findOne({ 
      where: { id },
      relations: ['user', 'route', 'activity']
    });
    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }
    return note;
  }

  async findByUser(userId: string): Promise<NoteEntity[]> {
    return this.notesRepository.find({ 
      where: { user: { id: userId } },
      relations: ['route', 'activity']
    });
  }

  async findByRoute(routeId: string): Promise<NoteEntity[]> {
    return this.notesRepository.find({ 
      where: { route: { id: routeId } },
      relations: ['user']
    });
  }

  async create(noteData: Partial<NoteEntity>): Promise<NoteEntity> {
    const note = this.notesRepository.create(noteData);
    return this.notesRepository.save(note);
  }

  async update(id: string, noteData: Partial<NoteEntity>): Promise<NoteEntity> {
    const note = await this.findOne(id);
    Object.assign(note, noteData);
    return this.notesRepository.save(note);
  }

  async remove(id: string): Promise<void> {
    const note = await this.findOne(id);
    await this.notesRepository.remove(note);
  }
}