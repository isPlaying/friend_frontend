import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [
  FormsModule,
  NgZorroAntdModule,
  CommonModule,
  HttpClientModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [],
})
export class SharedModule {}
