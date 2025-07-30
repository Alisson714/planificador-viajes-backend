import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteEntity } from './entities/note.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async findAll(@Query('userId') userId?: string, @Query('routeId') routeId?: string): Promise<NoteEntity[]> {
    if (userId) {
      return this.notesService.findByUser(userId);
    }
    if (routeId) {
      return this.notesService.findByRoute(routeId);
    }
    return this.notesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<NoteEntity> {
    return this.notesService.findOne(id);
  }

  @Post()
  async create(@Body() noteData: Partial<NoteEntity>): Promise<NoteEntity> {
    return this.notesService.create(noteData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() noteData: Partial<NoteEntity>,
  ): Promise<NoteEntity> {
    return this.notesService.update(id, noteData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.notesService.remove(id);
  }
}