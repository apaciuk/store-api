# frozen_string_literal: true

module Post
  class CrudService < ApplicationService
    def call
      result = yield call_something

      Success(result)
    end

    private

    def call_something
      # must be return Success or Failure

      # call some service ex: Foo::Bar.new(params).call
      # or manual ex: Success(Record.all)
    end
  end
end
