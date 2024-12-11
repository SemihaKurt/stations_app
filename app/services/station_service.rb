class StationService
  BASE_URI = 'https://api.openchargemap.io/v3'.freeze #Openchargemap API base URL'i ilgili sabit değişkene atanır.

  def self.fetch(params = {})
    api_key = '72e95fc2-0a92-42db-90de-b03d32a4f0bc' #API key tanımlaması.
    response = HTTParty.get("#{BASE_URI}/poi", query: { key: api_key }.merge(params)) #HTTParty gem'i kullanılarak HTTP GET isteğiyle API'dan veri alınır.

    if response.success?
      response.parsed_response
    else
      handle_error(response)
    end
  end

  private

  def self.handle_error(response)
    error_message = "Error: #{response.code} - #{response.body}"
    Rails.logger.error(error_message)
    [] 
  end
end
  
