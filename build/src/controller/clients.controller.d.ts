import { CreateClientDto } from 'src/dtos/client-dto/create-client.dto';
import { UpdateClientDto } from 'src/dtos/client-dto/update-client.dto';
import { Clients } from 'src/entity/clients.entity';
import { ClientsService } from 'src/service/clients.service';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    createClient(createClientDto: CreateClientDto): Promise<{
        status: number;
        data: any[];
        message: string;
    } | {
        status: number;
        data: Clients;
        message: string;
    }>;
    getAllClients(): Promise<{
        status: number;
        data: Clients[];
        message: string;
    }>;
    updateClient(id: number, updateClientDto: UpdateClientDto): Promise<{
        status: number;
        data: any[];
        message: string;
    }>;
    getClientById(id: number): Promise<{
        status: number;
        data: Clients[];
        message: string;
    }>;
}
