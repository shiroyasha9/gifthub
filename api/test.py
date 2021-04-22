import requests

result = requests.get(
    "http://www.google.com/aclk?sa=L&amp;ai=DChcSEwjNwI-G4PbvAhVH2JYKHRbkDMIYABBNGgJ0bA&amp;sig=AOD64_35JYfmOtxhXBrJ6T5bJN2P-UqTIg&amp;ctype=5&amp;ved=0ahUKEwiO8YmG4PbvAhW1wTgGHRSSBawQ2CkIkAE&amp;adurl="
)

if result.status_code == 200:
    print("OK")
else:
    print("NOT OK")

