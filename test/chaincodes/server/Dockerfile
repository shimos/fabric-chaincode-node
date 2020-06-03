FROM hyperledger/fabric-ccenv:latest

ADD . /opt/chaincode
RUN cd /opt/chaincode; npm install

WORKDIR /opt/chaincode
ENTRYPOINT ["npm", "start"]
