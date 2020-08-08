# Triggers a webhook to update the server

#!/bin/bash
#echo $DEPLOY_SECRET

echo "Deploy to production...."

export DATA="{\"ref\":\"$DEPLOY_SECRET\"}"

#echo $DATA

curl -X POST http://fullstack.cash:9000/hooks/wallet.fullstack.cash -H "Content-Type: application/json" -d $DATA
echo "...Finished deploying to production."
