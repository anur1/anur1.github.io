import json
path = 'C:/Users/ahmet/Desktop/anur1.github.io/assets/py/deneme.json'

# Load the JSON file
with open(path, 'r') as file:
    data = json.load(file)

# Update the descriptions
for card in data['cards']:
    print(card['description'])
    card['description'] = '   '
    card['subTitle'] = ""
    card['image'] = "./media/photo/environmental/"
    card["buttonText"] = "Go"
    card["buttonLink"] = ""
    card["tags"] = ""
    card["title"] = ""




# Save the updated JSON file
with open(path, 'w') as file:
    json.dump(data, file, indent=2)