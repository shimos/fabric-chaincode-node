/*
# Copyright Hitachi America, Ltd. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
*/
"use strict";

const shim = require('fabric-shim');

class ServerTest extends shim.ChaincodeInterface {
    async Init(stub) {
    }

    async Invoke(stub) {
        const { fcn, params } = stub.getFunctionAndParameters();

        const response = {
            msg: "OK from ServerTest",
            func: fcn.toString(),
            params: params.map((p) => p.toString())
        };

        return shim.success(Buffer.from(JSON.stringify(response)));
    }
}

const server = shim.server(new ServerTest(), {
    ccid: process.env.CHAINCODE_ID,
    address: process.env.CHAINCODE_SERVER_ADDRESS
});

server.start();
