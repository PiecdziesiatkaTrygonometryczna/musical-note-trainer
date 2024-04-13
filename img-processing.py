# convert all images of notes to white
from PIL import Image
import os

input_folder = 'img/notes-black'
output_folder = 'img/notes-white'


for filename in os.listdir(input_folder):
    if filename.endswith(".png"):
        input_image_path = os.path.join(input_folder, filename)
        output_image_path = os.path.join(output_folder, filename)

        input_image = Image.open(input_image_path)

        input_image = input_image.convert('RGBA')

        for y in range(input_image.height):
            for x in range(input_image.width):
                r, g, b, a = input_image.getpixel((x, y))
                if a != 0:
                    input_image.putpixel((x, y), (255 - r, 255 - g, 255 - b, a))

        input_image.save(output_image_path)
