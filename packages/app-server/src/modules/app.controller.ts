import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { errorAggregator, myForm } from 'app-state';

@Controller()
export class AppController {
  @Post()
  createUser(@Body() params) {
    const form = myForm;
    form.setValue(params);

    if (!form.valid) {
      const errors = errorAggregator(form.controls);
      throw new HttpException({ errors }, 422);
    }

    return { success: true };
  }

}
