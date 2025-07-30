import { Repository } from 'typeorm';
import { NoteEntity } from './entities/note.entity';
export declare class NotesService {
    private notesRepository;
    constructor(notesRepository: Repository<NoteEntity>);
    findAll(): Promise<NoteEntity[]>;
    findOne(id: string): Promise<NoteEntity>;
    findByUser(userId: string): Promise<NoteEntity[]>;
    findByRoute(routeId: string): Promise<NoteEntity[]>;
    create(noteData: Partial<NoteEntity>): Promise<NoteEntity>;
    update(id: string, noteData: Partial<NoteEntity>): Promise<NoteEntity>;
    remove(id: string): Promise<void>;
}
