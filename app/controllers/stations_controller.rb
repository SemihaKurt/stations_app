class StationsController < ApplicationController
    def index
      @stations = StationService.fetch
    end
  end