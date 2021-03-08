# port:tamumu
* 2014: exploration of "modern" HTML/CSS
* 2016: actual domain use
* 2020: Google App Engine to Google Cloud Platform migration
* 2021: python 3 upgrade, flask migration, react frontend
Images are all hosted on deviantART at http://tamumu61.deviantart.com. Nothing fancy here.

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
* If production frontend not built yet, in `frontend/`, `npm run build` to update production build
* Go to flask server at localhost:8080 to use production build of frontend

## For the frontend,
* In `frontend/`, `npm start`
* Go to front end at localhost:3000


# GCP Deployment
## Production
* In `frontend/`, `npm run build` to update production build
* Make sure any pip requirements are updated
* `gcloud app deploy --project <project_id>`
* See `gcloud config list` for `project_id`

## Test Deployment
* `gcloud app deploy --no-promote`
* Migrate traffic in console

## Streaming logs
* `gcloud app logs tail -s default`