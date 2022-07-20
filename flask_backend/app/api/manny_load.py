import dynamodb_handler as ddb
import ingredient_data as id
import json
import decimal

if __name__ == '__main__':
    for ing in id.ingredients:
        payload = json.loads(json.dumps(ing), parse_float=decimal.Decimal)
        ddb.mannyCreateIngredient(payload)
