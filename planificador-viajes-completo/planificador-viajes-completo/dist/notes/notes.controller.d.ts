import { NotesService } from './notes.service';
import { NoteEntity } from './entities/note.entity';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    findAll(userId?: string, routeId?: string): Promise<NoteEntity[]>;
    findOne(id: string): Promise<NoteEntity>;
    create(noteData: Partial<NoteEntity>): Promise<NoteEntity>;
    update(id: string, noteData: Partial<NoteEntity>): Promise<NoteEntity>;
    remove(id: string): Promise<void>;
}
