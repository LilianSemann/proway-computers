import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { NotifService } from '../services/notif.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formContact: any;
  constructor (
    private notifyService: NotifService,
    private fb: FormBuilder
  ) {
    this.formContact = this.fb.group({
      email: ["", [
        Validators.email,
        Validators.required
      ]],
      name: ["", [
        Validators.minLength(4),
        Validators.required
      ]],
      tel: ["", [
        Validators.minLength(11),
        Validators.required
      ]],
      subject: ["", [
        Validators.minLength(8),
        Validators.required
      ]],
      message: ["", [
        Validators.minLength(10),
        Validators.required
      ]]
    });
  }

  sendFormulary() {
    this.notifyService.notify('Seu formulário foi enviado.')
    this.formContact.reset()
  }
}
