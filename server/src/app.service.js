import { Injectable } from '@nestjs/common';
import { randomNumber } from './utils/getNumber';

@Injectable()
export class AppService {
  getNumber() {
    try {
      const numeroAleatorio = randomNumber();
      return { value: numeroAleatorio };
    } catch (error) {
      throw new InternalServerErrorException(
        'Error al generar el número aleatorio',
        error.message,
      );
    }
  }
}
