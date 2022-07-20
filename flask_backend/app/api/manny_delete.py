import dynamodb_handler as ddb
import ingredient_data as id

# ddb.mannyDeleteIngredient('vegetable')
# ddb.mannyDeleteIngredient('rotisseries chicken')
# ddb.mannyDeleteIngredient('frozen spinach')
# ddb.mannyDeleteIngredient('ground beef')
if __name__ == '__main__':
    for ing in id.ingredients:
        ddb.mannyDeleteIngredient(ing['name'])
