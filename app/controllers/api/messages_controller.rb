class Api::MessagesController < ApplicationController
  def index
    message = Message.order('RANDOM()').first
    render json: JSON.pretty_generate({ message: message.text }), status: :ok
  end
end
