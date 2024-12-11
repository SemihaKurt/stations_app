class StationsController < ApplicationController
    def index
      @stations = StationService.fetch(latitude: 41.0082, longitude: 28.9784, distance: 10)
    end
  end