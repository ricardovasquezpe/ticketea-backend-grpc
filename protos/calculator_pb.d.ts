// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SumRequest extends jspb.Message { 
    getA(): number;
    setA(value: number): SumRequest;
    getB(): number;
    setB(value: number): SumRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SumRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SumRequest): SumRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SumRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SumRequest;
    static deserializeBinaryFromReader(message: SumRequest, reader: jspb.BinaryReader): SumRequest;
}

export namespace SumRequest {
    export type AsObject = {
        a: number,
        b: number,
    }
}

export class SumResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): SumResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SumResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SumResponse): SumResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SumResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SumResponse;
    static deserializeBinaryFromReader(message: SumResponse, reader: jspb.BinaryReader): SumResponse;
}

export namespace SumResponse {
    export type AsObject = {
        result: number,
    }
}
