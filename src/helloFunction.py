import json
import boto3
import logging

logger = logging.getLogger()

def lambda_handler(event, context):
    s3                    = boto3.client('s3')
    s3_bucket_name        = 'tkm-webapp-data'
    json_filename         = 'json/dekkaido.json'
    s3_response_data      = s3.get_object(Bucket=s3_bucket_name, Key=json_filename)
    jsonfile_body         = s3_response_data['Body'].read().decode('utf-8')
    response_dictionary   = json.loads(jsonfile_body)
    
    print(json.loads(event['body'])['body']['text'])
    payload               = json.loads(event['body'])['body']['text']
    response_text         = response_dictionary.get(payload, '????')
    print(response_text)
    
    if response_text == '????' :
        return {
            "isBase64Encoded": True,
            'statusCode': 404,
            'headers': {
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials": True,
                "Access-Control-Allow-Headers": "Content-Type"
            },
            'body': json.dumps(response_text)
        }
    else:
        return {
            "isBase64Encoded": True,
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials": True,
                "Access-Control-Allow-Headers": "Content-Type"
            },
            'body': json.dumps(response_text)
        }
    
