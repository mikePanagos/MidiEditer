import { Stack, StackProps, RemovalPolicy } from "aws-cdk-lib";
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

export class MidiEditerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, id, {
      billingMode: dynamodb.BillingMode.PROVISIONED,
      readCapacity: 1,
      writeCapacity: 1,
      tableName:"cdk-table",
      removalPolicy: RemovalPolicy.DESTROY,
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "createdAt", type: dynamodb.AttributeType.NUMBER },
      pointInTimeRecovery: true,
    });

    // The code that defines your stack goes here
    console.log(table.tableName);
    

    // example resource
    // const queue = new sqs.Queue(this, 'MidiEditerQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
