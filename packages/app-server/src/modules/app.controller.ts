import { Get, Controller, Post, Body, HttpException } from '@nestjs/common';
import { myForm, errorAggregator } from 'app-state';

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
