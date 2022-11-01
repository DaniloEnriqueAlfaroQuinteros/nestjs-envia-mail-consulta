import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DoctoDTO } from './dto/docto.dto';
import { Docto } from './entities/docto.entity';
import { DoctoService } from './docto.service';
import { LoggerService } from '../logger/logger.service';

@Controller('docto')
@ApiTags('docto')
export class DoctoController {
  constructor(
    private doctoService: DoctoService,
    private readonly logger: LoggerService,
  ) {}

  @ApiResponse({
    status: 201,
    description: 'The docto is created',
    type: Docto,
  })
  @ApiResponse({
    status: 400,
    description: 'The body of docto is not a DoctoDto object',
  })
  @Post()
  create(@Body() doctoDTO: DoctoDTO): Promise<Docto> {
    return this.doctoService.create(doctoDTO);
  }

  @ApiResponse({ status: 200, description: 'Gets one codigo', type: Docto })
  @ApiResponse({ status: 404, description: 'Docto not found' })
  @Get(':correlativo')
  findOne(@Param('correlativo') correlativo: string): Promise<Docto> {
    this.logger.info('Getting un docto ' + correlativo);
    return this.doctoService.findOne(correlativo);
  }

  @ApiResponse({
    status: 200,
    description: 'Gets all Docto',
    type: Docto,
    isArray: true,
  })
  
  @Get()
  findAll(): Promise<Docto[]> {
    return this.doctoService.findAll();
  }
  

  @Put(':codigo')
  @ApiResponse({
    status: 200,
    description: 'The docto is updated',
    type: Docto,
  })
  @ApiResponse({
    status: 400,
    description: 'The body of usarios is not a object',
  })
  update(
    @Param('correlativo') correlativo: string,
    @Body() doctoDTO: DoctoDTO,
  ): Promise<Docto> {
    return this.doctoService.update(correlativo, doctoDTO);
  }

  @Delete(':correlativo')
  @ApiResponse({ status: 200, description: 'The usuario is deleted' })
  delete(@Param('correlativo') correlativo: string): void {
    this.doctoService.delete(correlativo);
  }
}
