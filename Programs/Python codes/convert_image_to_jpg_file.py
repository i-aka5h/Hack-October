# requires the Pillow module used as `PIL` below
from PIL import Image
#import some libraries
import os
import sys
file="toJPG.png"
filename = file.split(".")
img = Image.open(file)
new_name = filename[0] + ".jpg"
converted_img = img.convert('RGB')
converted_img.save(new_name)
