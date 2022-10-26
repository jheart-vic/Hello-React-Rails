class Api::V1::MessagesController < ApplicationController
  def index
    message = Message.all
    if message
      render json: message[rand(message.length - 1)]
    else
      render json: messages.errors, status: :bad_request
    end
  end
end
