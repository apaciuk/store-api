# frozen_string_literal: true

require 'test_helper'

class FetchProductsServiceTest < ActiveSupport::TestCase
  def setup; end

  test 'should ...' do
    assert_changes -> { something } do
      service = FetchProductsService.new.call

      assert service.success?
    end
  end

  test 'should ...' do
    assert_no_changes -> { something } do
      service = FetchProductsService.new.call

      assert service.failure?
    end
  end
end
