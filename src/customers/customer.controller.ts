/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller()
export class CustomerController {
    @Get()
    findCustomers() {
        return 'This action returns all customers';
    }
}