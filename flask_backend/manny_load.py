import dynamodb_handler as ddb

ingredients = [
    {
        'name': 'green beans',
        'category': 'vegetable',
        'mfr': 'kroger',
        'type': 'frozen',
        'unit': 'lb',
        'price': '1.15',
        'kcal': 187
    },
    {
        'name': 'broccoli',
        'category': 'vegetable',
        'mfr': 'kroger',
        'type': 'frozen',
        'unit': 'lb',
        'price': '1.15',
        'kcal': 160
    },
    {
        'name': 'carrots',
        'category': 'vegetable',
        'mfr': 'kroger',
        'type': 'fresh',
        'unit': 'lb',
        'price': '0.86',
        'kcal': 154
    },
    {
        'name': 'yogurt - carbmaster',
        'category': 'dairy',
        'mfr': 'kroger',
        'type': 'NA',
        'unit': 'lb',
        'price': '1.10',
        'kcal': 185
    }
]

if __name__ == '__main__':
    for ing in ingredients:
        ddb.mannyCreateIngredient(ing['name'], ing['category'], ing['mfr'], ing['type'], ing['unit'], ing['price'], ing['kcal'])
