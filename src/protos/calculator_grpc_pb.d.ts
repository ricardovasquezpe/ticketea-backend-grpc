// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as calculator_pb from "./calculator_pb";

interface ICalculatorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sum: ICalculatorService_ISum;
}

interface ICalculatorService_ISum extends grpc.MethodDefinition<calculator_pb.SumRequest, calculator_pb.SumResponse> {
    path: "/calculator.Calculator/Sum";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<calculator_pb.SumRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.SumRequest>;
    responseSerialize: grpc.serialize<calculator_pb.SumResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.SumResponse>;
}

export const CalculatorService: ICalculatorService;

export interface ICalculatorServer {
    sum: grpc.handleUnaryCall<calculator_pb.SumRequest, calculator_pb.SumResponse>;
}

export interface ICalculatorClient {
    sum(request: calculator_pb.SumRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
}

export class CalculatorClient extends grpc.Client implements ICalculatorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sum(request: calculator_pb.SumRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
}
