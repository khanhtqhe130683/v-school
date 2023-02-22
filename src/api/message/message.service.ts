import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { CRON, MESSAGE_CONFIG } from 'src/configs/constant.config';
import { StudentEntity } from '../student/entities/student.entity';
import { StudentService } from '../student/student.service';

@Injectable()
export class MessageService {
  pattern: string;
  constructor(private readonly httpService: HttpService, private readonly studentService: StudentService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async test() {
    const date = new Date().getDate() + '/' + (new Date().getMonth() + 1);

    const students: StudentEntity[] = (await this.studentService.findAllByCondition({ dob: date })).data;

    const webhookURL = MESSAGE_CONFIG.URL;
    const img = [];
    const message = 'Happy birthday';
    for (let i = 0; i < 2; i++) {
      img.push(
        {
          decoratedText: {
            startIcon: {
              knownIcon: 'EMAIL',
            },
            text: message,
          },
        },
        {
          image: {
            imageUrl: `https://developers.google.com/chat/images/chat-product-icon.png`,
          },
        },
      );
    }

    const data = {
      // text: CRON.MESSAGE + message,
      cardsV2: [
        {
          cardId: 'unique-card-id',
          card: {
            // header: {
            //   title: 'Sasha',
            //   subtitle: 'Software Engineer',
            //   imageUrl: 'https://developers.google.com/chat/images/quickstart-app-avatar.png',
            // },
            sections: [
              {
                // header: 'Contact Info',
                // collapsible: true,
                // uncollapsibleWidgetsCount: 1,
                widgets: [img],
              },
            ],
          },
        },
      ],
    };
    try {
      await firstValueFrom(
        this.httpService.post(webhookURL, data, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }),
      );
    } catch (error) {
      return error;
    }
    return true;
  }
}
