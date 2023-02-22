import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageService } from './message.service';

@Controller({
  version: ['1'],
  path: 'message',
})
@ApiTags('Message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
}
