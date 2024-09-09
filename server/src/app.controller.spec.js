import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get(AppController);
  });

  describe('postNumber', () => {
    it('should return an object with a value property that is a number between 1 and 100', () => {
      const result = appController.postNumber();
      expect(result).toHaveProperty('value');
      expect(result.value).toBeGreaterThanOrEqual(1);
      expect(result.value).toBeLessThanOrEqual(100);
    });
  });
});
