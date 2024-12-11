class StationsController < ApplicationController
    def index
      @stations = StationService.fetch(latitude: 41.0356, longitude: 29.0132) #fetch metoduyla API'dan şarj istasyonları verisi alınır ve örnek değişkene atanır.
    end
  end