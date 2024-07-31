import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  constructor() {}

  afterInit(_server: Socket) {
    console.log('Server initialized');
  }

  handleConnection(client: Socket, ..._args: any[]) {
    console.log('Client connected ' + client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected ' + client.id);
  }

  @SubscribeMessage('events')
  handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data: any): string {
    console.log(client.data.id);
    // logs the id of the client
    const message: string = data.message;
    return message;
  }
}
