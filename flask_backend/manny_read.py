import dynamodb_handler as ddb

res = ddb.getAllIngredients()
print('res: ', res)
for ing in res:
    print(ing['kcal'] * 10)
    print(float(ing['price']))
