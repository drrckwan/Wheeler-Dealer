import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
# from service_rest.models import Something
from service_rest.models import AutomobileVO


def get_automobiles():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for automobile in content["automobiles"]:
        AutomobileVO.objects.update_or_create(
            vin=automobile["vin"],
            import_href=automobile["href"],
        )


def poll():
    while True:
        print("Service poller polling for data")
        try:
            get_automobiles()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(15)


if __name__ == "__main__":
    poll()
