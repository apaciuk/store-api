# frozen_string_literal: true

require 'faraday'
require 'json'

class FetchProductsService < ApplicationService
  def call
    result = yield fetch_products

    Success(result)
  end

  private

  def fetch_products
    products = []
    response = Faraday.get('https://fakestoreapi.com/products') 
    if response.status == 200
      products = JSON.parse(response.body)
    end
    products
  end
end
