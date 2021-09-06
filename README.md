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
* Install dependencies `pip install -r requirements.txt`
* To use datastore emulator, install JDK
* Create a config.py with ADMIN_HASH=<your_hash>

## With venv activated with e.g. `. venv/bin/activate`,
* Set environment variables for datastore emulator: `$(gcloud beta emulators datastore env-init)`
* `python main.py`
* If production frontend not built yet, in `frontend/`, `npm run build` to update production build
* Go to flask server at localhost:8080 to use production build of frontend

## For the frontend,
* In `frontend/`, `npm start`
* Go to front end at localhost:3000

## For datastore emulator
* `gcloud beta emulators datastore start` with optionally `--no-store-on-disk`
* Use `data/datastore_script.py` to manipulate/view data (see help with -h)
    * Run `$(gcloud beta emulators datastore env-init)` first
    * `python data/datastore_script.py load` to load dummy data

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