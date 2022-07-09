import boto3
from decouple import config

AWS_ACCESS_KEY_ID	= config("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY	= config("AWS_SECRET_ACCESS_KEY")
REGION_NAME		= config("REGION_NAME")

client = boto3.client(
    'dynamodb',
    aws_access_key_id     = AWS_ACCESS_KEY_ID,
    aws_secret_access_key = AWS_SECRET_ACCESS_KEY,
    region_name           = REGION_NAME,
)
resource = boto3.resource(
    'dynamodb',
    aws_access_key_id     = AWS_ACCESS_KEY_ID,
    aws_secret_access_key = AWS_SECRET_ACCESS_KEY,
    region_name           = REGION_NAME,
)

# get reference to Users table
ingredientTable = resource.Table('Ingredients')

# CREATE
def createIngredient(name, category):
    ingredient = {'name': name, 'category': category}
    res = ingredientTable.put_item(Item=ingredient)
    return res

# READ
def getAllIngredients():
    res = ingredientTable.scan()
    data = res['Items']

    # dynamoDB limits results to 1MB, so paginate through results in loop
    while 'LastEvaluatedKey' in res:
        res = ingredientTable.scan(ExclusiveStartKey=res['LastEvaluatedKey'])
        data.extend(res['Items'])
    
    return data


# def readUser(email):
#     key = {'email': email}
#     columns = ['email', 'password', 'name']
#     res = userTable.get_item(Key=key, AttributesToGet=columns)
#     return res

# UPDATE
# TODO


# DELETE
# TODO

