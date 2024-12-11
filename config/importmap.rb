# Pin npm packages by running ./bin/importmap

pin "application"

pin "station", to: "station.js"
pin "leaflet", to: "https://cdn.skypack.dev/leaflet"

pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
