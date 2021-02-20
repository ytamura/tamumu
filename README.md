# port:tamumu
Ran on Google App Engine, migrated to GCP
My exploration of modern HTML/CSS. Images are all hosted on deviantART at http://tamumu61.deviantart.com. Nothing fancy here.

Website is here: http://tamumu61.appspot.com

# Initial GCloud Setup
* Download gcloud sdk https://cloud.google.com/sdk/docs/install
* `./install.sh`
* `gcloud init`
* Log into account and set project

# Testing Locally
## Initial setup
* Create virtual environment: `python -m venv venv`
* Activate: `. venv/bin/activate`
* Install dependencies `pip install -r requirements.txt`

## With venv activated, 
* `python main.py`


# GCP Deployment
## Production
* `gcloud app deploy --project <project_id>`
* see `gcloud config list` for `project_id`

## Test Deployment
* `gcloud app deploy --no-promote`
* Migrate traffic in console

## Streaming logs
* `gcloud app logs tail -s default`