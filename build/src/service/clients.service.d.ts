import { CreateClientDto } from 'src/dtos/client-dto/create-client.dto';
import { UpdateClientDto } from 'src/dtos/client-dto/update-client.dto';
import { Clients } from 'src/entity/clients.entity';
import { Repository } from 'typeorm';
export declare class ClientsService {
    private readonly clientRepo;
    constructor(clientRepo: Repository<Clients>);
    createClient(createClientDto: CreateClientDto): Promise<{
        status: number;
        data: any[];
        message: string;
    } | {
        status: number;
        data: Clients;
        message: string;
    }>;
    findAllClients(): Promise<{
        status: number;
        data: Clients[];
        message: string;
    }>;
    findOneClient(id: number): Promise<{
        status: number;
        data: Clients[];
        message: string;
    }>;
    editClientInfo(id: number, updateClientDto: UpdateClientDto): Promise<{
        status: number;
        data: any[];
        message: string;
    }>;
}
