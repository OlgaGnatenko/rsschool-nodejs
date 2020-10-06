# Caesar cipher using CLI

## Run app

1. Install dependencies

        npm i

2. Encode 

        node caesar-cipher -a encode -s 10 -i "./message.txt" -o "./encoded.txt"
        node caesar-cipher --action encode --shift 10 --input "./message.txt" --output "./encoded.txt"
        node caesar-cipher --action decode --shift 10 --input "./encoded.txt" --output "./decoded.txt"

## Description

Task requirements: 
https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md#task-1-caesar-cipher-cli-tool

