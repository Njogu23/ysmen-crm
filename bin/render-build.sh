#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install Ruby gems
bundle install

# (Optional) Uncomment the next line if your app needs seeded data on deploy
# bundle exec rake db:seed

# Run database migrations
# If this is the first deployment and the database has not been created,
# uncomment the next line to set up the database
# bundle exec rake db:setup

# Run database migrations
bundle exec rails db:migrate
