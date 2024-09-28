import * as grpc from '@grpc/grpc-js';
import { SumRequest, SumResponse } from './protos/calculator_pb';
import { CalculatorService } from './protos/calculator_grpc_pb';

function sum(call: grpc.ServerUnaryCall<SumRequest, SumResponse>, callback: grpc.sendUnaryData<SumResponse>) {
    const a = call.request.getA();
    const b = call.request.getB();
    const response = new SumResponse();
    response.setResult(a + b);
    callback(null, response);
}

const server = new grpc.Server();
server.addService(CalculatorService, {
  sum,
});

server.bindAsync(`0.0.0.0:50051`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(`Error starting server: ${err.message}`);
    return;
  }
  console.log(`Server running on port ${port}`);
  server.start();
});