# port:tamumu
Ran on Google App Engine, migrated to GCP
My exploration of modern HTML/CSS. Images are all hosted on deviantART at http://tamumu61.deviantart.com. Nothing fancy here.

Website is here: http://tamumu61.appspot.com

# Initial GCloud setup
* Download gcloud sdk https://cloud.google.com/sdk/docs/install
* `./install.sh`
* `gcloud init`
* Log into account and set project

# Deploying
* `gcloud app deploy --project <project_id>`
* see `gcloud config list` for project_id