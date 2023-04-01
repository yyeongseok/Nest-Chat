import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index') // views 폴더에서 index라는 파일 찾아서 실행해 준다.
  root() {
    return {
      data: {
        title: 'Nest chatting',
        copyright: 'yoon sang seok',
      },
    }; // return 된 message가 views의 index의 message로 반환이 된다. 그리고 hbs파일은 html과 다르게 변수를 받을수 있다.
  }
}
