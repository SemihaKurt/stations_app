class StationService
    include HTTParty
    base_uri 'https://api.openchargemap.io/v3'
  
    def self.fetch
      response = get('', query: { output: 'json', countrycode: 'TR', maxresults: 20 })
      return response.parsed_response if response.success?
      
      []
    end
  end