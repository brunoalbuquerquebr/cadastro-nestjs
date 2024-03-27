import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll(@Res() response) {
    return response.status(200).send('Listagem de Cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualizado ${id}, ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remove ${id}`;
  }
}
